
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
  category: string;
}

export const siteConfig: Config = {
  title: "Mitanshu Bhoot",
  description: "MSCS @ Indiana University Bloomington | Software Dev Intern @ DSALTA | Ex-Veritas | Backend & Cloud Engineer | API Development, Microservices, AI/ML Integration",
  lang: "en-US",
  profile: {
    author: "Mitanshu Bhoot",
    description: "MSCS @ Indiana University Bloomington | Software Dev Intern @ DSALTA | Ex-Veritas | Backend & Cloud Engineer | API Development, Microservices, AI/ML Integration"
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
  { title: "Resume", path: "https://drive.google.com/file/d/1E8-yXV5uB_xU8mFey8rF2fzGFjt6NM0E/view" }
];

export const WORK_EXPERIENCE: Array<WorkExperience> = [
  {
    id: 1,
    position: "Software Development Intern",
    company: "DSALTA Inc.",
    start: new Date("2025-06-01"),
    end: new Date(),
    points: [
      "Developing AI-first vendor risk management solutions with robust backend APIs and microservices architecture",
      "Building automated compliance and trust management workflows using Python, Node.js, and modern web technologies",
      "Contributing to real-time monitoring systems and backend services for third-party risk assessment",
      "Designing and implementing scalable backend systems for vendor onboarding and audit automation processes"
    ],
    compnay_link: "https://www.dsalta.com/",
    technologies: "Python, JavaScript, TypeScript, React, Next.js, Node.js, Docker, Kubernetes, Kafka, Redis, AI/ML, Cloud Technologies, APIs",
    isPresent: true
  },
  {
    id: 2,
    position: "Associate Software Developer",
    company: "Veritas Technologies LLC",
    start: new Date("2022-08-01"),
    end: new Date("2024-08-01"),
    points: [
      "Delivered secure data backup and recovery solutions for SaaS platforms, resolving customer backlog by 80%",
      "Achieved 98% reduction in critical vulnerabilities through containerized open-source solutions",
      "Engineered a C#/.NET workload to migrate email formats to the cloud and archive in Azure Blob Storage",
      "Led Elasticsearch-based search system with optimized indexing pipeline, boosting speed by 70%",
      "Future-proofed backend by migrating storage infrastructure and enabling RAG-based integrations",
      "Achievement: Veritas Award for Excellent Performance(Q3 2023)",
      "Achievement: Winner Veritas Catalyst Hackathon 2022 (90+ teams)"
    ],
    compnay_link: "https://www.veritas.com/",
    technologies: "C#, .NET, Azure, SQL Server, Azure Blob Storage, Windows, Linux, Git, Elasticsearch, Docker",
    isPresent: false
  },
  {
    id: 3,
    position: "Software Developer Intern",
    company: "Veritas Technologies LLC",
    start: new Date("2022-02-01"),
    end: new Date("2022-06-30"),
    points: [
      "Containerized backup agent using Docker for scalable, dependency-free deployments",
      "Reduced provisioning time from minutes to seconds, enabling rapid deployment cycles"
    ],
    compnay_link: "https://www.veritas.com/",
    technologies: "C#, .NET, Docker, Windows Containers, Microservices, Git",
    isPresent: false
  },
  {
    id: 4,
    position: "Data Science Intern -  Summer",
    company: "Siemens Digital Industries",
    start: new Date("2021-08-01"),
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
    id: 5,
    position: "Research Intern - GRM Program",
    company: "IBM",
    start: new Date("2020-11-01"),
    end: new Date("2021-05-01"),
    points: [
      "Designed privacy-preserving model training on encrypted genomic data using Fully Homomorphic Encryption (FHE)",
      "Implemented SIMD vectorized NN for encrypted gene score computation with 20x throughput",
      "Integrated decrypted scores with clinical data for personalized treatment recommendations",
      "Publication: https://priorart.ip.com/IPCOM/00269757D"
    ],
    compnay_link: "https://www.ibm.com/",
    technologies: "Python, Boost Library (C++), IBM FHE Toolkit, SIMD, Depp Neural Networks",
    isPresent: false
  }
];

export const TECHNICAL_SKILLS: Array<Skill> = [
  { title: "Languages/Frameworks", desc: "C/C++, Python, C#, Go, JavaScript, TypeScript, Java, Bash, .NET Core, Node.js, Express.js, React, Next.js, Django, Flask, LangChain, GraphQL, gRPC" },
  { title: "Database", desc: "PostgreSQL, MySQL, SQLite, MongoDB, Cassandra, Redis, DynamoDB, Amazon RDS, Elasticsearch" },
  { title: "Tools & Libraries", desc: "Git, GitHub, Linux, Visual Studio, Postman, Swagger, Power BI, Tableau, Selenium, Jira, WebSockets, Protocol Buffers, Terraform, Ansible, Jenkins" },
  { title: "Cloud & DevOps", desc: "Azure, AWS (EC2, S3, ECR, ECS, RDS, Lambda, CloudWatch, Glue), GitHub Actions, Docker, Kubernetes, Kafka" },
  { title: "AI & ML", desc: "PyTorch, TensorFlow, Scikit, Pandas, NumPy, Matplotlib, Hugging Face, Transformers, LLM, NLP, CV, Gen AI, Spark" },
  { title: "Other", desc: "Backend, Distributed Systems, Microservices, Real-time Systems, Debugging, Agile, SDLC, Data Analysis, Data Visualization, AI Integration" }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Real-Time Document Collaboration Platform",
    keywords: "Go, gRPC, WebSocket, AWS, Docker, Protocol Buffers, Next.js",
    github: "https://github.com/mitanshubhoot/Doc-collab-platform",
    manuscript: null,
    points: [
      "Built a real-time document platform with Go, WebSockets, gRPC & DynamoDB enabling 10K+ document sync.",
      "Containerized & deployed on AWS EC2 using Docker, improving availability & maintaining 99.9% uptime."
    ],
    category: "Backend"
  },
  {
    id: 2,
    title: "Real-Time Collaborative Code Editor",
    keywords: "React, TypeScript, Yjs, WebRTC, Monaco Editor",
    github: "https://github.com/mitanshubhoot/Code-Editor",
    manuscript: null,
    points: [
      "Programmed a collaborative code editor with React, WebRTC & Monaco, supporting 8+ languages and real-time communication.",
      "Enabled live collaboration for 10+ concurrent users, enabling remote pair programming & team-based code reviews."
    ],
    category: "Backend"
  },
  {
    id: 3,
    title: "Code Converter",
    keywords: "C, Java, Python, Abstract Syntax Tree, Compiler Design",
    github: "https://github.com/mitanshubhoot/Code-Coverter",
    manuscript: null,
    points: [
      "Constructed a code conversion to automate C to Java/Python translation, reducing coding errors by 25% & speeding up delivery.",
      "Leveraged ASTs to generate intermediate code and streamline debugging, processing 1K+ lines per minute."
    ],
    category: "Backend"
  },
  {
    id: 4,
    title: "Text to SQL Generator",
    keywords: "Python, OpenAI GPT-3.5, LLM, SQL, PostgreSQL, Node.js, TypeScript",
    github: "https://github.com/mitanshubhoot/talk-to-your-db",
    manuscript: null,
    points: [
      "Built GPT-3.5-based Natural Language to SQL model with prompt tuning, improving query accuracy by 35%",
      "Optimized end-to-end NLP pipeline in Node.js for real-time query translation, reducing model error rate by 50%"
    ],
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Document-based QA with LangChain & GPT-3.5",
    keywords: "Python, SQL, Streamlit, FAISS, LangChain, OpenAI GPT-3.5, PDF Processing",
    github: "https://github.com/mitanshubhoot/Chat-with-your-doc",
    manuscript: null,
    points: [
      "Developed a Streamlit-based QA system using LangChain and GPT-3.5 to parse and query PDF, DOCX, and TXT files",
      "Integrated chunking, OpenAIEmbeddings & persistent chat, enhancing document parsing, vector search & conversational memory"
    ],
    category: "AI/ML"
  },
  {
    id: 6,
    title: "IndyGo Transit Performance Dashboard",
    keywords: "PowerBI, Python, SQL, DAX, ArcGIS, ETL, Data Visualization",
    github: null,
    manuscript: "https://drive.google.com/file/d/1ECnC3Qtzo27nIyypOavdE03yEdpbojPs/view?usp=sharing",
    points: [
      "Constructed Python ETL pipelines for real-time transit data, enabling predictive analysis of delays and ridership trends",
      "Leveraged Power BI dashboard with ArcGIS integration to model spatial KPIs like on-time performance and route reliability"
    ],
    category: "Data"
  },
  {
    id: 7,
    title: "Serverless Video Conferencing",
    keywords: "JavaScript, WebRTC, Node.js, Express.js, WebSockets, HTML, CSS",
    github: "https://github.com/mitanshubhoot/WebRTC-Video-Conferencing",
    manuscript: "https://webrtc-video-conferencing.onrender.com/",
    points: [
      "Developed a real-time, peer-to-peer video conferencing platform leveraging WebRTC for secure media streaming and Node.js-based WebSocket signaling servers for efficient peer connection management.",
      "Implemented a scalable mesh architecture supporting up to 10 simultaneous clients without relying on centralized media relay servers, optimizing latency and resource efficiency."
    ],
    category: "Backend"
  },
  {
    id: 8,
    title: "Azure Resource Monitoring",
    keywords: "Azure Monitor, KQL, Log Analytics, App Insights",
    github: null,
    manuscript: null,
    points: [
      "Engineered comprehensive telemetry and autoscaling solutions integrated with Azure Monitor and Application Insights, featuring real-time anomaly detection, automated alerting, and dynamic scaling rules.",
      "Significantly improved service reliability by reducing system downtime by 40%, mean-time-to-recovery (MTTR) by 60%, and optimizing cloud expenditures by 25%."
    ],
    category: "Cloud"
  },
  {
    id: 9,
    title: "Multiprogramming Operating System (MOS)",
    keywords: "C++, POSIX Threads, Linux, GCC",
    github: "https://github.com/mitanshubhoot/MOS-Operating-System",
    manuscript: null,
    points: [
      "Designed and implemented a multiprogramming operating system simulator featuring round-robin CPU scheduling, virtual memory management, paging techniques, and efficient process synchronization using POSIX Threads.",
      "Demonstrated robust performance handling 200+ concurrent requests with negligible latency, highlighting efficient memory management and scheduling algorithms."
    ],
    category: "Backend"
  },
  {
    id: 10,
    title: "Elderly Fall Detection",
    keywords: "Python, Numpy, Pandas, TensorFlow, OpenCV, Keras, DNN",
    github: "https://github.com/mitanshubhoot/Elderly-Fall-Detection",
    manuscript: null,
    points: [
      "Built a sophisticated, real-time elderly fall detection system using depth-sensing cameras integrated with a hybrid CNN-LSTM neural network pipeline for precise motion recognition.",
      "Achieved a 30% improvement in detection accuracy compared to traditional wearable sensors, significantly enhancing user safety and emergency response effectiveness."
    ],
    category: "AI/ML"
  },
  {
    id: 11,
    title: "Human Anatomical Reference Model",
    keywords: "Python, Open3D, Blender, Point-cloud Registration, Error Visualization, Machine Learning",
    github: "https://github.com/mitanshubhoot/hra-amap-kidney-assessment",
    manuscript: null,
    points: [
      "Developed a comprehensive 3D organ registration pipeline using the HRA-AMAP framework for precise alignment and error analysis of anatomical kidney models.",
      "Implemented bidirectional projection techniques and advanced signed distance fields (SDF) for visualizing registration accuracy through detailed heatmaps and histograms, ensuring robust anatomical consistency and model evaluation."
    ],
    category: "AI/ML"
  },
  {
    id: 12,
    title: "Campus Navigation System",
    keywords: "C++, A* Algorithm, Pathfinding, Grid-based Navigation",
    github: "https://github.com/mitanshubhoot/campus_navigator",
    manuscript: null,
    points: [
      "Designed a console-based navigation tool utilizing the A* pathfinding algorithm to compute optimal routes on a 40x40 campus grid with dynamic obstacles and predefined landmarks.",
      "Provided an interactive, user-friendly grid visualization clearly marking shortest paths, landmarks, and obstacles to enhance navigational clarity and ease of use."
    ],
    category: "Backend"
  },
  {
    id: 13,
    title: "Applied Machine Learning Projects",
    keywords: "Machine Learning, Deep Learning, Classification, Regression, Clustering, PCA, NLP",
    github: "https://github.com/mitanshubhoot/Applied-Machine-Learning",
    manuscript: null,
    points: [
      "Conducted extensive analyses across 8 distinct machine learning projects, covering regression modeling for socioeconomic prediction, classification of geological samples, dimensionality reduction on imaging datasets, and evaluation of pretrained deep learning models.",
      "Applied advanced methods including PCA, t-SNE, Procrustes analysis, and ensemble modeling to achieve comprehensive performance evaluation and interpretability in comparison with human benchmarks."
    ],
    category: "AI/ML"
  }
];
