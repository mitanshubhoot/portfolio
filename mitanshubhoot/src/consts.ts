
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
  { title: "Resume", path: "https://drive.google.com/file/d/1_966MAUUmsI63OFIphjyLxlA6-JdOxNb/view?usp=sharing" }
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
      "Future-proofed backend by migrating storage infrastructure and enabling RAG-based integrations",
      "Achievement: Veritas Award for Excellent Performance(Q3 2023)",
      "Achievement: Winner Veritas Catalyst Hackathon 2022 (90+ teams)"
    ],
    compnay_link: "https://www.veritas.com/",
    technologies: "C#, .NET, Azure, SQL Server, Azure Blob Storage, Windows, Linux, Git, Elasticsearch, Docker",
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
    technologies: "C#, .NET, Docker, Windows Containers, Microservices, Git",
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
      "Integrated decrypted scores with clinical data for personalized treatment recommendations",
      "Publication: https://priorart.ip.com/IPCOM/00269757D"
    ],
    compnay_link: "https://www.ibm.com/",
    technologies: "Python, Boost Library (C++), IBM FHE Toolkit, SIMD, Depp Neural Networks",
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

export const PROJECTS = [
  {
    id: 1,
    title: "Serverless Video Conferencing",
    keywords: "JavaScript, WebRTC, Node.js, Express.js, WebSockets, HTML, CSS",
    github: "https://github.com/mitanshubhoot/WebRTC-Video-Conferencing",
    manuscript: null,
    points: [
      "Developed a real-time, peer-to-peer video conferencing platform leveraging WebRTC for secure media streaming and Node.js-based WebSocket signaling servers for efficient peer connection management.",
      "Implemented a scalable mesh architecture supporting up to 10 simultaneous clients without relying on centralized media relay servers, optimizing latency and resource efficiency."
    ]
  },
  {
    id: 2,
    title: "Azure Resource Monitoring",
    keywords: "Azure Monitor, KQL, Log Analytics, App Insights",
    github: null,
    manuscript: null,
    points: [
      "Engineered comprehensive telemetry and autoscaling solutions integrated with Azure Monitor and Application Insights, featuring real-time anomaly detection, automated alerting, and dynamic scaling rules.",
      "Significantly improved service reliability by reducing system downtime by 40%, mean-time-to-recovery (MTTR) by 60%, and optimizing cloud expenditures by 25%."
    ]
  },
  {
    id: 3,
    title: "Multiprogramming Operating System (MOS)",
    keywords: "C++, POSIX Threads, Linux, GCC",
    github: "https://github.com/mitanshubhoot/MOS-Operating-System",
    manuscript: null,
    points: [
      "Designed and implemented a multiprogramming operating system simulator featuring round-robin CPU scheduling, virtual memory management, paging techniques, and efficient process synchronization using POSIX Threads.",
      "Demonstrated robust performance handling 200+ concurrent requests with negligible latency, highlighting efficient memory management and scheduling algorithms."
    ]
  },
  {
    id: 4,
    title: "Elderly Fall Detection",
    keywords: "Python, Numpy, Pandas, TensorFlow, OpenCV, Keras, DNN",
    github: "https://github.com/mitanshubhoot/Elderly-Fall-Detection",
    manuscript: null,
    points: [
      "Built a sophisticated, real-time elderly fall detection system using depth-sensing cameras integrated with a hybrid CNN-LSTM neural network pipeline for precise motion recognition.",
      "Achieved a 30% improvement in detection accuracy compared to traditional wearable sensors, significantly enhancing user safety and emergency response effectiveness."
    ]
  },
  {
    id: 5,
    title: "Human Anatomical Reference Model",
    keywords: "Python, Open3D, Blender, Point-cloud Registration, Error Visualization, Machine Learning",
    github: "https://github.com/mitanshubhoot/hra-amap-kidney-assessment",
    manuscript: null,
    points: [
      "Developed a comprehensive 3D organ registration pipeline using the HRA-AMAP framework for precise alignment and error analysis of anatomical kidney models.",
      "Implemented bidirectional projection techniques and advanced signed distance fields (SDF) for visualizing registration accuracy through detailed heatmaps and histograms, ensuring robust anatomical consistency and model evaluation."
    ]
  },
  {
    id: 6,
    title: "Campus Navigation System",
    keywords: "C++, A* Algorithm, Pathfinding, Grid-based Navigation",
    github: "https://github.com/mitanshubhoot/campus_navigator",
    manuscript: null,
    points: [
      "Designed a console-based navigation tool utilizing the A* pathfinding algorithm to compute optimal routes on a 40x40 campus grid with dynamic obstacles and predefined landmarks.",
      "Provided an interactive, user-friendly grid visualization clearly marking shortest paths, landmarks, and obstacles to enhance navigational clarity and ease of use."
    ]
  },
  {
    id: 7,
    title: "Applied Machine Learning Projects",
    keywords: "Machine Learning, Deep Learning, Classification, Regression, Clustering, PCA, NLP",
    github: "https://github.com/mitanshubhoot/Applied-Machine-Learning",
    manuscript: null,
    points: [
      "Conducted extensive analyses across eight distinct machine learning projects, covering regression modeling for socioeconomic prediction, classification of geological samples, dimensionality reduction on imaging datasets, and evaluation of pretrained deep learning models.",
      "Applied advanced methods including PCA, t-SNE, Procrustes analysis, and ensemble modeling to achieve comprehensive performance evaluation and interpretability in comparison with human benchmarks."
    ]
  }
];
