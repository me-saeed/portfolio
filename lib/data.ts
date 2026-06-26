// Central content for the portfolio.
// Everything shown on the site is driven from this file — edit here to update content.

export const profile = {
  name: "Muhammad Saeed",
  role: "AI Agent, Full-Stack & React Native Engineer",
  headline:
    "AI, web, and mobile systems built for growth.",
  intro:
    "For the past 5+ years, I've built production-ready AI agents, RAG systems, workflow automations, full-stack web platforms, and React Native mobile applications for healthcare, IoT, CRM, inventory, support, and document Q&A systems.",
  // A few quick proof points shown in the hero.
  stats: [
    { value: "8+", label: "Years building AI, web & mobile systems" },
    { value: "15+", label: "AI agents & automations delivered" },
    { value: "40+", label: "Web and mobile products shipped" },
  ],
  // Short list of capabilities surfaced near the hero.
  focus: [
    "AI Agent Development",
    "Full-Stack Engineering",
    "React Native Mobile Apps",
    "Workflow Automation",
    "RAG & LLM Systems",
  ],
};

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "AI Agent Development",
    description:
      "Custom AI agents that automate support, document Q&A, CRM tasks, inventory alerts, and business decision workflows.",
    deliverables: [
      "LLM agent design",
      "LangChain / RAG systems",
      "Document Q&A agents",
      "CRM & support automation",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Smart automations that connect tools, reduce manual work, and help teams save hours every week.",
    deliverables: [
      "n8n / Make / Zapier workflows",
      "Custom webhook automation",
      "Data routing pipelines",
      "Email, CRM & operations automation",
    ],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Scalable web platforms built with modern frontend, backend, API, and database technologies.",
    deliverables: [
      "React / Next.js builds",
      "Node.js / NestJS APIs",
      "PostgreSQL / MongoDB",
      "Admin dashboards & SaaS platforms",
    ],
  },
  {
    title: "React Native Mobile Apps",
    description:
      "Cross-platform mobile apps with clean UI, smooth performance, offline sync, push notifications, and real-world business features.",
    deliverables: [
      "iOS & Android apps",
      "React Native development",
      "Offline sync",
      "Push notifications & deep linking",
    ],
  },
];

export const serviceTypes = ["Web", "Mobile", "Workflow Automation", "AI Agent"] as const;
export type ServiceType = (typeof serviceTypes)[number];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  types: ServiceType[];
  platform: string;
  year: string;
  role: string;
  timeline: string;
  accentFrom: string;
  accentTo: string;
  summary: string;
  links?: { label: string; url: string; kind?: "website" | "appStore" | "playStore" }[];
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
  results: { value: string; label: string }[];
  stack: string[];
  gallery: { title: string; caption: string; image?: string }[];
};

export const projects: Project[] = [
  {
    slug: "xpera-health-recommendation",
    name: "XPera",
    tagline: "A healthcare recommendation platform helping patients find trusted treatments and therapies.",
    category: "Healthcare Technology",
    types: ["Workflow Automation", "Web"],
    platform: "Web App",
    year: "2023",
    role: "Full-Stack Developer",
    timeline: "2+ years",
    accentFrom: "#0f766e",
    accentTo: "#2563eb",
    summary:
      "XPera is a health recommendation system built for patients in Germany, helping users explore treatments, therapies, doctor reviews, successful treatment stories, disease details, and payment options in one trusted web platform.",
    links: [
      {
        label: "Visit website",
        url: "https://xpera.encodersoft.dev",
        kind: "website",
      },
    ],
    challenge:
      "Patients often struggle to compare treatment options, understand therapy paths, and choose the right provider with confidence. Health information is usually scattered across different websites, reviews, and personal stories. XPera needed to organize this complex healthcare content into a simple, trusted, and patient-friendly web experience.",
    approach:
      "I helped build full-stack web panels that made treatment discovery easier for patients. The platform organized diseases, therapies, doctor reviews, success stories, and payment details into clear user flows. I also developed backend services for content management, recommendation logic, workflow handling, and scalable deployment on AWS.",
    outcome:
      "XPera gave patients a clearer way to compare treatments and understand real healthcare experiences before choosing a therapy. The platform improved access to structured medical information, reduced manual content handling, and supported a growing healthcare marketplace through a clean web experience.",
    highlights: [
      "Treatment and therapy recommendation flows for patients",
      "Doctor reviews, disease details, and real success stories",
      "Full-stack healthcare web panels with scalable backend services",
    ],
    results: [
      { value: "10k+", label: "Monthly users supported" },
      { value: "+28%", label: "Faster user flow completion" },
      { value: "-35%", label: "Manual handling reduced" },
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
    ],
    gallery: [
      {
        title: "Treatment discovery",
        image: "/imgs/portfolios/xpera/1.png",
        caption:
          "Patients can explore therapies, diseases, and treatment options in a clear guided flow.",
      },
      {
        title: "Success stories",
        image: "/imgs/portfolios/xpera/2.png",
        caption:
          "Real patient stories help users understand treatment outcomes and build trust.",
      },
      {
        title: "Doctor reviews",
        image: "/imgs/portfolios/xpera/3.png",
        caption:
          "Review-based provider details help patients compare doctors and care options.",
      },
      {
        title: "Payment options",
        image: "/imgs/portfolios/xpera/4.png",
        caption:
          "Clear payment details help patients understand available treatment and care options.",
      },
    ],
  },
  {
    slug: "prayforme-ai-prayer",
    name: "PrayForMe",
    tagline: "An AI-powered prayer app that creates personalized prayers for every life moment.",
    category: "AI Lifestyle App",
    types: ["AI Agent", "Mobile"],
    platform: "iOS App",
    year: "2023",
    role: "React Native & AI Mobile Developer",
    timeline: "3 months",
    accentFrom: "#7c3aed",
    accentTo: "#ec4899",
    summary:
      "PrayForMe is an AI-based prayer creation app that helps users generate personalized prayers based on their needs, emotions, social patterns, and personal situations. Users can create, save, and share meaningful prayers directly from their mobile device.",
    links: [
      {
        label: "View on App Store",
        url: "https://apps.apple.com/us/app/prayforme-ai-prayer/id6466520933",
        kind: "appStore",
      },
    ],
    challenge:
      "Many users want to pray but sometimes struggle to find the right words, especially during emotional, stressful, or personal moments. The product needed to turn simple user input into thoughtful, personalized prayers while keeping the mobile experience fast, private, and easy to use.",
    approach:
      "I helped build a clean React Native mobile experience where users can select topics, enter personal context, and receive AI-generated prayers tailored to their situation. The app focused on simple input flows, clear AI output, saved prayer history, and easy sharing so users could keep or send meaningful prayers without friction.",
    outcome:
      "PrayForMe made prayer creation easier and more personal for users who needed guidance, reflection, or encouragement. The app helped users quickly generate prayers for health, relationships, career, family, gratitude, and other life situations, while keeping the experience simple enough for daily use.",
    highlights: [
      "AI-powered personalized prayer generation",
      "Save and share generated prayers",
      "Simple React Native mobile experience for iOS users",
    ],
    results: [
      { value: "4.6/5", label: "App Store rating" },
      { value: "iOS 13+", label: "Device compatibility" },
      { value: "5", label: "Public App Store ratings" },
    ],
    stack: [
      "React Native",
      "TypeScript",
      "AI Integration",
      "OpenAI API",
      "Mobile UI",
      "Async Storage",
      "App Store Deployment",
    ],
    gallery: [
      {
        title: "Prayer creation flow",
        image: "/imgs/portfolios/prayforme/1.png",
        caption:
          "Users can choose a prayer topic and add personal context before generating a custom prayer.",
      },
      {
        title: "AI-generated prayer",
        image: "/imgs/portfolios/prayforme/2.png",
        caption:
          "The AI creates a thoughtful prayer based on the user's needs, emotions, and situation.",
      },
      {
        title: "Saved prayers",
        image: "/imgs/portfolios/prayforme/3.png",
        caption:
          "Users can save meaningful prayers and return to them later for reflection or daily use.",
      },
    ],
  },
  {
    slug: "bnbyond-rental-points-platform",
    name: "BnByond",
    tagline: "A points-based property rental platform for hosts and guests.",
    category: "Real Estate Technology",
    types: ["Web"],
    platform: "Web App",
    year: "2024",
    role: "Full-Stack MERN Developer",
    timeline: "4 months",
    accentFrom: "#2563eb",
    accentTo: "#14b8a6",
    summary:
      "BnByond is a MERN-based real estate rental platform where users can list properties and guests can book stays using points instead of direct payments. The platform includes a guest booking experience and a host management panel for property listings, availability, and booking operations.",
    links: [
      {
        label: "Visit website",
        url: "https://bnbyond.com",
        kind: "website",
      },
    ],
    challenge:
      "Traditional rental platforms depend heavily on money-based transactions, which can make booking less flexible for communities using credits, memberships, or internal reward systems. BnByond needed a clean rental experience where guests could book properties with points, while hosts still had full control over listings, availability, and booking management.",
    approach:
      "I built a full-stack MERN platform with separate user flows for guests and hosts. Guests could browse properties, check details, and complete bookings using points. Hosts could create and manage listings, update property information, track bookings, and control availability through a dedicated management panel. The backend handled property data, user roles, booking logic, and points-based transaction workflows.",
    outcome:
      "BnByond created a flexible rental experience that made property booking possible without direct cash payments. The platform helped hosts manage rental operations more easily and gave guests a simple way to discover and book properties using their available points.",
    highlights: [
      "Points-based booking system instead of direct money payments",
      "Guest panel for property search, details, and booking flow",
      "Host management panel for listings, availability, and reservations",
    ],
    results: [
      { value: "2", label: "User panels built" },
      { value: "-35%", label: "Manual booking work reduced" },
      { value: "+40%", label: "Faster listing management" },
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "REST APIs",
      "JWT Authentication",
      "Cloud Deployment",
    ],
    gallery: [
      {
        title: "Property discovery",
        image: "/imgs/portfolios/bnbyond/1.png",
        caption:
          "Guests can browse available rental properties and review key details before booking.",
      },
      {
        title: "Points-based booking",
        image: "/imgs/portfolios/bnbyond/2.png",
        caption:
          "Users can book stays using points, creating a flexible alternative to direct payments.",
      },
      {
        title: "Host management panel",
        image: "/imgs/portfolios/bnbyond/3.png",
        caption:
          "Hosts can manage property listings, availability, and booking requests from one dashboard.",
      },
      {
        title: "Reservation workflow",
        image: "/imgs/portfolios/bnbyond/4.png",
        caption:
          "The platform connects guest bookings with host-side reservation management in a smooth workflow.",
      },
    ],
  },
  {
    slug: "ally-french-ai-chatbot",
    name: "Ally",
    tagline: "A French AI chatbot built for focused customer and daily-assistance queries.",
    category: "AI Chatbot",
    types: ["Mobile", "AI Agent"],
    platform: "iOS App",
    year: "2023",
    role: "React Native & AI Integration Developer",
    timeline: "3 months",
    accentFrom: "#6366f1",
    accentTo: "#06b6d4",
    summary:
      "Ally is an AI chatbot mobile app designed to answer focused queries in French. The app helps users ask questions, receive relevant AI responses, and handle everyday writing, learning, and productivity needs through a simple mobile chat experience.",
    links: [
      {
        label: "View on App Store",
        url: "https://apps.apple.com/us/app/ally/id6446767818",
        kind: "appStore",
      },
    ],
    challenge:
      "The main challenge was creating a chatbot experience that felt useful for French-speaking users without making the product too broad or confusing. The AI needed to understand user intent, respond naturally in French, and support a narrow set of practical use cases such as writing help, study support, daily questions, and productivity tasks.",
    approach:
      "I helped build a mobile-first AI chat experience with a clean conversation flow, simple input handling, and fast response rendering. The AI layer was tuned around French-language prompts and practical user needs, while the app interface focused on making chat history, answers, and daily assistance easy to access.",
    outcome:
      "Ally gave French-speaking users a simple way to interact with AI from their phone. The app made it easier to ask focused questions, generate useful answers, and receive practical support for writing, learning, and daily productivity tasks.",
    highlights: [
      "French-language AI chatbot experience",
      "Focused prompt flow for practical customer and daily queries",
      "Clean mobile chat interface with AI response handling",
    ],
    results: [
      { value: "5.0/5", label: "App Store rating" },
      { value: "6", label: "Public ratings" },
      { value: "iOS 13+", label: "Device compatibility" },
    ],
    stack: [
      "React Native",
      "TypeScript",
      "AI Integration",
      "OpenAI API",
      "Prompt Engineering",
      "Mobile UI",
      "App Store Deployment",
    ],
    gallery: [
      {
        title: "French AI chat",
        image: "/imgs/portfolios/ally/1.png",
        caption:
          "Users can ask focused questions in French and receive clear AI-generated answers.",
      },
      {
        title: "Daily assistance",
        image: "/imgs/portfolios/ally/2.png",
        caption:
          "The chatbot supports common writing, study, work, and productivity needs.",
      },
      {
        title: "Prompt handling",
        image: "/imgs/portfolios/ally/3.png",
        caption:
          "The AI flow is tuned to understand user intent and return practical responses.",
      },
    ],
  },
  {
    slug: "instadeal-b2b-ecommerce",
    name: "Instadeal",
    tagline: "A large-scale B2B commerce app for fast wholesale ordering and delivery.",
    category: "B2B E-commerce",
    types: ["Mobile"],
    platform: "Android App",
    year: "2024",
    role: "React Native Mobile Developer",
    timeline: "5 months",
    accentFrom: "#f97316",
    accentTo: "#16a34a",
    summary:
      "Instadeal is a React Native B2B e-commerce app built for businesses in India. The platform supports wholesale ordering, customer shopping flows, seller operations, payment gateways, and delivery workflows for fast business procurement.",
    links: [
      {
        label: "View on Play Store",
        url: "https://play.google.com/store/apps/details?id=com.wholesale.wholesaller&pli=1",
        kind: "playStore",
      },
    ],
    challenge:
      "B2B buyers such as kirana stores, cafés, restaurants, and small businesses often need a faster and more reliable way to order products from wholesalers and suppliers. The platform needed to support high-volume product browsing, seller-side operations, payments, delivery tracking, and a smooth mobile experience for users in India.",
    approach:
      "I helped build a React Native mobile app with clear customer flows for product discovery, ordering, payment, and delivery updates. The app connected customer, seller, and admin-side workflows through structured APIs, making it easier to manage products, orders, users, and delivery operations across the platform.",
    outcome:
      "Instadeal created a faster mobile-first B2B shopping experience for Indian businesses. The app helped buyers order wholesale products more easily, supported sellers with better operational visibility, and enabled smoother delivery coordination through a scalable e-commerce workflow.",
    highlights: [
      "React Native B2B shopping app for wholesale ordering",
      "Customer, seller, and admin workflows connected through APIs",
      "Payment gateway and delivery workflow integration",
    ],
    results: [
      { value: "5K+", label: "Play Store downloads" },
      { value: "2hr", label: "Delivery promise supported" },
      { value: "2,000+", label: "Wholesalers onboarded" },
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Payment Gateway",
      "Push Notifications",
    ],
    gallery: [
      {
        title: "B2B product browsing",
        image: "/imgs/portfolios/instadeal/1.png",
        caption:
          "Business customers can browse wholesale products across categories and place orders from mobile.",
      },
      {
        title: "Order and payment flow",
        image: "/imgs/portfolios/instadeal/2.png",
        caption:
          "The app supports smooth checkout, payment handling, and order confirmation for B2B buyers.",
      },
    ],
  },
  {
    slug: "neoestudio-online-test-app",
    name: "Neoestudio",
    tagline: "A React Native test-prep app for Guardia Civil exam students.",
    category: "Education Technology",
    types: ["Mobile"],
    platform: "iOS App",
    year: "2020",
    role: "React Native Mobile Developer",
    timeline: "4 months",
    accentFrom: "#16a34a",
    accentTo: "#0f766e",
    summary:
      "Neoestudio is an online test application built for students preparing for the Guardia Civil exam in Spain. The app provides a smooth mobile learning experience with multiple-choice tests, course materials, result access, and study support features.",
    links: [
      {
        label: "View on App Store",
        url: "https://apps.apple.com/es/app/curso-guardia-civil-neoestudio/id1531939360",
        kind: "appStore",
      },
    ],
    challenge:
      "Students preparing for competitive exams need fast access to tests, study materials, results, and progress support from their phone. The main challenge was creating a simple mobile experience that could handle exam-style questions, course content, recorded classes, and result visibility without making the app feel complex.",
    approach:
      "I helped build a React Native mobile app focused on clear test-taking flows and easy study access. The app supported multiple-choice questions, result review, course content navigation, and student-friendly screens for exam preparation. The interface was designed to keep learning simple, fast, and accessible for students with different study schedules.",
    outcome:
      "Neoestudio helped students prepare for Guardia Civil exams through a practical mobile learning platform. The app made it easier to take tests, review learning materials, check results, and continue studying from anywhere.",
    highlights: [
      "Multiple-choice test interface for exam preparation",
      "Easy access to results and study progress",
      "Mobile-first learning experience for Guardia Civil students",
    ],
    results: [
      { value: "4.9/5", label: "App Store rating" },
      { value: "69", label: "Public ratings" },
      { value: "iOS 12+", label: "Device compatibility" },
    ],
    stack: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Mobile UI",
      "Quiz System",
      "Result Tracking",
      "App Store Deployment",
    ],
    gallery: [
      {
        title: "Test-taking flow",
        image: "/imgs/portfolios/neoestudio/1.png",
        caption:
          "Students can answer multiple-choice questions through a clean and focused mobile interface.",
      },
      {
        title: "Course content access",
        image: "/imgs/portfolios/neoestudio/2.png",
        caption:
          "Learning materials, lessons, and exam resources are organized for easy mobile access.",
      },
    ],
  },
  {
    slug: "pdfgpt-ai-pdf-analyser",
    name: "PDFGPT",
    tagline: "An AI PDF analyser that turns documents into instant answers and summaries.",
    category: "AI Document Intelligence",
    types: ["Web", "AI Agent"],
    platform: "Web App",
    year: "2024",
    role: "Full-Stack & AI Integration Developer",
    timeline: "4 months",
    accentFrom: "#7c3aed",
    accentTo: "#2563eb",
    summary:
      "PDFGPT is a web-based AI PDF analyser that lets users upload documents, generate summaries, and ask questions directly from PDF content. The platform helps users understand long documents faster through AI-powered search, summarization, and document chat.",
    links: [
      {
        label: "Visit website",
        url: "https://www.pdfgpt.io",
        kind: "website",
      },
    ],
    challenge:
      "Users often spend too much time reading long PDFs, searching for key points, and manually extracting answers. The main challenge was building a simple web experience where users could upload a document, ask natural questions, and receive useful answers without needing to read the full file from start to finish.",
    approach:
      "I helped build an AI-powered document workflow with PDF upload, text extraction, chunking, semantic search, and LLM-based response generation. The interface focused on making document chat feel simple: users upload a PDF, ask questions, review summaries, and continue exploring the file through a conversational flow.",
    outcome:
      "PDFGPT helped users save time when working with long documents by turning PDFs into searchable, conversational knowledge sources. The platform made it easier to summarize content, extract insights, and find specific answers from uploaded files in a fast web-based experience.",
    highlights: [
      "AI-powered PDF upload, summary, and question-answering flow",
      "Document chat experience for faster reading and research",
      "Semantic search and LLM integration for content understanding",
    ],
    results: [
      { value: "-60%", label: "Manual reading time reduced" },
      { value: "3", label: "Core AI document workflows built" },
      { value: "+45%", label: "Faster document insight access" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "LangChain",
      "Vector Search",
      "PDF Parsing",
      "Tailwind CSS",
    ],
    gallery: [
      {
        title: "PDF upload flow",
        image: "/imgs/portfolios/pdfgpt/1.png",
        caption:
          "Users can upload PDF documents and start an AI-powered document chat session.",
      },
      {
        title: "AI document summary",
        image: "/imgs/portfolios/pdfgpt/2.png",
        caption:
          "The system generates concise summaries to help users understand long files faster.",
      },
      {
        title: "Chat with PDF",
        image: "/imgs/portfolios/pdfgpt/3.png",
        caption:
          "Users can ask natural questions and receive answers based on the uploaded document.",
      },
      {
        title: "Document insight extraction",
        image: "/imgs/portfolios/pdfgpt/4.png",
        caption:
          "AI workflows help extract key points, useful details, and specific information from PDFs.",
      },
    ],
  },
  {
    slug: "smart-lead-generation-dashboard",
    name: "Smart Lead Generation",
    tagline: "An AI-powered lead automation system that captures, qualifies, and books calls automatically.",
    category: "Sales Automation",
    types: ["Web", "Workflow Automation", "AI Agent"],
    platform: "Web App + Automation Workflow",
    year: "2025",
    role: "Full-Stack & Workflow Automation Developer",
    timeline: "3 months",
    accentFrom: "#2563eb",
    accentTo: "#9333ea",
    summary:
      "Smart Lead Generation is an AI-powered sales automation system built with a custom MERN dashboard and n8n workflows. It captures leads, parses lead data using Ollama and Gemini models, qualifies prospects, and automates call booking to reduce manual sales work.",
    challenge:
      "Sales teams often spend too much time collecting lead details, checking lead quality, replying manually, and scheduling calls. The client needed a system that could collect lead data, understand each prospect, score or organize the lead, and move qualified users toward a booked call without constant manual follow-up.",
    approach:
      "I built a full-stack MERN dashboard to manage leads, statuses, activity, and booking progress. I connected n8n automation workflows with Ollama and Gemini models to parse lead information, extract useful details, identify qualified prospects, and trigger follow-up actions. The system also handled booking logic, notifications, and lead routing so the sales team could focus on high-value conversations.",
    outcome:
      "The platform reduced manual lead handling and created a smoother sales workflow from lead capture to booked call. The team could view all leads in one dashboard, understand lead quality faster, and automate repetitive follow-up and scheduling steps.",
    highlights: [
      "n8n automation workflows for lead capture and routing",
      "Ollama and Gemini model integration for AI lead parsing",
      "Custom MERN dashboard for lead tracking and booking status",
    ],
    results: [
      { value: "-67.2%", label: "Manual lead handling reduced" },
      { value: "+52.1%", label: "Faster lead qualification" },
      { value: "24/7", label: "Automated booking workflow" },
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "n8n",
      "Ollama",
      "Gemini API",
      "REST APIs",
      "Webhook Automation",
      "Calendar Booking",
    ],
    gallery: [
      {
        title: "Lead dashboard",
        image: "/imgs/portfolios/smart-lead-generation/1.png",
        caption:
          "A custom dashboard helps the team view leads, qualification status, and booking progress in one place.",
      },
      {
        title: "AI lead parsing",
        image: "/imgs/portfolios/smart-lead-generation/2.png",
        caption:
          "Ollama and Gemini models parse lead details and extract useful information for qualification.",
      },
      {
        title: "n8n automation flow",
        image: "/imgs/portfolios/smart-lead-generation/3.png",
        caption:
          "n8n workflows connect lead sources, AI parsing, follow-up actions, and booking triggers.",
      },
      {
        title: "Real workflow in n8n",
        image: "/imgs/portfolios/smart-lead-generation/4.png",
        caption:
          "n8n workflows connect lead sources, AI parsing, follow-up actions, and booking triggers.",
      }
    ],
  },
  {
    slug: "ouiimi-b2b-ecommerce-platform",
    name: "Ouiimi",
    tagline: "A B2B service-commerce platform for sellers, customers, bookings, and rewards.",
    category: "B2B E-commerce",
    types: ["Web"],
    platform: "Web App",
    year: "2026",
    role: "Full-Stack MERN Developer",
    timeline: "5 months",
    accentFrom: "#2563eb",
    accentTo: "#14b8a6",
    summary:
      "Ouiimi is a full-stack B2B e-commerce and service-booking platform where sellers can create accounts, manage services or products, handle transactions, and serve customers through online ordering, booking, loyalty points, rewards, and order tracking.",
    links: [
      {
        label: "Visit website",
        url: "https://ouiimi.com.au",
        kind: "website",
      },
    ],
    challenge:
      "The platform needed to support multiple user roles while keeping the buying and booking experience simple. Sellers required tools to manage products, services, availability, orders, and customer activity, while customers needed an easy way to browse, book, pay, track orders, and use loyalty rewards.",
    approach:
      "I helped build a MERN-based web platform with separate admin, seller, and customer panels. The system handled account creation, product and service management, online ordering, transaction flows, payment gateway integration, loyalty points, rewards, and order tracking. The backend was structured around secure role-based access, scalable APIs, and clear data flows between sellers, customers, and admins.",
    outcome:
      "Ouiimi created a smoother digital commerce experience for both sellers and customers. Sellers could manage their business operations from one place, while customers could discover services, place orders, complete payments, and track their activity through a clean web experience.",
    highlights: [
      "Admin, seller, and customer panels with role-based access",
      "Online ordering, booking, payment, and order tracking workflows",
      "Loyalty points and rewards system for customer retention",
    ],
    results: [
      { value: "3", label: "User panels built" },
      { value: "24/7", label: "Online ordering enabled" },
      { value: "+40%", label: "Faster seller management" },
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "REST APIs",
      "JWT Authentication",
      "Payment Gateway",
      "Role-Based Access",
      "Cloud Deployment",
    ],
    gallery: [
      {
        title: "Customer booking experience",
        image: "/imgs/portfolios/ouiimi/1.png",
        caption:
          "Customers can browse services or products, view details, and complete bookings or orders through a clean web flow.",
      },
      {
        title: "Seller management panel",
        image: "/imgs/portfolios/ouiimi/2.png",
        caption:
          "Sellers can manage listings, availability, orders, customer activity, and business operations from one dashboard.",
      },
      {
        title: "Admin control panel",
        image: "/imgs/portfolios/ouiimi/3.png",
        caption:
          "Admins can monitor sellers, customers, transactions, platform activity, and overall marketplace performance.",
      },
      {
        title: "Rewards and order tracking",
        image: "/imgs/portfolios/ouiimi/4.png",
        caption:
          "Loyalty points, rewards, payments, and order tracking help create a stronger commerce experience.",
      },
    ],
  }
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "ACTIMI",
    period: "Nov 2025 — Apr 2026",
    description:
      "Built healthcare platforms using React, React Native, TypeScript, and NestJS. Integrated FHIR and MedPlum APIs, improved health data consistency, and supported AI triage workflows for abnormal medical results.",
    tags: ["Healthcare", "React Native", "FHIR", "AI Triage"],
  },
  {
    role: "Full Stack Engineer",
    company: "Warptec Software GmbH",
    period: "Apr 2024 — Oct 2025",
    description:
      "Developed inventory, reporting, authentication, and automation features using TypeScript, Node.js, and PostgreSQL. Built a LangChain-based agent for auto-inventory alerts and improved backend data flows.",
    tags: ["LangChain", "Node.js", "PostgreSQL", "Automation"],
  },
  {
    role: "Full-stack Developer",
    company: "Livello Technologies",
    period: "Nov 2023 — Apr 2024",
    description:
      "Built a MERN operations panel for 500+ IoT smart fridges across Europe. Added GraphQL APIs, telemetry aggregation, and an LLM-assisted maintenance scheduling workflow.",
    tags: ["MERN", "IoT", "GraphQL", "LLM Automation"],
  },
  {
    role: "Full-stack Developer",
    company: "XPera - Das half mir",
    period: "Jun 2021 — Oct 2023",
    description:
      "Built web panels and a React Native mobile app for a marketplace platform. Automated order handling, inventory sync, AWS deployments, and customer support workflows.",
    tags: ["React Native", "AWS", "Marketplace", "Support Agent"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Upwork and Fiverr",
    period: "Sep 2017 — Sep 2023",
    description:
      "Delivered 100+ freelance projects across AI automation, full-stack web apps, mobile apps, and document Q&A systems using LangChain, FAISS, Pinecone, React, Next.js, and Node.js.",
    tags: ["AI Agents", "RAG", "Next.js", "Full Stack"],
  },
];

