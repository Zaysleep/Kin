export type ProductStatus = "live" | "development";

export type Product = {
   id: "allevin" | "sidewalk" | "frontoffice";
   number: string;
   name: string;
   studioLabel?: string;
   subtitle: string;
   tagline?: string;
   summary: string;
   coreQuestion: string;
   environment: string;
   emotionalOutcome: string;
   status: string;
   statusType: ProductStatus;
   imageSrc: string;
   imageAlt: string;
   accentColor: string;
   actionLabel: string;
   href: string | null;
};

export const products: Product[] = [
   {
      id: "allevin",
      number: "01",
      name: "ALLEVIN",
      subtitle: "Adaptive Project Workspace",
      summary: "ALLEVIN brings project notes, materials, writing, schedules, and guidance into one focused workspace. It helps people see where a project stands and choose the next move with confidence.",
      coreQuestion: "What does this project need next, and why?",
      environment: "Project Binder / Creative Workspace",
      emotionalOutcome: "I know what to do next.",
      status: "Live / Active Testing",
      statusType: "live",
      imageSrc: "/images/allevin-feature.png",
      imageAlt: "A calm workspace representing project materials, writing, and focused work.",
      accentColor: "var(--color-allevin)",
      actionLabel: "Open ALLEVIN",
      href: "https://allevin.vercel.app/",
   },
   {
      id: "sidewalk",
      number: "02",
      name: "Sidewalk",
      subtitle: "A Thoughtful Guide to Your City",
      tagline: "Make today worth remembering.",
      summary: "Sidewalk helps people decide where to go and what kind of day they want to have. It brings together trusted local recommendations, mood-based collections, and places worth making time for.",
      coreQuestion: "How should today feel?",
      environment: "Independent City Guide / Travel Journal",
      emotionalOutcome: "I have something good to look forward to.",
      status: "In Development",
      statusType: "development",
      imageSrc: "/images/sidewalk-feature.png",
      imageAlt: "A warm city-guide scene representing local places, discovery, and memorable days.",
      accentColor: "var(--color-sidewalk)",
      actionLabel: "Coming Soon",
      href: null,
   },
   {
      id: "frontoffice",
      number: "03",
      name: "FrontOffice",
      studioLabel: "Built by Kin",
      subtitle: "Sports GM Social Hub",
      tagline: "Be the GM. Make the call. Keep the receipts.",
      summary: "FrontOffice turns sports opinions into decisions fans can stand behind. Manage teams, make the call, debate moves, follow what changes, and keep a record of how every take holds up over time.",
      coreQuestion: "What would I do if I ran this team—and can I defend that decision?",
      environment: "Sports Newsroom / Morning Newspaper",
      emotionalOutcome: "I have a take, and I can back it up.",
      status: "Live / Active Testing",
      statusType: "live",
      imageSrc: "/images/frontoffice-feature.png",
      imageAlt: "A sports editorial scene representing headlines, team decisions, and fan debate.",
      accentColor: "var(--color-frontoffice)",
      actionLabel: "Visit FrontOffice",
      href: "https://front-office-lilac.vercel.app/",
   },
];
