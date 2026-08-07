import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
   name?: string;
   email?: string;
   company?: string;
   services?: string[];
   details?: string;
};

function escapeHtml(value: string) {
   return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
   try {
      const apiKey = process.env.RESEND_API_KEY;
      const recipient = process.env.KIN_CONTACT_TO;
      const sender = process.env.KIN_CONTACT_FROM;

      if (!apiKey || !recipient || !sender) {
         console.error("Missing Resend contact-form environment variables.");

         return NextResponse.json(
            {
               message: "The contact form is temporarily unavailable. Please email kinsoftwarecompany@gmail.com directly.",
            },
            { status: 503 },
         );
      }

      const body = (await request.json()) as ContactRequest;

      const name = body.name?.trim() ?? "";
      const email = body.email?.trim() ?? "";
      const company = body.company?.trim() ?? "";
      const details = body.details?.trim() ?? "";

      const services = Array.isArray(body.services) ? body.services.filter((service): service is string => typeof service === "string" && service.trim().length > 0) : [];

      if (!name || !email || !details || services.length === 0) {
         return NextResponse.json(
            {
               message: "Please complete the required fields and select at least one service.",
            },
            { status: 400 },
         );
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         return NextResponse.json(
            {
               message: "Please enter a valid email address.",
            },
            { status: 400 },
         );
      }

      if (name.length > 120 || email.length > 254 || company.length > 160 || details.length > 6000) {
         return NextResponse.json(
            {
               message: "One or more fields exceed the allowed length.",
            },
            { status: 400 },
         );
      }

      const resend = new Resend(apiKey);

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeCompany = escapeHtml(company || "Not provided");
      const safeDetails = escapeHtml(details).replaceAll("\n", "<br />");
      const safeServices = services.map((service) => escapeHtml(service)).join("<br />");

      const result = await resend.emails.send({
         from: sender,
         to: recipient,
         replyTo: email,
         subject: `New Work With Kin inquiry from ${name}`,
         text: [`Name: ${name}`, `Email: ${email}`, `Business or organization: ${company || "Not provided"}`, "", "Services:", ...services.map((service) => `- ${service}`), "", "Project details:", details].join("\n"),
         html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
               <h1 style="font-size: 24px;">
                  New Work With Kin inquiry
               </h1>

               <p><strong>Name:</strong> ${safeName}</p>
               <p><strong>Email:</strong> ${safeEmail}</p>
               <p>
                  <strong>Business or organization:</strong>
                  ${safeCompany}
               </p>

               <h2 style="margin-top: 32px; font-size: 18px;">
                  Selected services
               </h2>

               <p>${safeServices}</p>

               <h2 style="margin-top: 32px; font-size: 18px;">
                  Project details
               </h2>

               <p>${safeDetails}</p>
            </div>
         `,
      });

      if (result.error) {
         console.error("Resend contact-form error:", result.error);

         return NextResponse.json(
            {
               message: "Your message could not be sent. Please email kinsoftwarecompany@gmail.com directly.",
            },
            { status: 500 },
         );
      }

      return NextResponse.json(
         {
            message: "Message sent successfully.",
         },
         { status: 200 },
      );
   } catch (error) {
      console.error("Contact form error:", error);

      return NextResponse.json(
         {
            message: "Your message could not be sent. Please try again or email kinsoftwarecompany@gmail.com directly.",
         },
         { status: 500 },
      );
   }
}
