
type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string;
  link: string;
}

type WorkExperience = {
  id: number;
  position: string; 
  company: string;
  start: Date;
  end: Date;
  points: Array<string>;
  compnay_link: string;
  technologies: string;
  isPresent: boolean
}

type Skill = {
  title: string;
  desc: string;
}

type Project = { 
  id:number;
  title: string;
  keywords: string;
  github:string|null;
  manuscript:string|null;
  points:Array<string>;
}

export const siteConfig: Config = {
  title: "Mitanshu Bhoot",
  description: "MSCS @ Indiana University Bloomington | Ex-Veritas | Cloud & Backend Developer | AI/ML, GenAI, Distributed Systems Enthusiast",
  lang: "en-US",
  profile: {
    author: "Mitanshu Bhoot",
    description: "MSCS @ Indiana University Bloomington | Ex-Veritas | Cloud & Backend Developer | AI/ML, GenAI, Distributed Systems Enthusiast"
  }
}

export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/mitanshubhoot",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/mitanshu-bhoot-86904a184/",
  },
  {
    icon: "mdi:email",
    friendlyName: "Email",
    link: "mailto:mbhoot@iu.edu",
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Work Experience", path: "/work" },
  { title: "Projects", path: "/projects" },
  { title: "Resume", path: "https://drive.google.com/file/d/15BshzsuR7fbbPJpB4xvsX3cNP-ady55f/view?usp=sharing" }
];

export const WORK_EXPERIENCE: Array<WorkExperience> = [
  {
    id: 1,
    position: "Associate Software Developer",
    company: "Veritas Technologies LLC",
    start: new Date("2022-07-01"),
    end: new Date("2024-07-01"),
    points: [
      "Delivered secure data backup and recovery solutions for SaaS platforms, resolving customer backlog by 80%",
      "Achieved 98% reduction in critical vulnerabilities through containerized open-source solutions",
      "Engineered a C#/.NET workload to migrate email formats to the cloud and archive in Azure Blob Storage",
      "Led Elasticsearch-based search system with optimized indexing pipeline, boosting speed by 70%",
      "Future-proofed backend by migrating storage infrastructure and enabling RAG-based integrations"
    ],
    compnay_link: "https://www.veritas.com/",
    technologies: "C#, .NET, Azure, Elasticsearch, Docker, SQL Server",
    isPresent: false
  },
  {
    id: 2,
    position: "Software Developer Intern",
    company: "Veritas Technologies LLC",
    start: new Date("2022-01-01"),
    end: new Date("2022-06-30"),
    points: [
      "Containerized backup agent using Docker for scalable, dependency-free deployments",
      "Reduced provisioning time from minutes to seconds, enabling rapid deployment cycles"
    ],
    compnay_link: "https://www.veritas.com/",
    technologies: "Docker, VM Backup, Microservices",
    isPresent: false
  },
  {
    id: 3,
    position: "Data Science Intern -  Summer",
    company: "Siemens Digital Industries",
    start: new Date("2021-07-01"),
    end: new Date("2021-08-30"),
    points: [
      "Transformed 1M+ raw data points into interactive Power BI dashboards",
      "Delivered actionable insights and enhanced visibility into project KPIs",
      "Accelerated decision-making, minimizing turnaround times, and improved team coordination across initiatives such as hackathons and cross-functional projects",
    ],
    compnay_link: "https://www.sw.siemens.com/en-US/",
    technologies: "Python, Power BI, SQL, DAX, Power Query (M)",
    isPresent: false
  },
  {
    id: 4,
    position: "Research Intern - GRM Program",
    company: "IBM",
    start: new Date("2020-10-01"),
    end: new Date("2021-04-01"),
    points: [
      "Designed privacy-preserving model training on encrypted genomic data using Fully Homomorphic Encryption (FHE)",
      "Implemented SIMD vectorized NN for encrypted gene score computation with 20x throughput",
      "Integrated decrypted scores with clinical data for personalized treatment recommendations"
    ],
    compnay_link: "https://www.ibm.com/",
    technologies: "FHE, SIMD, Neural Networks",
    isPresent: false
  }
];

export const TECHNICAL_SKILLS: Array<Skill> = [
  { title: "Languages/Frameworks", desc: "C/C++, Python, C#, Go, Javascript, Bash, .Net, Django, Flask, Node.js, LangChain" },
  { title: "Database", desc: "PostgreSQL, MySQL, SQLite, MongoDB, Cassandra, Redis, DynamoDB" },
  { title: "Tools & Libraries", desc: "Git, GitHub, Linux, Elasticsearch, Visual Studio, Postman, Swagger, Power BI, Tableau, Selenium, Jira" },
  { title: "Cloud & DevOps", desc: "Azure, AWS (EC2, S3, ECR, ECS, RDS, Lambda, CloudWatch, Glue), GitHub Actions, Docker, Kubernetes" },
  { title: "AI & ML", desc: "PyTorch, TensorFlow, Scikit, Pandas, NumPy, Matplotlib, Hugging Face, Transformers, LLM, NLP, CV, Gen AI" },
  { title: "Other", desc: "Backend, Distributed Systems, Debugging, Agile, SDLC, Data Analysis, Data Visualization, AI Integration" }
];

export const PROJECTS: Array<Project> = [
  {
    id: 1,
    title: "Serverless Video Conferencing",
    keywords: "JavaScript, WebRTC, Node.js, WebSockets",
    github: "https://github.com/mitanshubhoot/WebRTC-Video-Conferencing",
    manuscript: null,
    points: [
      "Built peer-to-peer conferencing platform with WebRTC and WebSocket signaling server",
      "Supported 10 clients in a scalable mesh architecture without centralized media relays"
    ]
  },
  {
    id: 2,
    title: "Azure Resource Monitoring",
    keywords: "Azure Monitor, KQL, Log Analytics, App Insights",
    github: null,
    manuscript: null,
    points: [
      "Built backend telemetry and autoscaling with real-time alerting and anomaly detection",
      "Reduced downtime by 40%, MTTR by 60%, and cloud costs by 25%"
    ]
  },
  {
    id: 3,
    title: "Multiprogramming Operating System (MOS)",
    keywords: "C++, POSIX Threads, Linux",
    github: "https://github.com/mitanshubhoot/MOS-Operating-System",
    manuscript: null,
    points: [
      "Simulated round-robin scheduling, paging, and memory management",
      "Handled 200+ concurrent requests with zero latency"
    ]
  },
  {
    id: 4,
    title: "Elderly Fall Detection",
    keywords: "Python, Numpy, Pandas, TensorFlow, OpenCV, Keras",
    github: "https://github.com/mitanshubhoot/Elderly-Fall-Detection",
    manuscript: null,
    points: [
      "Built a real-time fall detection system using depth cameras and a CNN-LSTM deep learning pipeline for motion recognition", 
      "Achieved a 30% improvement in detection accuracy over wearable sensors"
    ]
  }
];
