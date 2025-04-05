import React from "react";
import Link from "next/link";
import '../../Jobspost/page.css';
// Mock data - in a real app you'd fetch this from an API or database
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    logo: "/google.png",
    description: "Google is seeking a talented Frontend Developer to build cutting-edge, high-performance web applications. You will work on complex UI challenges, optimizing perfomance, and ensuring seamless user experiences across Gppgle products.",
    requirements: ["3+ years experience", "React knowledge", "CSS skills"],
    text: "🔹 Frontend Development",
    responsibilities: ["Develop interactive and responsive web applications using React.js, Next.js, and Angular.", "Implement UI components and design systems following Google’s Material Design principles.", "Ensure seamless integration with backend services and APIs."],
    salary: "₹320,000 - ₹450,000",
    location: "Mountain View, CA",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Facebook",
    logo: "/facebook.png",
    
    cover: "/trantorinc.jpg",
    description: "Meta (formerly Facebook) is looking for a Backend Developer to build and maintain high-performance, scalable backend systems for Facebook’s applications. You will work with a team of engineers to develop robust APIs, optimize databases, and enhance the overall efficiency of Meta’s backend infrastructure.",
    requirements: ["5+ years experience", "Node.js knowledge", "Daababase skills"],
    text: "🔹 Backend Development & API Design",
    responsibilities: ["Develop and maintain scalable RESTful & GraphQL APIs for Facebook’s services.", "Optimize and secure high-traffic backend systems for performance and reliability.", "Work with distributed systems, caching, and microservices architecture."],
    salary: "₹530,000 - ₹660,000",
    location: "Menlo Park, CA",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Amazon",
    logo: "/amazonp.png",
    description: "Amazon is looking for a Full Stack Developer to design, develop, and optimize scalable web applications. As part of Amazon’s tech team, you will build high-performance frontend and backend systems, integrate cloud services, and enhance user experience for millions of customers.",
    requirements: ["5+ years experience", "React and Node.js Knowledge", "AWS skills"],
    text: "🔹 Frontend & Backend Development",
    responsibilities: ["Develop dynamic web applications using React.js, Angular, or Vue.js.", "Build robust server-side applications using Node.js, Python, Java, or Go.", "Implement responsive UI/UX based on Amazon’s design standards."],
    salary: "₹540,000 - ₹670,000",
    location: "Seattle, WA",
  },
  {
    id: 4,
    title: "Data Svientist",
    company: "Accenture",
    logo: "/Accenture.png",
    description: "Accenture is seeking a Data Scientist to drive AI-powered insights, build predictive models, and optimize business decisions for global clients. You will work with large datasets, develop machine learning algorithms, and collaborate with cross-functional teams to deliver data-driven solutions across industries.",
    requirements: ["3+ years experience", "Python knowledge", "Machine learning skills"],
    text: "🔹 Data Analysis & Machine Learning",
    responsibilities: ["Develop predictive models, AI algorithms, and data-driven strategies to solve complex business problems.", "Work with structured & unstructured data, performing data preprocessing, feature engineering, and model tuning.", "Implement machine learning, deep learning, and NLP models for various use cases."],
    salary: "₹310,000 - ₹350,000",
    location: "Chicago, IL",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Netflix",
    logo: "/netfli.webp",
    description: "Netflix is looking for a Software Engineer to build and aptimize high-performance application that power its streaming platform. You will work on cutting-edge technologies, ensuring seamless content delivery, enhancing user experience, and driving innovation in entertainment technology.",
    requirements: ["4+ years experience", "Java Knowledge", "Spring skills"],
    text: "🔹Software Development & Optimization",
    responsibilities: ["Design and develop scalable backend & frontend systems to improve streaming performance.", "Implement microservices architecture, distributed systems, and cloud-based solutions.", "Optimize application perfomance for low latency and high availability."],
    salary: "₹425,000 - ₹555,000",
    location: "Los Gatos, CA",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Microsoft",
    logo: "/microsofts.png",
    description: "Microsoft is looking for a UI/UX Designer to create visually appealing, user-friendly nterfaces for its software products. You will work closely with developers, product managers, and researchers to design seamless user experiences across web and mobile applocations.",
    requirements: ["3+ years experience", "Figma knowledge", "User research skills"],
    text: "🔹User Experience & Interface Design",
    responsibilities: ["Design intuitive, aesthetically pleasing user interfaces for Microsofts products.", "Develop wireframes, prototypes, and high-fidelity design using Figma, AdobeXD, or Sketch.", "Ensure Seamless interaction design through user research and usability testing."],
    salary: "₹300,000 - ₹430,000",
    location: "Redmond, WA",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Apple",
    logo: "/apple.png",
    description: "As a DevOps Engineer at Apple, you will be responsible for designing, developing, and maintaining the infrastructure and services. You will work closely with software developers, system operators, and IT teams to automate workflows, optimize CI/CD pipelines, and ensure the scalability and security of Apples cloud and 0n-premises environments.",
    requirements: ["5+ years experience in DevOps, SRE or a similar role.", "AWS, Azure or Google Cloud knowledge", "CI/CD skills", "Profiency in scripting languages"],
    text: "🔹 DevOps & Cloud Infrastructure",
    responsibilities: ["Develop and maintain CI/CD pipelines to streamline software deployment.", "Automate infrastructure provisioning and configuration using taC tools like Terraform, Ansible, or CloudFormation.", "Monitor, troubleshoot, and optimize system perfmance, reliability, and security.", "Work with containerization and orchestration tools such as Docker and Kubernetes."],
    salary: "₹530,000 - ₹660,000",
    location: "Cupertino, CA",
  },
  {
    id: 8,
    title: "Project Manager",
    company: "IBM",
    logo: "/ibm.png",
    description: "At IBM, Project Manager play a pivotal role in leading and coordinating project teams to ensure successful delivery of solutions that meet client expectaions. Their primary responsibilities encompass managing the planning, execution, and completion phases of projects, ensuring adherence to scope, schedule, and budget constraints. This includes overseeing project resources, which may involve subcontractors, and establishing effective communication plans to keep all stakeholders informed.",
    requirements: ["5+ years experience", "Agile knowledge", "Leadership skills", "Problem-Solving", "Communication and Organization"],
    text: "🔹Project Managing",
    responsibilities: ["Guide project teams through all phases, from initiation to closure, ensuring alignment with client objectives and contractual agreements.", "Monitor and control project scope, budget, and timelines, applying techniques for planning, tracking, change control, and risk management.", "Oversee all project resources, including internal team members and subcontractors, to ensure optimal performance and resource utilization.", "Develop and maintain effective communication plans, providing regular updates to clients and stakeholders, and ensuring transparency throughout the project lifecycle."],
    salary: "₹520,000 - ₹650,000",
    location: "Armonk, NY",
  },
  {
    id: 9,
    title: "Data Analyst",
    company: "Tesla",
    logo: "/tesla.png",
    description: "Tesla is seeking a highly skilled Data Analyst to join our dynamic team. In this role, you will analyze lrge datasets, generate insights, and provide data-driven recommendations to improve Teslas operations, products, and business strategies. You will work closely with cross-functional teams to optimize processes. You will work closely with cross-functional teams to optimize processes, enhance decision-making, and support innovation.",
    requirements: ["3+ years experince", "Strong knowledge of SQL, Python, R", "Data visualization skills", "Problem-solving and communication skills"],
    text: "🔹Data Analyst Role ",
    responsibilities: ["Collect, clean, and analyze large datasets from various sources.", "Develop dashboard and reports to visualize key metrics.", "Identify trends, patterns, and insights to support business decisions.", "Collaborate with engineering, finance, and operations teams to improve efficiency.", "Use statistical models and machine learning techniques to forecast trends.", "Automate data processes and optimize data managment systems.", "Ensure data accuracy, integrity, and security."],
    salary: "₹310,000 - ₹440,000",
    location: "Palo Alto, CA",
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    company: "Intel",
    logo: "/intel.png",
    description: "Intel is looking for a skilled Cybersecurity Analyst to strengthen our security infrastructure and protect senstive data from cyber threats. As a key part of intels cybersecurity team, you will monitor, analyze, and responde to security incidents while implementing proactive measures to enhance security posture.",
    requirements: ["4+ years experience", "Network security knowledge", "Risk assessment skills, threat detection skills", "Experience with security tools (SIEM, firewalls, IDS/IPS, endpoint protection).", "Certifications like CISSP, CEH, CISM, or Security+ are preferred."],
    text:"🔹What You have to do",
    responsibilities: ["Monitor networks and systems for security breaches and suspicious activity.", "Investigate security incidents and recommend mitigation strategies.", "Conduct vulnerbility assesments and penetration testing.", "Implement security controls and best practices to protect data and infrastructure.", "Collaborate with IT and engineering teams to enhance security protocols.", "Research emerging threats and stay updated on cybersecurity trends.", "Ensure compliance with security policies, standards, and regulations."],
    salary: "₹420,000 - ₹550,000",
    location: "Santa Clara, CA",
  },
  {
    id: 11,
    title: "Cloud Engineer",
    company: "Adobe",
    logo: "/adobe.png",
    description: "Adobe is seeking a skilled Cloud Engineer to join our dynamic team and help design, build, and optimize cloud-based infrastructure and services. As a Cloud Engineer, you will work with cutting-edge cloud technologies to develop scalable, secure, and high-performance solution that power Adobes product and services.",
    requirements: ["3+ years experience", "AWS, Azure, or Google Cloud knowledge", "Cloud architecture skills", "Proficiency in Terraform, Kubernetes, Docker, or Ansible", "Experience with monitoring tools"],
    text: "🔹You have to do",
    responsibilities: ["Design, implement, and maintain cloud infrastructure on AWS, Azure, or Google Cloud.", "Develop automation scripts for provisioning, scaling, and monitoring cloud resources.", "Work closely with DevOps, Security, and Software Engineering teams to ensure high availability and security of cloud-based applications.", "Optimize cloud costs and perfomance by implementing best practices in cloud architecture.", "Implement CI/CD pipelines to enhance deployment efficiency"],
    salary: "₹415,000 - ₹525,000",
    location: "San Jose, CA",
  },
  {
    id: 12,
    title: "Machine Learning Er.",
    company: "NVIDIA",
    logo: "/nvidia.jpeg",
    description: "NVIDIA is seeking a talented Machine Learning Engineer to develop and optimize cutting-edge AI models and deep learning frameworks. In this role, you will work with a world-class team to advance the capabilities of AI in areas such as computer vision, natural language processing, and autonomous systems. Your contributions will help power the future of AI across various industries, from gaming and healthcare to self-driving cars.",
    requirements: ["5+ years experience", "Strong programming skills in Python, C++, or CUDA", "Deep learning framework such as TensorFlow, PyTorch, or JAX", "Experience with GPU acceleration and parallel computing"],
    text: "🔹What you'll have to do",
    responsibilities: ["Design, develop, and optimize machine learning models for real-world applications.", "Implement and fine-tune deep learning architectures using frameworks like TensorFlow, PyTorch, or JAX.", "Work with large-scale dataset and develop efficient data pipelines for training and inference.", "Optimized AI workload for GPU acceleration and high-performance computing(HPC).", "Improve model efficiency through quantization, pruning, and model compression techniques."],
    salary: "₹630,000 - ₹760,000",
    location: "Santa Clara, CA",
  },
  {
    id: 13,
    title: "Blockchain Developer",
    company: "Oracle",
    logo: "/oracle.webp",
    description: "We are looking for a Blockchain Developer to design, implement, and optimize blockchain solutions using Oracle Blockchain Platform and other DLT (Distributed Ledger Technology) frameworks. You will collaborate with cross-functional teams to develop smart contracts, decentralized applications (DApps), and enterprise blockchain solutions for various industries.",
    requirements: ["4+ years experience", "Solidity knowledge", "Cryptography skills"],
    text: "🔹 Blockchain Development & Implementation",
    responsibilities:["Design, develop, and deploy smart contracts on Hyperledger Fabric or Ethereum-based platforms.", "Work with Oracle Blockchain Platform to create secure and scalable blockchain solutions.", "Collaborate with cross-functional teams to gather requirements and deliver blockchain solutions that meet business needs.", "Conduct code reviews and ensure best practices in blockchain development.", "Optimize blockchain networks for performance, scalability, and security.", "Stay updated with the latest trends and advancements in blockchain technology."],
    salary: "₹540,000 - ₹670,000",
    location: "Redwood city, CA",
  },
  {
    id: 14,
    title: "Game Developer",
    company: "Epic Games",
    logo: "/epic.png",
    description: "Epic Games is looking for a passionate and skilled Game Developer to help create immersive and cutting-edge gaming experiences using Unreal Engine. As a part of our development team, you will work on gameplay mechanics, AI, graphics, and performance optimization to bring world-class games to life. Whether it's working on Fortnite, Unreal Engine advancements, or new IPs, you will have the opportunity to shape the future of gaming.",
    requirements: ["2+ years of experience", "Strong programming skills in C++ and Blueprints", "Experienceworking wth Unreal Engine 4 or 5", "Understanding of game physics, AI, animations, and rendering techniques", "Knowledge of multiplayer networking and game optimization techniques", "Experience with shader programming and 3D math is a plus"],
    text: "🔹What you have to do",
    responsibilities: ["Design, develop and implement gameplay mechanics, Ai behaviors, and physics interactions.", "Collaborate with designers, artists, and other engineers to create immersive gaming experiences.", "Optimize game performance for PC, console, and mobile platforms.", "Implement multiplayer networking and real-time game interactions.", "Debug and fix game-related issues to improve stability and performance."],
    salary: "₹300000 - 450,000",
    location: "Alpha, Noida",
  },
  {
    id: 15,
    title: "Network Engineer",
    company: "Cisco",
    logo: "/cisco.png",
    description: "Cisco is seeking a skilled Network Engineer to design, implement, and maintain secure and scalable network infrastructures. In this role, you will work with cutting-edge networking technologies to support enterprise, cloud, and data center environments. You'll collaborate with cross-functional teams to optimize network performance, troubleshoot issues, and enhance cybersecurity measures to ensure seamless connectivity for Cisco's global clients.",
    requirements: ["5+ years experience", "CCNA/CCNP certification", "Experience with firewalls, VPNs, IDS/IPS, and network security best practices", "Scripting knowledge in Python or Bash for network automation", "Familiarity with cloud networking (AWS, Azure, Google Cloud) and hybrid environments"],
    text: "🔹What you have to do",
    responsibilities: ["Design, implement, and manage network infrastructure for large-scale enterprise environments.", "Implement and maintain Cisco routers, switches, firewalls, and wireless systems.", "Trubleshoot network performance issues, outages, and security threats.", "Optimize with Cisco SD-WAN, SDN, and automation tools to streamline network operations.", "Ensure network security compliance by implementing firewall policies, VPNs, and access controls.", "Monitor and analyze network traffic using tools like Cisco Prime, SolarWinds, and Wireshark."],
    salary: "₹560,000 - ₹980,000",
    location: "Bangalore",
  }, 
  {
    id: 16,
    title: "Web Developer",
    company: "Spotify",
    logo: "/spotify.png",
    description: "Spotify is looking for for a talented Web Developer to build and optimize engaging, high-perfomance web applications that enhance the Spotify experience for millions of users worldwide. You'll work with a dynamic team of designers, engineers, and product managers to develop responsive, interactive, and scalable web applications that power Spotify's music, podcast, and content platforms.",
    requirements: ["2+ years experience in web development", "Strong proficiency in JavaScript (ES6+), HTML5, and CSS3", "Hands-on experience with React.js, Next.js, or Vue.js", "Familiarity with Node.js, Express, or backend technologies", "Experience working with API integrations (REST, GraphQL, WebSockets)"],
    text: "🔹What you have to do",
    responsibilities: ["Develop and maintain modern, user-friendly web application using JavaScript, React.js, and Node.js.", "Optimize web performance for fast loading times and seamless user experiences.", "Collaborate with UX/UI designers to bring creative ideas to life.", "Implement RESTful APIs and GraphQL to integrate with backed services.", "Ensure cross0-browser compatibility and mobile-first design principles.", "Write clean, maintainable, and well-documented code following best practices.", "Troubleshoot and debug frontend and backend issues to improve platform sstability.", "Stay updated on the latest web development trends, tools, and technologies"],
    salary: "₹320,000 - ₹450,000",
    location: "Stockholm",
  }
];

export default function JobDetail({ params }) {
  const job = jobs.find((job) => job.id === Number(params.id));

  // if (!job) {
  //   return <div>Job not found</div>;
  // }

  return (
    <>
    <div className="covers">
      <img src={job.cover} alt={job.img} className="cover-img"/>
    </div>
    <div className="job-detail-container">
      <Link href="/Jobspost" className="back-button">
        &larr; Back to Jobs
      </Link>
      
      <div className="job-header">
        <img src={job.logo} alt={job.company} className="company-logo-large" />
        <div className="job-header-info">
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <p className="job-location">{job.location}</p>
          <p className="job-salary">{job.salary}</p>
        </div>
      </div>
     

      <div className="job-content">
        
        <section className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </section>

        <section className="job-requirements">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>
        <section className="responsibilities">
          <h3>Key Responsibilities</h3>
          <h4>{job.text}</h4>
          <ul>
            {job.responsibilities.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>
        <section className="attension">
          <h3>Beware of imposters!⚠️</h3>
          <p><strong>IB JOBS</strong> does not promise a job or an interview in exchange of money. Fraudsters may ask you to pay in the pretext of registration fee, Refundable Fee.</p>
          <p>We value the trust you place on <strong>IB JOBS </strong>are commited to making your job search a safe and fraud-free experience on our site. However, in the wake of an increasing number of instances of fake job offers, we suggest you to be cautious of fraudulent emails and calls.</p>
        </section>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
    </>
  );
}