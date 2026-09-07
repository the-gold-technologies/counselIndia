export interface JobOpening {
  id: string;
  title: string;
  summary: string;
  description: string;
  applyUrl: string;
}

export const PARTNER_LOGOS = [
  {
    name: "Manav Rachna",
    src: "https://prod-s3.counselindia.com/masterfetured/image_b9b60aa8-c83b-488d-b4e1-6c74805804bd_1677488024.jfif",
    height: 70,
  },
  {
    name: "University of Delhi",
    src: "https://prod-s3.counselindia.com/masterfetured/image_ebf9fdec-cd1a-4f13-b5ae-cf6f432a13ce_1677488042.jfif",
    height: 110,
  },
  {
    name: "Teerthanker Mahaveer University",
    src: "https://prod-s3.counselindia.com/masterfetured/image_7ed3b8cc-c108-470b-a988-02661546055e_1677488061.jfif",
    height: 110,
  },
  {
    name: "IGNOU - The People's University",
    src: "https://prod-s3.counselindia.com/masterfetured/image_a06db268-2b47-4f20-b2e5-873eb6c207c8_1677488094.jfif",
    height: 80,
  },
];

const DEFAULT_APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-5G3Fk7yl3sKIRW0wKxO00Dbkd1uG_Bnm2ChPwx1VPAbOjg/viewform";

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "bde",
    title: "Business Development Executive",
    summary:
      "Summary Counsel India - India's leading Psychology Learning EdTech Platform is looking for committed and passionate Business Development Executives who have exceptional customer relationship and communication skills",
    description: `Summary Counsel India - India's leading Psychology Learning EdTech Platform is looking for committed and passionate Business Development Executives who have exceptional customer relationship and communication skills. The ideal candidates should be focused on boosting the company's business by finding new clients and opportunities. They should be keen to undertake market research, analyze consumer trends, actively seek out new sales opportunities and coordinate with team members to execute the company’s business development and sales strategy for its products and services. Job Description Contacting potential customers and informing them about our products and services with excellent profiling and pitching skills. Answer all queries and doubts about products and services. Meet daily, weekly and monthly sales quotas. Collating and maintaining client information in the CRM database. Prepare, submit daily and weekly reports to the management. Achieve weekly and monthly targets in a high performance-driven competitive environment. Initiating telephonic conversations with clients or connecting with them on Zoom, Google meet etc. Generate and maintain the sales pipeline. Ability to network and build lasting relationships. Go the "extra mile"; to meet sales targets and facilitate future sales. Analyze the customer and well versed in objection handling and managing different situations during the call. Analysing and sharing active feedback about customer behavior, market demands and competition to the marketing team. Requirement and Qualifications Bachelor's degree in Business/Psychology/Management or related field with an experience of 1-2 years Ability to analyse market trends Strong communication and interpersonal skills Problem-solving skills Preference to candidates having prior EdTech experience. Comfortable working from the office with a little flexibility of working from home. Familiarity with sales, CRM, LeadSquared, key computer software like MS Office, Google Sheets, etc. Active listening with good grasping power Must be target oriented and love to interact with different people everyday What you’ll get out of this experience Being a key player in something potentially massive and world changing. Being part of our in-house business development team and connecting with a varied audience from different age groups and geographies. Being part of a successfully growing startup and thriving work culture. Who We Are? Counsel India is India's first Practical Psychology Learning Platform for counsellors and psychologists to connect, learn, grow, and discover opportunities of a lifetime. We have a thriving community of counsellors and psychologists who are passionate about their career and are working towards simplifying mental health in India.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "bdm",
    title: "Business Development Manager",
    summary:
      "We are looking for a passionate Business Development Manager who can make our products stand out from the crowd. The ideal candidate should have excellent skills and experience driving B2C sales and orders.",
    description: `### Summary
We are looking for a passionate Business Development Manager who can make our products stand out from the crowd. The ideal candidate should have excellent skills and experience driving B2C sales, fulfilment of orders and support the senior management of company.

### Key Responsibilities
- Establishing B2C sales objectives by forecasting and developing annual sales projections and projecting expected sales volume and profit for existing and new products.
- Collaborate with key leadership to understand growth plans for the business.
- Lead generation and communicating with prospective clients through emails, phone calls, virtual meetings, meeting in person, etc.
- Preparing proposals, drafts, quotations and closure of the business followed by its fulfilment through the prescribed process and operations.
- Achieve growth and hit sales targets by successfully managing the business development team.
- Achieve weekly and monthly targets in a high-pressure performance-driven competitive environment.
- Translate community feedback into business requirements.
- Able to efficiently multitask between multiple business critical projects.
- Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.

### Required Skills
- BS/MS degree in business administration or a related field.
- Familiarity with sales, CRM, online platforms, MS Excel, Word, PowerPoint, Google Drive.
- Successful previous experience as a sales manager, consistently meeting or exceeding targets.
- Proven ability to drive the sales process from plan to close.
- Strong business sense and industry expertise.
- Excellent mentoring, coaching and people management skills.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "full-stack",
    title: "Software Engineer - Full Stack Developer",
    summary:
      "Counsel India is looking for a passionate full-stack developer to help develop and maintain our Web Platform and Mobile Apps using React, React Native, Node.js, Next.js, and AWS Cloud ecosystem.",
    description: `### Summary
Counsel India - a leading Practical Psychology Learning EdTech Platform in India is looking for a passionate full-stack developer to help develop and maintain our Web Platform and Mobile Apps using React, React Native, NodeJs with CSS, HTML, JavaScript, Android Development, and AWS Cloud ecosystem. That person will have worked in the past with other front-end and back-end projects and will have a clear understanding of how to deliver high-performing web applications.

### Responsibilities
- Manage and develop Counsel India’s web and mobile platforms, 3rd party integrations and cloud hosting.
- Work with a cross-functional software development team on highly visible strategic projects.
- Responsible for development of highly responsive, web-based UI in a flexible and well-structured frontend architecture.
- Experience working with remote data via REST and JSON.
- Produce well designed efficient code in a timely manner to meet delivery timescales/milestones.
- Design client-side and server-side architecture.
- Develop and manage well-functioning databases and applications.
- Solve complex performance problems and architectural challenges.

### Required Skills and Qualifications
- Experience of over 3 years in software development.
- B.S/B.E in Computer Science or equivalent demonstrated experience.
- Proficient in Node.js, React.js, Next.js, TypeScript.
- MySQL and NoSQL databases (MongoDB).
- Responsive design, cross-browser compatibility, and web performance optimization.
- Experience with Git, Services, RESTful APIs, AWS deployment.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "dmm",
    title: "Digital Marketing Manager",
    summary:
      "Looking for an experienced Digital Marketing Manager to lead customer acquisition, paid campaigns, growth strategy, SEO, and social performance across all digital channels.",
    description: `### Summary
We are seeking an experienced Digital Marketing Manager to lead our growth campaigns and strengthen Counsel India's digital presence across Google Ads, Meta Ads, YouTube, LinkedIn, and organic search channels.

### Key Responsibilities
- Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns.
- Design, build and maintain our social media presence and community engagement.
- Measure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs).
- Identify trends and insights, and optimize spend and performance based on the insights.
- Brainstorm new and creative growth strategies.
- Plan, execute, and measure experiments and conversion tests.

### Requirements
- Proven working experience in digital marketing (3+ years).
- Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns.
- Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate.
- Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, WebTrends).`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "dme",
    title: "Digital Marketing Executive",
    summary:
      "Join our marketing team to manage organic social media, content distribution, paid ad optimization, email marketing newsletters, and creative student engagement campaigns.",
    description: `### Summary
Counsel India is hiring a driven Digital Marketing Executive to handle day-to-day campaign operations, content planning, paid ads monitoring, and lead-generation funnels.

### Responsibilities
- Assist in formulating strategies to build a lasting digital connection with consumers.
- Plan and monitor the ongoing company presence on social media (Twitter, Facebook, Instagram, LinkedIn etc.).
- Launch optimized online adverts through Google Ads, Meta to increase company and brand awareness.
- Be actively involved in SEO efforts (keyword, image optimization etc.).
- Prepare online newsletters and promotional emails and organize their distribution through various channels.
- Provide creative ideas for content marketing and update website.
- Measure performance of digital marketing efforts using Web analytics tools.

### Requirements
- 1-2 years experience as a Digital Marketing Executive or similar role.
- Good understanding of digital marketing concepts and best practices.
- Experience with B2C social media, Google Adwords and email campaigns and SEO/SEM.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "b2b-manager",
    title: "Partnership Manager (B2B)",
    summary:
      "Counsel India is looking for an ambitious and energetic Business Development Manager to help us expand our B2B institutional clientele and university partnerships.",
    description: `### Summary
Counsel India - India's leading Psychology Learning EdTech Platform is looking for an ambitious and energetic Business Development Manager to help us expand our B2B clientele. The ideal candidate should have strong customer relationship skills, interpersonal and communication skills, a focus on organization, and enhanced multitasking abilities. Driving B2B sales and undertaking strategic analysis are the key aspects of the position, along with exceptional negotiation skills and the ability to close deals.

### Job Description
- Establishing B2B sales objectives by forecasting and developing annual sales projections and projecting expected sales volume and profit for existing and new products.
- Collaborate with company leadership to understand and execute growth and scaling of the business.
- Achieve growth and hit sales targets by successfully managing the B2B team.
- Achieve weekly and monthly targets in a high-pressure performance-driven competitive environment.
- Prepare proposals, presentations, MoUs, agreements and related documents for smooth functioning of B2B vertical.
- Negotiating with institutional stakeholders, schools, universities, and corporate clients.
- Build and promote strong, long-lasting customer relationships.

### Requirement and Qualifications
- Bachelor's degree or Masters in business management, marketing, or related field.
- 3-5 years of proven track record in B2B business sales or related market.
- Successful previous experience as a partnerships/sales manager, consistently meeting or exceeding targets.
- Excellent managerial and communication skills.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    summary:
      "Drive offline and online marketing activations, event sponsorships, webinar setups, campus outreach, and creative branding initiatives across regions.",
    description: `### Summary
We are looking for a skilled Marketing Executive to oversee the marketing operations of the company and develop campaigns that elevate the Counsel India brand nationwide.

### Responsibilities
- Conceive and develop efficient and intuitive marketing strategies.
- Organize and oversee advertising/communication campaigns (social media, TV etc.), exhibitions and promotional events.
- Conduct market research and analysis to evaluate trends, brand awareness and competition ventures.
- Initiate and control surveys to assess customer requirements and dedication.
- Write copy for diverse marketing distributions (brochures, press releases, website material etc.).
- Maintain relationships with media vendors and publishers to ensure collaboration in promotional activities.

### Requirements
- Proven experience as marketing executive or similar role.
- Good understanding of market research techniques, data analysis and statistics methods.
- Thorough knowledge of strategic planning principles and marketing best practices.
- Proficient in MS Office and marketing software.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "hr-intern",
    title: "HR Intern",
    summary:
      "Seeking proactive Human Resources Interns to support talent acquisition, candidate screening, employee engagement activities, onboarding, and organizational culture.",
    description: `### Summary
Counsel India is looking for an enthusiastic HR Intern to participate in various Human Resources duties and assist our HR department with daily administrative and recruiting tasks.

### Responsibilities
- Assist the recruitment team with screening candidate resumes and application forms.
- Schedule and confirm interviews with candidates across business and academic departments.
- Post, update and maintain job openings on our career platforms and job boards.
- Help organize employee engagement sessions, workshops, and team-building events.
- Maintain employee records and internal HR spreadsheets.
- Participate in organizing company celebrations, wellness programs, and HR initiatives.

### Requirements
- Undergraduate or graduate pursuing degree in Human Resources, Business, Psychology, or related discipline.
- Basic understanding of full-cycle recruiting and HR functions.
- Excellent verbal and written communication skills.
- Empathetic and positive attitude.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "bde-intern",
    title: "Business Development Intern",
    summary:
      "An exciting internship opportunity for students and fresh graduates to gain hands-on experience in EdTech sales, market research, client consultations, and revenue operations.",
    description: `### Summary
Join Counsel India's fast-growing business team! As a Business Development Intern, you will get real-world experience in client communications, profiling, CRM management, and sales pitch execution under seasoned mentors.

### Job Description
- Conducting market research and identifying potential clients.
- Contacting potential customers and informing them about our psychology programs and courses.
- Answer queries and assist prospective learners in choosing the right specialization.
- Meet daily and weekly learning and outreach targets.
- Prepare daily activity reports.
- Connect with learners via telephone, Zoom, and Google Meet.
- Network and build lasting learner relationships.

### Requirements and Qualifications
- Bachelor's degree in business management, marketing, psychology, or related field (undergraduates allowed for internships of 3-6 months).
- Eagerness to learn sales and customer success fundamentals.
- Strong verbal and written communication skills.
- Self-driven, ambitious, and enthusiastic personality.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
  {
    id: "academic-counsellor",
    title: "Academic Counsellor",
    summary:
      "Guide prospective psychology students and working professionals to choose appropriate certification, diploma, and master programs aligned with their career ambitions.",
    description: `### Summary
We are seeking empathetic and knowledgeable Academic Counsellors to guide prospective learners through our practical psychology courses, diplomas, and master's credentials.

### Responsibilities
- Provide academic and career counselling to students and professionals interested in psychology programs.
- Understand learner backgrounds, goals, and suggest relevant specialization tracks.
- Follow up with prospective students through phone calls, emails, and video consultations.
- Achieve monthly enrolment goals with high student satisfaction.
- Maintain up-to-date knowledge of Counsel India's curriculum, faculty, and industry accreditations.

### Requirements
- Bachelor’s or Master’s in Psychology, Counselling, Education, or related field.
- Excellent interpersonal and listening skills.
- Prior experience in academic counselling or student advisory preferred.`,
    applyUrl: DEFAULT_APPLY_URL,
  },
];
