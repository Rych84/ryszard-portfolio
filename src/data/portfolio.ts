export const personalInfo = {
  name: "Ryszard Tomaszewski",
  title: "Senior SDET | QA Automation Lead",
  tagline: "Engineering quality at enterprise scale",
  location: "Hanover, MD",
  email: "tomaszewski.ryszard@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryszardtomaszewski/",
  github: "https://github.com/Rych84",
  photo: "/images/ryszard.jpg",
  bio: "Senior SDET and QA Automation Lead with 14+ years of experience engineering quality for high-stakes enterprise applications in fintech, healthcare, and regulated industries. I build automation frameworks that scale, lead QA teams, and integrate testing deep into CI/CD pipelines — helping organizations ship faster with confidence.",
  bio2: "Currently consulting independently, I bring the same rigor I applied at Charles Schwab and TD Ameritrade to clients across web and API testing. I'm passionate about the intersection of AI and test automation — and I write about it regularly.",
};

export const stats = [
  { label: "Years Experience", value: "14+" },
  { label: "Annual Cost Savings", value: "$4M" },
  { label: "Regression Reduction", value: "30%" },
  { label: "Industries Served", value: "3+" },
];

export const experience = [
  {
    id: 1,
    role: "Senior QA Automation Engineer",
    company: "Independent Consultant",
    location: "Remote",
    period: "Jan 2025 – Present",
    current: true,
    highlights: [
      "Provide SDET and QA automation consulting for web applications and REST APIs",
      "Design and maintain Selenium WebDriver frameworks using C# and Java for UI and API testing",
      "Define automation strategy and improve test coverage for microservices architectures",
      "Accelerate test script generation and code reviews using Claude Code and GitHub Copilot — cutting boilerplate time by ~40%",
      "Use Cursor AI IDE for intelligent refactoring and context-aware framework development",
      "Deploy and iterate client-facing QA dashboards and tooling on Vercel with Next.js",
      "Apply AI-assisted test case generation and requirements analysis to improve coverage on short-cycle sprints",
      "Use ChatGPT for rapid test strategy drafting, edge case brainstorming, and documentation",
      "Leverage Playwright AI for intelligent element detection and self-healing locator strategies",
    ],
    tags: ["Selenium", "C#", "Java", "Postman", "AWS", "CI/CD", "Claude Code", "GitHub Copilot", "Cursor", "Vercel", "Next.js", "ChatGPT", "Playwright AI"],
  },
  {
    id: 2,
    role: "Senior Test Automation Engineer",
    company: "Charles Schwab",
    location: "Columbia, MD",
    period: "Feb 2021 – Dec 2024",
    current: false,
    highlights: [
      "Developed UI and API automation for the Deny and Self Remedy initiatives — saving ~$4M annually",
      "Acted as QA lead coordinating testing efforts across business and compliance requirements",
      "Implemented BDD automation tests for international account-opening flows (HK, IN)",
      "Enhanced automation framework (WebdriverIO, SpecFlow, C#) for single-page applications",
      "Developed automation for AMEX integration and bot-detection (Crypto Cookie) initiatives",
      "Owned UAT coordination for key compliance and business initiatives, aligning stakeholder sign-off with release gates",
    ],
    tags: ["WebdriverIO", "SpecFlow", "C#", "BDD", "Jenkins", "SQL", "UAT"],
  },
  {
    id: 3,
    role: "Senior Test Automation Engineer",
    company: "TD Ameritrade",
    location: "Columbia, MD",
    period: "Nov 2017 – Feb 2021",
    current: false,
    highlights: [
      "Developed and maintained Selenium automation in Java — reducing manual regression testing by 30%",
      "Led QA and compliance testing efforts for regulated financial systems",
      "Implemented CI/CD pipelines with Jenkins; cross-browser testing on BrowserStack and Perfecto",
      "Key member of the TDA-Scottrade acquisition team, integrating Scottrade accounts into TDA",
      "Conducted UAT with business stakeholders for retail financial products; served as QA point of contact bridging engineering and business teams",
    ],
    tags: ["Selenium", "Java", "Jenkins", "BrowserStack", "Perfecto", "REST API", "UAT"],
  },
  {
    id: 4,
    role: "SDET",
    company: "TD Ameritrade",
    location: "Columbia, MD",
    period: "Oct 2016 – Nov 2017",
    current: false,
    highlights: [
      "Created and executed tests for the TDA retail web team in an Agile environment",
      "Contributed to automation framework development for enterprise financial applications",
      "Refactored in-house framework built on Java with Selenium",
    ],
    tags: ["Selenium", "Java", "Jira", "HP ALM", "Telerik Fiddler"],
  },
  {
    id: 5,
    role: "Automation Test Engineer / Business Analyst",
    company: "Roche",
    location: "Poland & USA",
    period: "Sep 2013 – Oct 2016",
    current: false,
    highlights: [
      "Subject matter expert for STAR/Bridge, RANGE, and 2FA-Genentech projects; QA team leader",
      "Supported Salesforce-based sample management systems used in clinical cancer research",
      "Worked with international teams across Genentech (SF), Ventana (Tucson), Madrid, Basel, Germany",
      "Developed test plans for enterprise applications requiring regulatory compliance",
    ],
    tags: ["Salesforce", "HP ALM", "UAT", "SIT", "Performance Testing", "Regulatory Compliance"],
  },
];

export const skillCategories = [
  {
    category: "Test Automation",
    items: ["Selenium WebDriver", "WebdriverIO", "SpecFlow", "BDD / Gherkin", "Test Automation Frameworks"],
  },
  {
    category: "Programming",
    items: ["C#", "Java", "TypeScript", "Python", "SQL"],
  },
  {
    category: "API Testing",
    items: ["REST API", "Postman", "Swagger", "SoapUI"],
  },
  {
    category: "CI/CD & DevOps",
    items: ["Jenkins", "Bamboo", "GitHub Actions", "Git", "Bitbucket"],
  },
  {
    category: "Cloud & Platforms",
    items: ["AWS", "SauceLabs", "BrowserStack", "Perfecto"],
  },
  {
    category: "AI Tools",
    items: [
      "Claude Code",
      "GitHub Copilot",
      "Cursor AI",
      "Playwright AI",
      "Vercel AI",
      "v0 by Vercel",
    ],
  },
  {
    category: "Tools",
    items: ["Jira", "Splunk", "HP ALM", "Telerik Fiddler"],
  },
  {
    category: "Methodologies",
    items: ["Agile / Scrum", "Risk-Based Testing", "TDD", "Test Strategy", "DevOps", "UAT / User Acceptance Testing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Deny & Self Remedy Automation",
    company: "Charles Schwab",
    period: "2021–2024",
    impactLabel: "~$4M annual savings",
    type: "Fintech",
    description:
      "Led QA automation for a high-stakes operational initiative reducing manual intervention in account management workflows. Built end-to-end UI and API automation suites verifying complex business rules across microservices.",
    outcomes: [
      "~$4M in annual operational cost savings",
      "Full UI and API automation coverage across all workflows",
      "Zero production regressions for 3 consecutive quarters",
    ],
    tech: ["WebdriverIO", "SpecFlow", "C#", "REST API", "Jenkins", "SQL"],
  },
  {
    id: 2,
    title: "International Account Opening (BDD)",
    company: "Charles Schwab",
    period: "2022–2023",
    impactLabel: "2 international markets",
    type: "International",
    description:
      "Implemented BDD-driven automation for international brokerage account-opening flows targeting Hong Kong and India markets. Ensured compliance with local regulatory requirements through structured test coverage.",
    outcomes: [
      "Full BDD test coverage for HK and IN market flows",
      "Regulatory compliance validation fully automated",
      "Seamless integration into existing CI/CD pipeline",
    ],
    tech: ["SpecFlow", "BDD", "C#", "Gherkin", "REST API"],
  },
  {
    id: 3,
    title: "NCE Automation Framework",
    company: "TD Ameritrade",
    period: "2017–2021",
    impactLabel: "30% regression reduction",
    type: "Fintech",
    description:
      "Developed and maintained a comprehensive Selenium framework in Java for the NCE team. Replaced fragile legacy tests with a robust, maintainable solution integrated with Jenkins CI/CD and cross-browser cloud execution.",
    outcomes: [
      "30% reduction in manual regression testing time",
      "CI/CD integration with cross-browser cloud support",
      "Part of the TDA-Scottrade acquisition testing effort",
    ],
    tech: ["Selenium", "Java", "Jenkins", "BrowserStack", "Perfecto", "TestNG"],
  },
  {
    id: 4,
    title: "Clinical Research Systems QA",
    company: "Roche",
    period: "2013–2016",
    impactLabel: "5-country delivery",
    type: "Healthcare",
    description:
      "Led QA for enterprise Salesforce-based clinical cancer research platforms across international teams. Ensured regulatory compliance (FDA / clinical standards) for systems used in drug trial sample management.",
    outcomes: [
      "100% SIT/UAT sign-off for STAR, RANGE, and 2FA-Genentech",
      "Cross-functional coordination across 5 countries",
      "Performance and regulatory compliance validated",
    ],
    tech: ["Salesforce", "HP ALM", "Performance Testing", "UAT", "SIT"],
  },
];

export const certifications = [
  {
    abbr: "ISTQB",
    name: "ISTQB Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    color: "#3b82f6",
  },
  {
    abbr: "ICP-ATA",
    name: "ICAgile Certified Professional — Agile Test Automation",
    issuer: "ICAgile",
    color: "#06b6d4",
  },
  {
    abbr: "ICP-FDO",
    name: "ICAgile Certified Professional — Foundations of DevOps",
    issuer: "ICAgile",
    color: "#8b5cf6",
  },
];

export const blogPosts = [
  {
    slug: "ai-powered-test-automation-2025",
    title: "AI-Powered Test Automation: How LLMs Are Reshaping QA in 2025",
    excerpt:
      "Large language models aren't just writing code — they're generating test cases, analyzing failure patterns, and identifying coverage gaps. Here's what a senior SDET actually uses in production.",
    date: "April 15, 2025",
    readTime: "8 min read",
    tags: ["AI", "Test Automation", "LLMs"],
  },
  {
    slug: "playwright-vs-selenium-2025",
    title: "Playwright vs Selenium in 2025: A Senior SDET's Honest Take",
    excerpt:
      "After 14 years with Selenium — and the past year running both in production — here's the real comparison: not benchmarks, but what actually matters when you own a framework at scale.",
    date: "March 28, 2025",
    readTime: "6 min read",
    tags: ["Selenium", "Playwright", "Frameworks"],
  },
  {
    slug: "bdd-at-scale-lessons-learned",
    title: "BDD at Scale: Lessons From 3 Years of SpecFlow in Financial Systems",
    excerpt:
      "BDD sounds great on paper. After implementing it for international account-opening flows at a major financial brokerage, here's what worked, what broke, and what I'd do differently.",
    date: "February 10, 2025",
    readTime: "10 min read",
    tags: ["BDD", "SpecFlow", "Fintech"],
  },
];

export const education = {
  university: "Cardinal Stefan Wyszyński University",
  location: "Warsaw, Poland",
  degrees: [
    "Master of Science in Computer Science and Econometrics",
    "Bachelor of Science in Computer Science and Econometrics",
  ],
};
