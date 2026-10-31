// Everything the page says lives here, so it can be edited without touching layout code.

export const profile = {
  name: "Olabiyi Olaleye",
  handle: "olabiyi-olaleye",
  role: "Software engineer",
  stackLine: "React · Next.js · React Native · TypeScript · SQL",
  status: "Available for remote roles",
  location: "Lagos, Nigeria · UTC+1",
  email: "olabiyi.olaleye23@gmail.com",
  linkedin: "https://www.linkedin.com/in/olabiyi-olaleye-94b896128",
  github: "https://github.com/olabiyi-olaleye",
  cal: "https://cal.com/olabiyi-olaleye/intro-call",
  cv: "/Olabiyi_Olaleye_Resume.pdf",
  photo: "/img/olabiyi.webp",
  intro:
    "I build web and mobile products that people pay through, book through and check in with. Six years of React, most of it on Nigerian products: event ticketing, lending, property deals and short-let bookings. TypeScript on the front end, Node behind it, and SQL when the numbers in production stop adding up.",
};

export const stats = [
  { value: "6 yrs", label: "building with React" },
  { value: "2", label: "products of my own, live" },
  { value: "17", label: "pgTAP permission test files in Evermora" },
  { value: "2", label: "AI features shipped on a deal platform" },
];

export type Project = {
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  description: string;
  points: string[];
  stack: string[];
  demo: string;
  code: string;
};

export const projects: Project[] = [
  {
    name: "Evermora",
    tagline: "Online memorials and funeral information in one permanent link",
    image: "/img/evermora.webp",
    imageAlt: "The Evermora homepage, with a sample memorial card for Adaeze Nwosu",
    description:
      "A family gets a memorial page with the life story, photos, tributes and everything people need for the funeral, each event with its own time, venue, directions and streaming link. Visitors never need an account. The family runs it from a private dashboard, and moderators use a separate admin app.",
    points: [
      "Three Next.js apps in one Turborepo, sharing a domain layer with no framework code in it",
      "Every permission is checked three times: in the UI, in the domain layer and by Postgres Row Level Security",
      "17 pgTAP test files log in as visitor, owner, editor, moderator and admin and check what each one can see",
      "Playwright runs 100+ end-to-end tests against a local Supabase stack in CI",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Drizzle", "Turborepo", "pgTAP", "Playwright"],
    demo: "https://evermora-web.vercel.app",
    code: "https://github.com/olabiyi-olaleye/evermora-memorials",
  },
  {
    name: "Wedding Photo Sharing",
    tagline: "Every guest's photos in one album, no app to install",
    image: "/img/wedding.webp",
    imageAlt: "The guest upload screen, asking for a name and how the guest knows the couple",
    description:
      "I built this for my own wedding. Guests scanned a QR code on their table, typed their name and dropped their photos into one shared album. The couple gets an admin dashboard, printable QR tickets and a one-click ZIP of everything.",
    points: [
      "Uploads over Vercel's 4.5MB body limit now work: the server only checks the first bytes of each file",
      "Rate limits are keyed per guest, because everyone at the venue shared one WiFi IP",
      "Duplicates are caught with a SHA-256 of the file, so burst shots stop being rejected as copies",
      "EXIF data is stripped in the browser, so nobody's location leaks with their photos",
    ],
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "Upstash Redis", "Tailwind CSS"],
    demo: "https://wedding-photo-platform.vercel.app",
    code: "https://github.com/olabiyi-olaleye/wedding-photo-sharing",
  },
];

export type Note = {
  title: string;
  project: string;
  problem: string;
  fix: string;
  lang: string;
  file: string;
  code: string;
  href: string;
};

export const notes: Note[] = [
  {
    title: "Big photos failed before they reached the server",
    project: "Wedding Photo Sharing",
    problem:
      "Vercel functions reject request bodies over 4.5MB. Phone photos are often bigger, so file-type validation failed on exactly the photos guests cared about, and Safari showed a meaningless error.",
    fix: "The check only ever needed the file signature, so the browser now sends a 64-byte slice and the server reads the first 16 bytes.",
    lang: "ts",
    file: "app/upload/page.tsx + app/api/upload/validate/route.ts",
    code: `// browser: send only the header, not the whole photo
formData.append("file", file.slice(0, 64, file.type), file.name)

// server: magic bytes decide the type, not the extension
const header = new Uint8Array(await file.slice(0, 16).arrayBuffer())
const detected = detectType(header) // jpeg, png, webp, heic...`,
    href: "https://github.com/olabiyi-olaleye/wedding-photo-sharing/blob/main/app/api/upload/validate/route.ts",
  },
  {
    title: "One busy table could block the whole venue",
    project: "Wedding Photo Sharing",
    problem:
      "Uploads were limited per IP address. At the venue every guest was on the same WiFi, so a few busy uploaders used up everyone's allowance.",
    fix: "The limit is now keyed on each guest's own token, with IP only as a fallback.",
    lang: "ts",
    file: "app/api/upload/check-rate-limit/route.ts",
    code: `// Key by guest token when available so guests sharing one
// venue/WiFi IP don't share a single 60/hour budget.
const rateLimitKey = guestToken ? \`guest:\${guestToken}\` : \`ip:\${ip}\`
const { allowed, remaining, resetTime } =
  await checkUploadRateLimit(rateLimitKey)`,
    href: "https://github.com/olabiyi-olaleye/wedding-photo-sharing/blob/main/app/api/upload/check-rate-limit/route.ts",
  },
  {
    title: "Private photos stay private, even if the UI is wrong",
    project: "Evermora",
    problem:
      "A memorial can be public, link-only or private, and families add editors and moderators. A bug in one screen shouldn't be enough to leak a private photo.",
    fix: "Postgres decides who can read a file, and pgTAP tests log in as each role to prove it.",
    lang: "sql",
    file: "supabase/migrations + supabase/tests/060_rls_media_test.sql",
    code: `create policy "memorial-private read" on storage.objects
  for select to anon, authenticated
  using (
    bucket_id = 'memorial-private'
    and ( app.is_memorial_member(app.storage_memorial_id(name))
          or /* published, public memorial and public photos */ ... )
  );

-- test: a stranger cannot see a private memorial's photo
select pg_temp.login_as('a0000000-0000-4000-a000-000000000004');`,
    href: "https://github.com/olabiyi-olaleye/evermora-memorials/tree/main/supabase/tests",
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
    title: "AI that reads a property deal before investors do",
    context: "JV Deal Management Platform · NimbleByte Global · built with the team",
    problem:
      "Investors and deal managers had to read whole deal files to decide whether a joint venture made sense: the land, the location, and everything the developer submitted.",
    work: [
      "Added a deal summary using the Claude and OpenAI APIs, so people get the key points without reading the full file",
      "Added a deal analysis that compares the land, the location and the developer's submission, looks at how the sale and the build are likely to go, and gives investors a recommendation",
      "Both are in use inside the company by landowners, developers and investors",
      "Checked what the models return against the deal data before it reaches anyone, using what I learned from AI evaluation work",
    ],
  },
  {
    title: "Event check-in that works at the door",
    context: "NimbleBash · React web admin and React Native app",
    problem:
      "Guests buy or claim tickets, hosts run the event and ushers scan people in. The web admin and the mobile app had drifted apart, and a user's role didn't survive an app refresh.",
    work: [
      "Built check-in around one QR payload format that web and mobile read the same way",
      "Built digital tickets, usher approval, and free and paid ticket claiming",
      "Made roles survive a refresh, and let someone who is host, guest and usher switch between them",
      "Audited the app on a real Android device and fixed notifications that opened the wrong screen",
    ],
  },
  {
    title: "Payment and lending screens that have to be right",
    context: "NimbleBash, NimbleFinance and a short-let booking platform",
    problem:
      "When money moves, the screen has to show exactly what happened. A payment shown as failed when it went through costs trust fast.",
    work: [
      "Built the frontend of the Paystack, Monnify and Stripe payment flows",
      "On NimbleFinance, worked on the credit-registry integration and the data models for BVN, NIN and CAC records",
      "Tracked down a cross-site cookie bug that was breaking sign-in",
      "Traced user-reported issues with SQL across booking, transaction and audit tables",
    ],
  },
];

export const dataProjects = [
  {
    name: "Brazilian e-commerce analysis",
    tool: "SQL · MySQL",
    note: "120,000 records. São Paulo is over 40% of customers, and delivery takes 8 days there against 29 in Roraima.",
    href: "https://github.com/olabiyi-olaleye/SQL_Project_Ecommerce_Analysis",
  },
  {
    name: "Vintage Couture sales report",
    tool: "Power BI",
    note: "₦18.41m in revenue for a Nigerian vintage retailer, broken down by channel, region, age group and month.",
    href: "https://github.com/olabiyi-olaleye/PowerBI_Project_Vintage_Couture",
  },
  {
    name: "Data science salaries during COVID-19",
    tool: "Excel",
    note: "Cleaned a global salary dataset and built a dashboard on pay by region, role, experience and remote work.",
    href: "https://github.com/olabiyi-olaleye/Excel_Project_Global_Data_Science_Salaries",
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "NimbleByte Global",
    when: "May 2022 – now",
    where: "Lagos, remote",
    note: "Web, mobile and backend across NimbleBash, NimbleFinance, the JV deal platform, NimbleGRC and NimbleCasa.",
  },
  {
    role: "AI evaluation and data annotation",
    org: "Contract",
    when: "2025 – 2026",
    where: "Remote",
    note: "Wrote rubrics, compared model responses and rated audio, image and video outputs.",
  },
  {
    role: "Frontend Developer",
    org: "Korpea Technology",
    when: "May 2020 – Aug 2022",
    where: "US company, remote",
    note: "Production pages for a US company, moving parts of the interface to React.",
  },
  {
    role: "Sales and Marketing",
    org: "First City Monument Bank",
    when: "May 2019 – Apr 2020",
    where: "Nigeria",
    note: "Excel macros that cut reporting time by half, and customer segmentation.",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "frontend", items: ["TypeScript", "React", "Next.js (App Router)", "Redux Toolkit", "React Query", "Tailwind CSS", "SASS"] },
  { label: "mobile", items: ["React Native", "Expo", "Expo Router", "Push notifications", "PWAs"] },
  { label: "backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "Supabase", "Upstash Redis"] },
  { label: "data", items: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Power BI", "Tableau", "Excel"] },
  { label: "ai", items: ["Claude API", "OpenAI API", "Prompt design", "Output evaluation", "Claude Code"] },
  { label: "tools", items: ["Git", "Azure DevOps", "Turborepo", "Vercel", "Sentry", "Playwright", "pgTAP"] },
];

export const education = [
  "B.Sc. Economics, Obafemi Awolowo University",
  "ND Statistics, The Polytechnic, Ibadan",
  "Google Data Analytics Professional Certificate",
];
