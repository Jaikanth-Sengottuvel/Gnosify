export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  iconName: string;
  accentColor: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Scalable, high-performance websites engineered for growth.',
    description:
      'Gnosify builds modern, fast, and fully scalable websites that serve as the foundation of your digital presence. From landing pages to complex enterprise portals, we architect every solution to perform under pressure and grow with your business without ever needing a full rewrite.',
    features: [
      { title: 'Custom Architecture', desc: 'Every website is built from scratch to your exact requirements — no templates, no bloat.' },
      { title: 'Performance-First', desc: 'Optimised for Core Web Vitals with consistently high Lighthouse scores out of the box.' },
      { title: 'Security by Design', desc: 'SSL, OWASP best practices, and secure coding standards built in from day one.' },
      { title: 'Fully Responsive', desc: 'Pixel-perfect experiences across desktop, tablet, and mobile on every browser.' },
      { title: 'Built to Scale', desc: 'Architecture designed to handle 10x or 100x your current traffic without a rewrite.' },
      { title: 'SEO Ready', desc: 'Semantic HTML, structured data, fast load times, and proper meta tags from the start.' },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and technical requirements in depth.' },
      { step: '02', title: 'Architecture & Design', desc: 'We plan the tech stack, wireframe, and design mockups before writing code.' },
      { step: '03', title: 'Development', desc: 'Clean, maintainable code built with modern frameworks and best practices.' },
      { step: '04', title: 'Testing & QA', desc: 'Comprehensive testing across browsers, devices, and user scenarios.' },
      { step: '05', title: 'Launch & Support', desc: 'Smooth deployment followed by ongoing maintenance and monitoring.' },
    ],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'A typical business website takes 3–6 weeks. Complex enterprise platforms can take 2–4 months. We give you a precise timeline after discovery.' },
      { q: 'What technologies do you use?', a: 'We primarily use Next.js, React, TypeScript, and Node.js. We always recommend the right tool for the specific job.' },
      { q: 'Will I own the website after it is built?', a: 'Yes, absolutely. You get full ownership of the code, design, and all assets. No vendor lock-in whatsoever.' },
      { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer monthly maintenance plans covering security updates, performance monitoring, content changes, and technical support.' },
    ],
    iconName: 'Globe',
    accentColor: '#1B5780',
  },
  {
    slug: 'website-design',
    title: 'Website Design',
    tagline: 'Stunning, conversion-focused designs that reflect your brand.',
    description:
      'Great design is not just about aesthetics — it is about guiding users to take action. Our designers create visually compelling, brand-aligned experiences that are easy to navigate, optimised for conversion, and built to leave a lasting impression on every visitor.',
    features: [
      { title: 'Brand-Aligned', desc: 'Every design element reflects your brand identity — colours, typography, voice, and personality.' },
      { title: 'Conversion-Focused', desc: 'Strategic CTA placement, visual hierarchy, and user flows designed to turn visitors into customers.' },
      { title: 'Responsive Design', desc: 'Flawless layouts that adapt beautifully to any screen size or device orientation.' },
      { title: 'UI/UX Research', desc: 'User personas, journey mapping, and competitive research inform every design decision.' },
      { title: 'Interactive Prototypes', desc: 'Full Figma prototypes for your review and approval before a single line of code is written.' },
      { title: 'Design Systems', desc: 'Reusable component libraries that keep your brand consistent at any scale.' },
    ],
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'We study your brand, competitors, and target audience to define the design direction.' },
      { step: '02', title: 'Wireframing', desc: 'Low-fidelity wireframes map out structure, layout, and user flow without visual distraction.' },
      { step: '03', title: 'Visual Design', desc: 'High-fidelity mockups bring the brand to life with colour, typography, and imagery.' },
      { step: '04', title: 'Prototype & Review', desc: 'Interactive prototypes let you experience the design before development begins.' },
      { step: '05', title: 'Handoff & Build', desc: 'Developer-ready design files and a component library hand off to engineering.' },
    ],
    faqs: [
      { q: 'Do I need a new design or can you redesign my existing site?', a: 'Both. We handle fresh designs from scratch and full redesigns of existing websites.' },
      { q: 'What tools do you design in?', a: 'We primarily use Figma for all UI/UX work, delivering fully organised component files.' },
      { q: 'How many design revisions are included?', a: 'We include two full revision rounds in every project scope, with additional rounds available.' },
      { q: 'Can you create a design system for my team?', a: 'Yes. We build comprehensive design systems including colour tokens, typography scales, and component libraries.' },
    ],
    iconName: 'Palette',
    accentColor: '#7c3aed',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-driven strategies that grow your visibility and revenue.',
    description:
      'Gnosify helps businesses grow their online presence through targeted, data-driven marketing strategies. We combine paid advertising, organic growth, content strategy, and analytics to drive measurable results that directly impact your bottom line.',
    features: [
      { title: 'Multi-Channel Strategy', desc: 'Integrated campaigns across Google, Meta, LinkedIn, and email for maximum reach.' },
      { title: 'Performance Tracking', desc: 'Real-time dashboards and monthly reports with clear ROI metrics for every campaign.' },
      { title: 'Audience Targeting', desc: 'Precise targeting by demographics, interests, behaviour, and custom audience segments.' },
      { title: 'Content Marketing', desc: 'Blog posts, ad copy, landing pages, and social content that converts.' },
      { title: 'Paid Advertising', desc: 'Google Ads, Meta Ads, and LinkedIn campaigns optimised for cost-per-lead.' },
      { title: 'Retargeting', desc: 'Re-engage warm audiences with smart retargeting campaigns that close the loop.' },
    ],
    process: [
      { step: '01', title: 'Audit & Research', desc: 'We audit your current digital presence and research competitors and audience behaviour.' },
      { step: '02', title: 'Strategy', desc: 'A custom multi-channel marketing plan with clear KPIs and budget allocation.' },
      { step: '03', title: 'Campaign Setup', desc: 'We build, configure, and launch campaigns across all agreed channels.' },
      { step: '04', title: 'Optimisation', desc: 'Continuous A/B testing and bid optimisation to improve performance week over week.' },
      { step: '05', title: 'Reporting', desc: 'Monthly reports with insights, performance data, and next-month recommendations.' },
    ],
    faqs: [
      { q: 'How soon will I see results?', a: 'Paid campaigns often show results within 1–2 weeks. SEO and organic strategies typically take 60–90 days to gain momentum.' },
      { q: 'What budget do I need for paid ads?', a: 'We recommend a minimum of ₹15,000–₹25,000/month ad spend for meaningful data. We help you allocate it wisely.' },
      { q: 'Do you handle ad creatives?', a: 'Yes. Our team handles copywriting, creative design, and A/B testing for all ad formats.' },
      { q: 'Can you manage multiple platforms simultaneously?', a: 'Yes. We manage integrated campaigns across Google, Meta, LinkedIn, and more under a unified strategy.' },
    ],
    iconName: 'TrendingUp',
    accentColor: '#0c8a6e',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    tagline: 'Conversion-optimised online stores built to sell at scale.',
    description:
      'We build secure, fast, and feature-rich e-commerce platforms that turn browsers into buyers. From product catalogue management to multi-payment gateway integration, inventory automation, and post-purchase flows — we engineer stores designed to grow revenue.',
    features: [
      { title: 'Custom Storefront', desc: 'Unique, branded shopping experiences tailored to your product and audience.' },
      { title: 'Payment Integration', desc: 'Razorpay, Stripe, PayPal, and 20+ payment gateways with secure checkout flows.' },
      { title: 'Inventory Automation', desc: 'Real-time inventory tracking, low-stock alerts, and automated restocking workflows.' },
      { title: 'Mobile Commerce', desc: 'Touch-optimised mobile experiences with one-tap checkout and app-like performance.' },
      { title: 'Analytics & Reporting', desc: 'Revenue dashboards, conversion funnels, and customer LTV tracking built in.' },
      { title: 'SEO Optimised', desc: 'Product pages, category pages, and sitemaps structured for maximum search visibility.' },
    ],
    process: [
      { step: '01', title: 'Scope & Platform', desc: 'We evaluate your products, scale, and budget to choose the right platform or custom build.' },
      { step: '02', title: 'UX & Design', desc: 'Conversion-focused storefront design with smooth product discovery and checkout flows.' },
      { step: '03', title: 'Development', desc: 'Build, configure, and integrate all features including payments, logistics, and CMS.' },
      { step: '04', title: 'QA & Testing', desc: 'Full order flow testing, payment testing, and load testing before go-live.' },
      { step: '05', title: 'Launch & Scale', desc: 'Go-live support plus ongoing optimisation for conversion rate and performance.' },
    ],
    faqs: [
      { q: 'Do you build on Shopify or custom platforms?', a: 'Both. We build on Shopify, WooCommerce, and fully custom React/Next.js storefronts depending on your scale and needs.' },
      { q: 'Can you migrate my existing store?', a: 'Yes. We handle full product, customer, and order data migrations with zero data loss.' },
      { q: 'Do you integrate with logistics providers?', a: 'Yes. We integrate with Shiprocket, Delhivery, Easyship, and other major logistics platforms.' },
      { q: 'Is the checkout PCI-DSS compliant?', a: 'Yes. All payment integrations we implement are PCI-DSS compliant using tokenised payment methods.' },
    ],
    iconName: 'ShoppingCart',
    accentColor: '#b45309',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Custom software that solves your real business problems.',
    description:
      'Off-the-shelf software rarely fits perfectly. Gnosify builds custom software solutions — from internal tools and workflow automation to full enterprise platforms — designed around your exact business logic, integrations, and scale requirements.',
    features: [
      { title: 'Requirements Engineering', desc: 'We translate your business needs into precise technical specifications before writing code.' },
      { title: 'Clean Architecture', desc: 'Modular, well-documented codebases that are maintainable, testable, and scalable.' },
      { title: 'API Development', desc: 'RESTful and GraphQL APIs built for reliability, documentation, and third-party integration.' },
      { title: 'System Integrations', desc: 'Seamless integration with your existing CRM, ERP, payment, and data systems.' },
      { title: 'Automated Testing', desc: 'Unit, integration, and end-to-end tests built into the development process.' },
      { title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines, containerisation, and infrastructure as code.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Scoping', desc: 'Deep-dive into your requirements, constraints, and existing systems.' },
      { step: '02', title: 'Technical Design', desc: 'Architecture design, database schema, API contracts, and technology selection.' },
      { step: '03', title: 'Agile Development', desc: 'Iterative sprints with regular demos so you see progress at every stage.' },
      { step: '04', title: 'QA & Security Audit', desc: 'Thorough testing, security review, and performance profiling before release.' },
      { step: '05', title: 'Deployment & Handoff', desc: 'Production deployment, documentation, and knowledge transfer to your team.' },
    ],
    faqs: [
      { q: 'Can you work with our existing tech stack?', a: 'Yes. We adapt to your existing infrastructure and technology choices, or recommend improvements where appropriate.' },
      { q: 'Do you provide source code?', a: 'Yes. Full source code, documentation, and all intellectual property is yours at project completion.' },
      { q: 'Can you build internal tools?', a: 'Absolutely. Internal tools, admin panels, CRMs, and workflow automation are a core strength.' },
      { q: 'How do you handle changing requirements?', a: 'Our agile process accommodates changes through sprint reviews. We discuss scope impact transparently before adjusting.' },
    ],
    iconName: 'Code2',
    accentColor: '#1B5780',
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    tagline: 'Rank higher, get found, and grow organic traffic that converts.',
    description:
      'Our SEO strategies go beyond keyword stuffing. We combine technical audits, on-page optimisation, high-quality link building, and content strategy to systematically improve your search rankings and attract qualified organic traffic that converts into real business.',
    features: [
      { title: 'Technical SEO Audit', desc: 'Comprehensive audit of site structure, crawlability, Core Web Vitals, and indexation issues.' },
      { title: 'Keyword Research', desc: 'Data-driven keyword strategy targeting high-intent, high-volume search terms in your niche.' },
      { title: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, headings, internal linking, and structured data.' },
      { title: 'Link Building', desc: 'High-DA backlinks through ethical outreach, guest posts, and digital PR.' },
      { title: 'Local SEO', desc: 'Google Business Profile optimisation, local citations, and location-specific landing pages.' },
      { title: 'Content Strategy', desc: 'SEO-driven content calendar with blog posts, pillar pages, and topic clusters.' },
    ],
    process: [
      { step: '01', title: 'SEO Audit', desc: 'Full technical audit of your site to identify every ranking blocker and quick win.' },
      { step: '02', title: 'Keyword & Competitor Research', desc: 'Map high-value keyword opportunities relative to competitor gaps.' },
      { step: '03', title: 'On-Page Fixes', desc: 'Implement all technical and on-page optimisations across your site.' },
      { step: '04', title: 'Content & Link Building', desc: 'Create content and build authority through targeted outreach and digital PR.' },
      { step: '05', title: 'Track & Iterate', desc: 'Monthly ranking reports, traffic analysis, and strategy adjustments.' },
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful ranking improvements in 60–90 days. Significant organic traffic growth typically takes 4–6 months.' },
      { q: 'Do you guarantee page 1 rankings?', a: 'No one can guarantee specific rankings — Google\'s algorithm is proprietary. We guarantee consistent, ethical, data-driven work that moves rankings upward.' },
      { q: 'Do you do local SEO?', a: 'Yes. We optimise your Google Business Profile, local citations, and create city/region-specific landing pages.' },
      { q: 'Is SEO a one-time project or ongoing?', a: 'SEO is a long-term strategy. Initial fixes are one-time, but maintaining and growing rankings requires ongoing work each month.' },
    ],
    iconName: 'Search',
    accentColor: '#0c8a6e',
  },
  {
    slug: 'smo-services',
    title: 'SMO Services',
    tagline: 'Build a brand people follow, engage with, and trust.',
    description:
      'Social Media Optimisation is about more than posting — it is about building a brand community. Gnosify creates compelling content strategies, manages your social presence, and grows engaged audiences across all major platforms that drive real business outcomes.',
    features: [
      { title: 'Profile Optimisation', desc: 'Fully optimised profiles across Instagram, LinkedIn, Facebook, and X/Twitter.' },
      { title: 'Content Calendar', desc: 'Monthly content strategy and calendar aligned to your brand voice and business goals.' },
      { title: 'Original Content Creation', desc: 'Graphics, reels, carousels, and copy created in-house by our content team.' },
      { title: 'Community Management', desc: 'Timely responses to comments, DMs, and mentions to build audience relationships.' },
      { title: 'Influencer Partnerships', desc: 'Strategic micro and macro influencer collaborations to expand reach authentically.' },
      { title: 'Performance Analytics', desc: 'Weekly engagement reports and monthly strategy reviews with actionable insights.' },
    ],
    process: [
      { step: '01', title: 'Audit & Strategy', desc: 'Review current social presence and build a platform-specific growth strategy.' },
      { step: '02', title: 'Brand & Tone Guide', desc: 'Define your social voice, visual identity, and content pillars.' },
      { step: '03', title: 'Content Creation', desc: 'Produce a month of content in advance for your review and approval.' },
      { step: '04', title: 'Scheduling & Publishing', desc: 'Optimally timed posting across all platforms using analytics-backed scheduling.' },
      { step: '05', title: 'Engage & Grow', desc: 'Community management, hashtag strategy, and monthly growth reporting.' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, LinkedIn, Facebook, X (Twitter), YouTube, and Pinterest depending on your audience.' },
      { q: 'Do you create the actual content?', a: 'Yes. Our in-house team handles all copywriting, graphic design, and short-form video creation.' },
      { q: 'How many posts per week are included?', a: 'Our standard plan covers 5 posts per week across two platforms. Custom plans are available for more frequency or platforms.' },
      { q: 'Can SMO help with B2B lead generation?', a: 'Absolutely. LinkedIn SMO is particularly powerful for B2B lead generation and thought leadership building.' },
    ],
    iconName: 'Share2',
    accentColor: '#db2777',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Intuitive iOS and Android apps users love to use.',
    description:
      'Gnosify designs and develops high-performance mobile applications for iOS and Android that deliver seamless, intuitive experiences. Whether you need a consumer app, an enterprise mobile tool, or a cross-platform solution, we engineer apps that users come back to.',
    features: [
      { title: 'iOS & Android Native', desc: 'Purpose-built native apps for maximum performance and platform-specific UX.' },
      { title: 'Cross-Platform (React Native)', desc: 'Single codebase for both platforms when speed-to-market and budget are the priority.' },
      { title: 'Offline-First', desc: 'Apps that work reliably with or without internet, syncing seamlessly when reconnected.' },
      { title: 'Push Notifications', desc: 'Smart, personalised push notification systems that re-engage users without annoying them.' },
      { title: 'App Store Optimisation', desc: 'Keyword research, screenshots, and descriptions optimised for App Store and Play Store.' },
      { title: 'Analytics Integration', desc: 'Firebase, Mixpanel, or custom analytics to track user behaviour and improve retention.' },
    ],
    process: [
      { step: '01', title: 'Product Definition', desc: 'Define user stories, feature scope, and platform strategy.' },
      { step: '02', title: 'UX Design', desc: 'Wireframes and interactive prototypes validated with real user feedback.' },
      { step: '03', title: 'Development', desc: 'Iterative sprints with TestFlight / beta builds for your continuous review.' },
      { step: '04', title: 'QA & Device Testing', desc: 'Tested on 15+ real devices across iOS and Android versions.' },
      { step: '05', title: 'Launch & Iterate', desc: 'App Store / Play Store submission and post-launch iteration based on user data.' },
    ],
    faqs: [
      { q: 'Should I build native or cross-platform?', a: 'If budget allows, native provides the best UX. React Native is excellent for most use cases at a lower cost and faster timeline.' },
      { q: 'How long does app development take?', a: 'An MVP typically takes 8–14 weeks. More complex apps with custom backends take 4–6 months.' },
      { q: 'Do you handle App Store submission?', a: 'Yes. We manage the entire submission process for both Apple App Store and Google Play Store.' },
      { q: 'Can you integrate my app with my existing backend?', a: 'Yes. We connect to any REST API, GraphQL endpoint, or existing backend system.' },
    ],
    iconName: 'Smartphone',
    accentColor: '#4EB5D0',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Intelligent systems that work harder so your team doesn\'t have to.',
    description:
      'We build AI-powered solutions and automation systems that eliminate repetitive tasks, surface insights from your data, and enable smarter decision-making at scale. From LLM integrations to workflow automation pipelines, we help businesses operate at a fundamentally higher level of efficiency.',
    features: [
      { title: 'LLM Integration', desc: 'GPT, Claude, and Gemini integrations for document processing, customer support, and knowledge management.' },
      { title: 'Workflow Automation', desc: 'End-to-end automation of repetitive business processes using intelligent pipelines.' },
      { title: 'Predictive Analytics', desc: 'ML models that forecast demand, churn, and performance so you act before problems occur.' },
      { title: 'Computer Vision', desc: 'Image and video recognition solutions for quality control, security, and document processing.' },
      { title: 'Chatbot & AI Assistants', desc: 'Conversational AI trained on your knowledge base for customer support and internal helpdesk.' },
      { title: 'Data Pipelines', desc: 'Reliable ETL pipelines that clean, transform, and surface your data where it is needed.' },
    ],
    process: [
      { step: '01', title: 'Process Audit', desc: 'Identify automation opportunities and quantify the ROI of each use case.' },
      { step: '02', title: 'Solution Design', desc: 'Choose the right AI approach — rules-based, ML, or LLM — for each problem.' },
      { step: '03', title: 'Proof of Concept', desc: 'Build a small PoC to validate the approach before full-scale development.' },
      { step: '04', title: 'Build & Integrate', desc: 'Full development with seamless integration into your existing tools and workflows.' },
      { step: '05', title: 'Monitor & Improve', desc: 'Ongoing monitoring, retraining, and optimisation as your data and needs evolve.' },
    ],
    faqs: [
      { q: 'Do I need a lot of data for AI to work?', a: 'Not always. Many automation solutions work with minimal data, and we can advise on when AI genuinely adds value vs. simpler alternatives.' },
      { q: 'Can you automate our specific workflow?', a: 'Yes. We audit your processes first, then design automation tailored to your exact tools and steps.' },
      { q: 'How do you ensure AI accuracy?', a: 'Through rigorous testing, human-in-the-loop reviews during deployment, and ongoing monitoring with accuracy thresholds.' },
      { q: 'What is the ROI of AI automation?', a: 'Our clients typically see 50–80% reduction in manual processing time within 3 months. We quantify the expected ROI before starting any project.' },
    ],
    iconName: 'Cpu',
    accentColor: '#1B5780',
  },
  {
    slug: 'speed-optimization',
    title: 'Website Speed Optimisation',
    tagline: 'Faster websites rank higher, convert better, and retain more users.',
    description:
      'A 1-second delay in page load time can reduce conversions by 7%. Gnosify conducts deep performance audits and implements targeted optimisations across your entire stack — from frontend rendering to server infrastructure — to make your site blazing fast.',
    features: [
      { title: 'Core Web Vitals', desc: 'LCP, FID, CLS improvements to hit Google\'s "Good" thresholds and boost rankings.' },
      { title: 'Image Optimisation', desc: 'Next-gen formats (WebP/AVIF), lazy loading, and responsive image sizing.' },
      { title: 'CDN Setup', desc: 'Global content delivery network configuration for fast load times worldwide.' },
      { title: 'Code Splitting', desc: 'Eliminate render-blocking resources and reduce JavaScript bundle sizes significantly.' },
      { title: 'Caching Strategy', desc: 'Browser caching, server-side caching, and database query optimisation.' },
      { title: 'Hosting Upgrade', desc: 'Infrastructure review and migration to higher-performance hosting where appropriate.' },
    ],
    process: [
      { step: '01', title: 'Performance Audit', desc: 'Full Lighthouse, GTmetrix, and WebPageTest analysis to identify every performance issue.' },
      { step: '02', title: 'Priority Fixes', desc: 'Implement the highest-impact changes first for immediate score improvements.' },
      { step: '03', title: 'Deep Optimisation', desc: 'Address infrastructure, database, and code-level bottlenecks systematically.' },
      { step: '04', title: 'Verify & Measure', desc: 'Before/after performance benchmarks with documented improvements.' },
      { step: '05', title: 'Ongoing Monitoring', desc: 'Monthly performance checks to catch and fix regressions before they impact users.' },
    ],
    faqs: [
      { q: 'What score should my website have?', a: 'A Lighthouse performance score above 90 is the target. Most clients come to us with scores between 40–65.' },
      { q: 'Will speed optimisation affect my design?', a: 'No. All optimisations are done under the hood. Your design remains exactly as intended.' },
      { q: 'How much can you improve my site speed?', a: 'Most sites see 40–70% load time reduction. The exact improvement depends on the starting point and stack.' },
      { q: 'Does site speed really affect SEO?', a: 'Yes. Core Web Vitals are a confirmed Google ranking factor. Faster sites rank higher and get more click-throughs.' },
    ],
    iconName: 'Zap',
    accentColor: '#f59e0b',
  },
  {
    slug: 'hosting-services',
    title: 'Website Hosting Services',
    tagline: 'Reliable, secure, and blazing-fast hosting for your business.',
    description:
      'Your hosting is the foundation of your website\'s reliability and speed. Gnosify provides managed hosting solutions on enterprise-grade infrastructure — with 99.9% uptime SLA, automated backups, SSL management, DDoS protection, and 24/7 monitoring included.',
    features: [
      { title: '99.9% Uptime SLA', desc: 'Enterprise infrastructure with redundant failover to keep your site always available.' },
      { title: 'Automated Backups', desc: 'Daily automated backups with one-click restore so your data is always protected.' },
      { title: 'SSL Management', desc: 'Free SSL certificates, automated renewal, and HTTPS enforcement across all domains.' },
      { title: 'DDoS Protection', desc: 'Advanced DDoS mitigation and Web Application Firewall (WAF) as standard.' },
      { title: 'Scalable Resources', desc: 'Instantly scale CPU, RAM, and storage as your traffic grows without downtime.' },
      { title: '24/7 Monitoring', desc: 'Round-the-clock uptime monitoring with immediate alerts and rapid incident response.' },
    ],
    process: [
      { step: '01', title: 'Requirements Assessment', desc: 'Evaluate your traffic, storage, and performance needs to size the right plan.' },
      { step: '02', title: 'Setup & Configuration', desc: 'Server provisioning, domain setup, SSL installation, and security hardening.' },
      { step: '03', title: 'Migration', desc: 'Zero-downtime migration from your existing host with full data integrity verification.' },
      { step: '04', title: 'Performance Tuning', desc: 'Configure caching, CDN, and server settings for optimal speed.' },
      { step: '05', title: 'Ongoing Management', desc: 'Continuous monitoring, security patching, and proactive performance optimisation.' },
    ],
    faqs: [
      { q: 'What hosting platform do you use?', a: 'We host on AWS, Vercel, and dedicated VPS depending on your requirements and budget.' },
      { q: 'Can you migrate my current site to your hosting?', a: 'Yes. We handle the full migration with zero downtime and no data loss.' },
      { q: 'What happens if my site goes down?', a: 'Our monitoring detects downtime instantly and our team responds within 15 minutes, 24/7.' },
      { q: 'Do you offer shared or dedicated hosting?', a: 'We recommend managed VPS or cloud hosting for all business sites. Shared hosting is too unreliable for professional use.' },
    ],
    iconName: 'Server',
    accentColor: '#0c8a6e',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
