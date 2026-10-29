// Everything the page says lives here, so it can be edited without touching layout code.

export const profile = {
  name: "Olabiyi Olaleye",
  role: "Software engineer: React, Next.js and React Native",
  location: "Lagos, Nigeria · open to remote work",
  email: "olabiyi.olaleye23@gmail.com",
  linkedin: "https://www.linkedin.com/in/olabiyi-olaleye-94b896128",
  github: "https://github.com/DataByOlabiyi",
  intro:
    "I build web and mobile products that people pay through, book through and check in with. Six years of React, most of it on Nigerian products: event ticketing, lending, short-let bookings. I write TypeScript on the front end, Node behind it, and I reach for SQL when the numbers in production stop adding up.",
};

export const about = [
  "I came into software from Economics and Statistics, and that side never left. When a payment or a booking ends up in the wrong state, the first thing I do is follow it through the tables and find where it stopped. I'd rather know what the data says before I change any code.",
  "Since 2022 I've worked at NimbleByte Global across web, mobile and backend. Before that I spent two years building frontends remotely for a US company. I also take on my own products, two of which you can open below.",
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  points: string[];
  stack: string[];
  demo: string;
  code: string;
};

export const projects: Project[] = [
  {
    name: "Evermora",
    tagline: "One permanent link to remember someone",
    description:
      "A family gets a memorial page with the life story, photos, tributes from visitors and everything people need for the funeral: the wake, the service and the burial as separate events with times, venues, directions and streaming links. Visitors never need an account. The family runs it from a private dashboard, and there's a separate admin app for moderation.",
    points: [
      "Three Next.js apps in one Turborepo monorepo, sharing a framework-free domain layer",
      "Authorization checked in the UI, in the domain layer and again by Postgres Row Level Security",
      "17 pgTAP test files that log in as visitor, owner, editor, moderator and admin and check what each can see",
      "Installable PWA, built mobile-first because most people will open it from a message on their phone",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Drizzle", "Turborepo", "Playwright"],
    demo: "https://evermora-web.vercel.app",
    code: "https://github.com/DataByOlabiyi/evermora-memorials",
  },
  {
    name: "Wedding Photo Sharing",
    tagline: "Every guest's photos in one album",
    description:
      "I built this for my own wedding. Guests scanned a QR code on their table, typed their name and dropped their photos into one shared album, with no app to install and no account to create. The couple gets an admin dashboard, printable QR tickets and a one-click ZIP of everything.",
    points: [
      "Got around Vercel's 4.5MB request limit by validating only the file header, so large photos upload cleanly",
      "Rate limits keyed per guest, because everyone at the venue was on the same WiFi and shared one IP",
      "Duplicate detection on a SHA-256 of the file, so burst shots stop being rejected as copies",
      "EXIF data stripped in the browser, so nobody's location leaks with their photos",
    ],
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "Upstash Redis", "Tailwind CSS"],
    demo: "https://wedding-photo-platform.vercel.app",
    code: "https://github.com/DataByOlabiyi/wedding-photo-sharing",
  },
];

export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  work: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Event check-in that works at the door",
    context: "NimbleBash · event ticketing, React web admin and React Native app",
    problem:
      "Guests buy or claim tickets, hosts run the event and ushers scan people in at the door. The web admin and the mobile app had drifted apart, and on mobile a user's role didn't survive an app refresh.",
    work: [
      "Built the check-in flow around one QR payload format that both web and mobile read the same way",
      "Built digital tickets, usher approval, and free and paid ticket claiming",
      "Fixed role handling so it survives a refresh, and let someone who is host, guest and usher switch between roles with a confirmation step",
      "Audited the app on a real Android device, rewrote the responsive layout logic, and fixed notifications that opened the wrong screen",
    ],
  },
  {
    title: "Payment and lending screens that have to be right",
    context: "NimbleBash, NimbleFinance and a short-let booking platform",
    problem:
      "When money moves, the screen has to show exactly what happened. A payment that shows as failed when it went through, or the other way round, costs trust fast.",
    work: [
      "Built the frontend of the Paystack, Monnify and Stripe payment flows",
      "On NimbleFinance, a Next.js lending platform, worked on the credit-registry integration and the data models for BVN, NIN and CAC records",
      "Tracked down a cross-site cookie bug that was breaking sign-in",
      "Traced user-reported issues with SQL across booking, transaction and audit tables, comparing what the API sent with what was stored",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["TypeScript", "React", "Next.js (App Router)", "Redux Toolkit", "React Query", "Tailwind CSS", "SASS"] },
  { label: "Mobile", items: ["React Native", "Expo", "Expo Router", "Push notifications", "PWAs"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "Supabase", "Upstash Redis"] },
  { label: "Data", items: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Power BI", "Tableau", "Excel"] },
  { label: "Tools", items: ["Git and GitHub", "Azure DevOps", "Turborepo", "Vercel", "Sentry", "Figma", "Testing Library"] },
];

export const dataProjects = [
  {
    name: "Brazilian e-commerce analysis",
    tool: "SQL · MySQL",
    note: "120,000 records. São Paulo is over 40% of customers, and delivery takes 8 days there against 29 in Roraima.",
    href: "https://github.com/DataByOlabiyi/SQL_Project_Ecommerce_Analysis",
  },
  {
    name: "Vintage Couture sales report",
    tool: "Power BI",
    note: "₦18.41m in revenue for a Nigerian vintage retailer, broken down by channel, region, age group and month.",
    href: "https://github.com/DataByOlabiyi/PowerBI_Project_Vintage_Couture",
  },
  {
    name: "Data science salaries during COVID-19",
    tool: "Excel",
    note: "Cleaned a global salary dataset and built a dashboard on pay by region, role, experience and remote work.",
    href: "https://github.com/DataByOlabiyi/Excel_Project_Global_Data_Science_Salaries",
  },
];

export const experience = [
  { role: "Software Developer", org: "NimbleByte Global", when: "May 2022 to now", where: "Lagos, remote" },
  { role: "Frontend Developer", org: "Korpea Technology", when: "May 2020 to Aug 2022", where: "US company, remote" },
  { role: "Sales and Marketing", org: "First City Monument Bank", when: "May 2019 to Apr 2020", where: "Nigeria" },
];

export const education = [
  "B.Sc. Economics, Obafemi Awolowo University",
  "ND Statistics, The Polytechnic, Ibadan",
  "Google Data Analytics Professional Certificate",
];
