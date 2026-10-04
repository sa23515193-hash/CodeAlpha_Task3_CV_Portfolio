const BASE_URL = import.meta.env.BASE_URL;
export const CONTACT = {
  email: 'sa23515193@gmail.com',
  whatsapp: '+92 3170763598',
  github: 'https://github.com/sa23515193-hash',
  linkedin: 'https://www.linkedin.com/in/sawaira-ijaz/',
  portfolio: 'https://sa23515193-hash.github.io/MY-CV-portfolio/',
}

export const navItems = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['certificates', 'Certificates'], ['research', 'Research'], ['contact', 'Contact'],
]

export const skills = {
  DEVELOPMENT: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Vite', 'Tailwind CSS', 'TypeScript', 'PHP', 'Laravel', 'Node.js', 'Express.js', 'AJAX', 'JSON', 'MySQL', 'MongoDB'],
  'AI & DATA': ['Data Analytics', 'Data Visualization', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Image Processing', 'Statistics'],
  TOOLS: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Composer', 'Vite'],
  PROFESSIONAL: ['Technical Content Writing', 'Communication', 'Teaching', 'Presentation', 'Leadership', 'Management', 'Project Management', 'Digital Marketing', 'Research', 'Documentation', 'Teamwork', 'Problem Solving', 'Time Management', 'English Teaching', 'Lecturing', 'Training'],
}

export const experiences = [
  { status: 'ONGOING', role: 'AI Technical Content Writer Intern', company: 'GAO Tek Inc.', duration: '6 Months', text: 'Working on AI and technology-focused content, research-based writing and communicating technical concepts clearly.', tags: ['AI', 'Technical Writing', 'Research', 'Content Development', 'Technology'] },
  { status: 'ONGOING', role: 'Full Stack Web Development Intern', company: 'Decode Labs', duration: '22 Sep 2026 — 22 Oct 2026', text: 'Practical full stack web development experience through project-based learning and software development tasks.', tags: ['Full Stack', 'Web Development', 'React', 'Backend', 'Projects'] },
  { status: 'TRAINING', role: 'Full Stack Development Track', company: 'ZeroIntern', duration: '2 Months', text: 'Structured full stack development training involving practical project development.', tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'] },
  { status: 'ONGOING', role: 'Frontend Developer Intern', company: 'CodeAlpha', duration: '1 Month', text: 'Practical frontend development experience involving web interfaces and frontend implementation.', tags: ['Frontend', 'UI', 'Responsive Web'] },
  { status: 'TRAINING', role: 'Data Science / Data Analyst Intern', company: 'Zidio Development', duration: 'Ongoing', text: 'Practical exposure to data science and data analytics workflows, analysis and project-based learning.', tags: ['Data Science', 'Analytics', 'Analysis'] },
  { status: 'COMPLETED', role: 'Advanced Web Development Trainee', company: 'NAVTTC / Adan IT Center', duration: '3 Months', text: 'Practical training in modern web development and application workflows.', tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Laravel'] },
  { status: 'COMPLETED', role: 'English Teacher / Online English Instructor', company: 'Teaching Experience', duration: '3+ Years', text: 'Teaching experience across school and online English instruction, strengthening communication, presentation, mentoring and classroom-management skills.', tags: ['Teaching', 'Communication', 'Presentation', 'Leadership', 'TEFL'] },
]

export const projects = [
  { num: '01', title: 'STYLEVERSE', category: 'E-COMMERCE / FULL STACK',
     type: 'MAJOR PROJECT', 
      image: `${BASE_URL}images/styleverse.png`,
       description: 'Multi-vendor fashion e-commerce platform built around practical catalog, ordering, inventory and business workflows.', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'], features: ['Product management', 'Multi-vendor structure', 'Shopping cart', 'Orders & inventory', 'Coupons & returns', 'Analytics & WhatsApp ordering'], github: null, live: null, tone: 'fashion' },
  { num: '02', title: 'E-COMMERCE PLATFORM', 
    category: 'REACT / FULL STACK', type: 'PROJECT', 
     image: `${BASE_URL}images/ecommerce.png`, 
     description: 'Modern e-commerce application concept with a responsive storefront and administration-oriented architecture.', tech: ['React', 'Node.js', 'Express', 'MongoDB'], features: ['Product catalog', 'Shopping cart', 'Orders', 'Inventory', 'Admin dashboard', 'Payment-ready architecture'], github: null, live: null, tone: 'commerce' },
  { num: '03', title: 'AL-MUTAIRI FIBER GLASS',
     category: 'BUSINESS WEBSITE', type: 'BUSINESS PROJECT', 
      image: `${BASE_URL}images/fiber-glass.png`,
       description: 'Business website and product catalog experience with bilingual presentation, categories, search and filtering concepts.', tech: ['React', 'Vite', 'CSS'], features: ['Product catalog', 'Categories', 'Search & filtering', 'Arabic / English', 'Business information', 'Contact / order flow'], github: 'https://github.com/sa23515193-hash/Al-Matiri-Fiber-Glass/', live: 'https://sa23515193-hash.github.io/Al-Matiri-Fiber-Glass/', tone: 'industrial' },
  { num: '04', title: 'CAR SHOWROOM WEBSITE',
     category: 'FRONTEND / UI', type: 'PROJECT / DEMO', 
      image: `${BASE_URL}images/car-showroom.png`,
      description: 'Professional automotive showroom interface focused on vehicle presentation, categories, responsive UI and contact flow.', tech: ['HTML', 'CSS', 'JavaScript'], features: ['Vehicle showcase', 'Categories', 'Vehicle cards', 'Responsive UI', 'Contact section'], github: null, live: null, tone: 'automotive' },
  { num: '05', title: 'PERSONAL PORTFOLIO', category: 'REACT / VITE',
     type: 'CURRENT BUILD', 
      image: `${BASE_URL}images/cv-portfolio.png`,
       description: 'Single-page professional digital presence combining development work, research direction, experience and academic profile.', tech: ['React', 'Vite', 'CSS'], features: ['Single-page architecture', 'Responsive design', 'Scroll animation', 'Projects & experience', 'Research profile'], github: 'https://github.com/sa23515193-hash', live: null, tone: 'portfolio' },
  { num: '06', title: 'STUDENT PERFORMANCE ANALYTICS', category: 'DATA ANALYTICS', 
    type: 'PLANNED / IN PROGRESS',  
    image: `${BASE_URL}images/student-analytics.png`,
     description: 'A buildable analytics dashboard concept for exploring student performance, trends, KPIs and visual insights.', tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'], features: ['Data cleaning', 'Exploratory analysis', 'KPIs', 'Charts', 'Insight summaries'], github: null, live: null, tone: 'data' },
  { num: '07', title: 'IMAGE CLASSIFICATION & VISUAL ANALYSIS', category: 'AI / COMPUTER VISION',
     type: 'PLANNED / IN PROGRESS', 
      image: `${BASE_URL}images/classification.jpeg`,
      description: 'A learning-oriented computer vision project for image preprocessing, classification, evaluation and visual analysis.', tech: ['Python', 'OpenCV', 'TensorFlow / PyTorch'], features: ['Image preprocessing', 'Classification', 'Model evaluation', 'Visualization'], github: null, live: null, tone: 'vision' },
  { num: '08', title: 'SALES DATA ANALYTICS', category: 'DATA ANALYTICS', type: 'PLANNED / IN PROGRESS',  image: `${BASE_URL}images/data.jpeg`, description: 'A practical sales dataset project focused on cleaning, exploratory analysis, KPIs and decision-oriented visualizations.', tech: ['Python', 'Pandas', 'Excel / CSV', 'Matplotlib'], features: ['Data cleaning', 'EDA', 'KPIs', 'Charts', 'Business insights'], github: null, live: null, tone: 'sales' },
  { num: '09', title: 'AI TECHNICAL CONTENT KNOWLEDGE HUB', category: 'TECHNICAL WRITING', type: 'PLANNED / IN PROGRESS',  image: `${BASE_URL}images/AI-CONTENT.jpeg`, description: 'A structured knowledge hub for clear, research-oriented explainers around AI, machine learning, computer vision and data analytics.', tech: ['Research', 'Technical Writing', 'AI / ML'], features: ['AI explainers', 'ML concepts', 'Computer vision', 'Data analytics', 'Technical documentation'], github: null, live: null, tone: 'writing' },
]

export const certificates = [
  ['Advanced Data Analytics / Data Science', 'Coursera / HEC', 'Completed'],
  ['Strategic Leadership & Management', 'University of Illinois Urbana-Champaign / Coursera', 'Completed'],
  ['Foundations of Management', 'University of California, Irvine / Coursera', 'Completed'],
  ['Foundations of Project Management', 'Coursera', 'Completed'],
  ['Digital Marketing', 'Alison', 'Completed'],
  ['Advanced Data Analytics', 'Alison', 'Completed'],
  ['AI & Machine Learning Scholarship Program', 'Hunarmand Punjab', 'Learning / Project Work'],
  ['Advanced Web Development', 'NAVTTC / Adan IT Center', 'Completed'],
  ['Full Stack Development Track', 'ZeroIntern', 'Ongoing / Training'],
  ['TEFL', 'Professional Teaching Credential', 'Certified'],
]

export const stats = [
  ['7th', 'Semester'], ['3.34/4.0', 'CGPA'], ['3+', 'Years Teaching'], ['6 Months', 'AI Content Writing'], ['2 Months', 'Full Stack Track'], ['3 Years', 'web development experience'], ['3 Months', 'Web Training'], ['16+', 'Professional Learning'], ['40+', 'Portfolio Projects'],
]
