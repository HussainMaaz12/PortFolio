export type CaseStudyContent = {
  role: string;
  problem: string;
  approach: string;
  result: string;
  challenge: string;
  architecture: {
    title: string;
    description: string;
    points: string[];
  };
  features: Array<{
    title: string;
    description: string;
  }>;
};

export type PortfolioProject = {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  repositoryUrl: string;
  demoUrl: string;
  accent: string;
  image: string;
  caseStudy: CaseStudyContent;
};

const createCaseStudy = (
  role: string,
  problem: string,
  approach: string,
  result: string,
  challenge: string,
  architecture: CaseStudyContent["architecture"],
  features: CaseStudyContent["features"],
): CaseStudyContent => ({ role, problem, approach, result, challenge, architecture, features });

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "A11y Auditor",
    slug: "a11y-auditor",
    description: "An accessibility audit workspace for faster, clearer remediation.",
    tags: ["React", "Node.js", "Redis", "BullMQ", "Accessibility"],
    repositoryUrl: "https://github.com/HussainMaaz12/Website-Auditor",
    demoUrl: "https://website-auditor-7t6kgj8yp-hussainmaaz12s-projects.vercel.app",
    accent: "from-[#201d38] via-[#151724] to-[#111415]",
    image: "/images/a11y-auditor.png",
    caseStudy: createCaseStudy(
      "Full-stack developer & product designer",
      "Manual accessibility checks are slow, inconsistent, and difficult to turn into an actionable remediation plan.",
      "A safe, queue-driven audit service that turns a URL into a clear, prioritised accessibility report.",
      "A focused 0–100 score and issue breakdown give teams a faster path from scan to fix.",
      "Accessibility feedback often arrives late and scattered across multiple tools. A11y Auditor brings the scan, score, and next steps into one workspace, while keeping scans reliable and safe for a public-facing service.",
      {
        title: "Async job queue (Redis + BullMQ)",
        description: "Redis and BullMQ offload long-running browser audits off the main API thread so the user interface remains fast and responsive.",
        points: ["Queued audit workers", "Retry-aware job states", "Live progress updates"],
      },
      [
        {
          title: "Async job queue (Redis + BullMQ)",
          description: "Distributed job processing using Redis and BullMQ manages concurrent audit requests cleanly with automated retries.",
        },
        {
          title: "Security hardening (SSRF protection)",
          description: "SSRF protection and DNS rebinding mitigation prevent malicious URL requests to internal infrastructure.",
        },
        {
          title: "0–100 Scoring & animated results",
          description: "A 0–100 accessibility scoring algorithm with an animated results view provides instant visual feedback.",
        },
      ],
    ),
  },
  {
    name: "Realty Homes",
    slug: "realty-homes",
    description: "A polished property-discovery experience for modern real-estate clients.",
    tags: ["Next.js", "Tailwind CSS", "Real Estate", "UX"],
    repositoryUrl: "https://github.com/HussainMaaz12/RealtyHomesPropertyDealer",
    demoUrl: "https://realty-homes-property-dealer-i2iuyivuq-hussainmaaz12s-projects.vercel.app",
    accent: "from-[#35313a] via-[#1c2027] to-[#111415]",
    image: "/images/realty-homes.png",
    caseStudy: createCaseStudy(
      "Frontend developer & UI/UX designer",
      "Property discovery needed to feel clear and trustworthy on every screen size.",
      "A responsive browsing flow with visual hierarchy designed around high-intent property information.",
      "A refined experience that makes listings easier to scan and compare.",
      "Real-estate decisions depend on a fast understanding of a property. The interface brings location, imagery, and key details forward without making the search experience feel dense.",
      { title: "Responsive listing system", description: "Reusable layout patterns keep property content clear from desktop grids to mobile detail views.", points: ["Component-led UI", "Mobile-first breakpoints", "Consistent listing cards"] },
      [
        { title: "Focused discovery", description: "Search and browsing surfaces are designed around the information buyers look for first." },
        { title: "Clear visual language", description: "Quiet typography and generous spacing let property imagery and facts do the work." },
        { title: "Reusable components", description: "A consistent component system makes future listing and feature updates straightforward." },
      ],
    ),
  },
  {
    name: "CampusConnect",
    slug: "campus-connect",
    description: "A full-stack campus networking platform with real-time chat, typing indicators, and notifications.",
    tags: ["MERN", "Socket.io", "MongoDB", "Express", "React", "Node.js"],
    repositoryUrl: "https://github.com/HussainMaaz12/CampusConnect",
    demoUrl: "https://campus-connect-d98wahytr-hussainmaaz12s-projects.vercel.app",
    accent: "from-[#203441] via-[#17212c] to-[#111415]",
    image: "/images/campus-connect.png",
    caseStudy: createCaseStudy(
      "MERN Full-Stack Developer",
      "Students need a single, secure campus platform for real-time communication, mentorship, and opportunity sharing.",
      "Built a full-stack campus networking web application using MERN (MongoDB, Express, React, Node.js) and Socket.io.",
      "Enabled instant peer messaging with real-time chat, typing indicators, and user notification systems.",
      "CampusConnect addresses campus communication fragmentation by combining secure user authentication, profile management, and real-time Socket.io messaging into one unified platform.",
      {
        title: "MERN Stack + Socket.io Real-Time Engine",
        description: "React frontend and Express backend with Socket.io WebSockets for instant messaging, typing indicators, and notifications.",
        points: ["Secure JWT Authentication", "Socket.io Chat & Notifications", "Optimized MongoDB Data Models"],
      },
      [
        {
          title: "Real-Time Socket.io Messaging",
          description: "Instant chat system with typing indicators and real-time notification alerts.",
        },
        {
          title: "Secure Auth & Profiles",
          description: "User registration, JWT authentication, and customizable profile management functionality.",
        },
        {
          title: "Responsive MERN UI",
          description: "Component-based React UI designed for seamless desktop and mobile engagement.",
        },
      ],
    ),
  },
  {
    name: "Wedding Marketplace",
    slug: "wedding-marketplace",
    description: "A centralized marketplace platform connecting couples with wedding vendors and service listings.",
    tags: ["MERN", "MongoDB", "Express", "React.js", "Node.js"],
    repositoryUrl: "https://github.com/HussainMaaz12/Wedding-Marketplace",
    demoUrl: "https://wedding-marketplace-g92shwzqw-hussainmaaz12s-projects.vercel.app",
    accent: "from-[#3d2933] via-[#211923] to-[#111415]",
    image: "/images/wedding-marketplace.png",
    caseStudy: createCaseStudy(
      "Full-Stack Developer (MERN)",
      "Planning couples need a centralized, structured marketplace to evaluate and connect with wedding vendors and services.",
      "Developed a MERN marketplace platform featuring vendor browsing, dynamic rendering, and service management APIs.",
      "Centralized service discovery, allowing couples to browse vendor listings with optimized data loading.",
      "Wedding planning involves comparing diverse vendor categories. The platform provides structured vendor service listings with optimized backend database connectivity.",
      {
        title: "Centralized Marketplace Architecture",
        description: "Express REST APIs and MongoDB database connectivity supplying dynamic vendor services to a React client.",
        points: ["Vendor Listing APIs", "Dynamic Service Browsing", "Scalable Component Structure"],
      },
      [
        {
          title: "Vendor Service Listings",
          description: "Category-driven service browsing and vendor information display.",
        },
        {
          title: "Dynamic Data Loading",
          description: "Optimized rendering for responsive component performance across devices.",
        },
        {
          title: "Structured Scalability",
          description: "Clean application modularity built for ease of maintenance and growth.",
        },
      ],
    ),
  },
  {
    name: "Tooth Corner",
    slug: "tooth-corner",
    description: "A clean dental clinic web application focused on patient engagement and online appointment accessibility.",
    tags: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
    repositoryUrl: "https://github.com/HussainMaaz12/Tooth-Corner",
    demoUrl: "https://tooth-corner-jw3uhhi3q-hussainmaaz12s-projects.vercel.app",
    accent: "from-[#243d3d] via-[#182827] to-[#111415]",
    image: "/images/tooth-corner.png",
    caseStudy: createCaseStudy(
      "Full-Stack Developer (Django)",
      "Dental clinics need an approachable digital front door with online appointment booking and accessible service info.",
      "Designed and developed a Django & Python web application focused on patient engagement and appointment booking.",
      "Improved online clinic presence and mobile responsiveness for dental patient inquiries.",
      "Healthcare sites require clarity and rapid action paths. Tooth Corner balances professional medical reassurance with an accessible patient appointment workflow.",
      {
        title: "Django MVC Web Architecture",
        description: "Python Django backend with server-rendered template views and appointment handling.",
        points: ["Patient Appointment Routes", "Responsive Front-End Templates", "Clean Information Architecture"],
      },
      [
        {
          title: "Appointment & Contact Flow",
          description: "Interactive forms for scheduling consultations and clinic inquiries.",
        },
        {
          title: "Mobile Optimization",
          description: "Fully responsive layout tailored for accessibility on all screen sizes.",
        },
        {
          title: "Service Presentation",
          description: "Organized dental treatment categories for intuitive patient navigation.",
        },
      ],
    ),
  },
  {
    name: "Student Mentorship",
    slug: "student-mentorship",
    description: "A mentoring platform designed to help students learn, connect, and grow.",
    tags: ["React", "Mentorship", "Community", "UX"],
    repositoryUrl: "https://github.com/HussainMaaz12/student-mentorship",
    demoUrl: "https://student-mentorship.vercel.app",
    accent: "from-[#302847] via-[#1c1b2b] to-[#111415]",
    image: "/images/student-mentorship.png",
    caseStudy: createCaseStudy(
      "Frontend developer & product designer",
      "Students benefit from easier access to guidance, shared experience, and relevant learning paths.",
      "A clear mentoring experience that makes connection and growth feel attainable.",
      "An approachable product concept for building meaningful student support networks.",
      "The platform focuses on the human side of learning: finding the right people, understanding what is possible, and making the first conversation easier.",
      { title: "Mentorship experience", description: "A simple interface supports the core journey from discovering mentors to exploring shared growth opportunities.", points: ["Profile-led discovery", "Clear action paths", "Responsive layouts"] },
      [
        { title: "Mentor discovery", description: "Structured information helps students identify people and guidance relevant to their goals." },
        { title: "Growth-focused design", description: "The interface gives learning and connection equal visual weight." },
        { title: "Accessible interaction", description: "Clear controls and readable layouts keep the product approachable for every visitor." },
      ],
    ),
  },
];
