import './styles/globals.css';
// SVG Icons as components
const BrainIcon = () => (
<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <image href="/data-science.png" height="16" width="16" />
</svg>
);

const MailIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
);

const PhoneIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
);

const LinkedinIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
);

const GithubIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
);

const MapPinIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
);

const CalendarIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
);

const ExternalLinkIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
);

const CodeIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>
);

const DatabaseIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
  <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
</svg>
);

const BarChart3Icon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg>
);

// Custom components
const Badge = ({ children, variant = "secondary", className = "" }) => (
  <span className={`badge ${variant === "secondary" ? "badge-secondary" : "badge-outline"} ${className}`}>
    {children}
  </span>
);

const Button = ({ children, variant = "default", size = "", className = "", ...props }) => (
  <button className={`button button-${variant} ${size ? `button-${size}` : ""} ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`card-title ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`card-description ${className}`}>
    {children}
  </p>
);

const Separator = ({ orientation = "horizontal", className = "" }) => (
  <div className={`${orientation === "vertical" ? "separator-vertical" : ""} ${className}`} />
);

export default function App() {

  const skills = {
    "Languages & Libraries": ["Python", "JavaScript", "ReactJS", "HTML", "CSS", "Flask", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Scikit-learn"],
    "AI & Data Science": ["Machine Learning", "Prompt Engineering", "Deep Learning", "Attention Mechanisms", "Language Models (LLMOps)", "Autoencoders", "Computer Vision (YOLO)", "Natural Language Processing", "Time Series Modeling (LSTM)"],
    "Tools & Platforms": ["MySQL", "Power BI", "Tableau", "Streamlit", "Git", "KNIME", "AWS", "Google Cloud Platform(GCP)", "Robotic Process Automation(RPA)"],
    "Core": ["Data Structures & Algorithms", "API Integration(RESTful APIs)", "Data Visualization", "Data mining", "Big Data"]
  };

  const experience = [
    {
      title: "Data Science Intern",
      company: "Infiswift Technologies",
      location: "Pune, India",
      period: "June 2023 – July 2023",
      achievements: [
        "• Created and preprocessed a large weather dataset using Power BI, which enhanced data quality for AQI prediction.",
        "• Trained and evaluated multiple machine learning models and performed hyperparameter tuning with Randomized Search, achieving best accuracy of 95% for RMSE.",
        "• Implemented YOLO (You Only Look Once) for real-time object detection in images and videos."
      ]
    },
    {
      title: "Web developer",
      company: "Sacred Seva Foundation(NGO)",
      location: "Mumbai, India",
      period: "December 2023 – March 2024",
      achievements: [
        "• Created a functional website for an NGO that provides information on their past needs, projects, and objectives, helping to raise funds and connect with the community.",
        "• Added interactive features like volunteer sign-up forms, making it easier for people to get involved and support the NGO's work.",
        "• Designed the website to be responsive, user-friendly, and easily navigable, irrespective of the device they use."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "CoEZET, IIT Madras",
      location: "Chennai, India", 
      period: "June 2024 – July 2024",
      achievements: [
        "• Analyzed 15 months of toll plaza traffic data across India, eliminating outliers and identifying top N corridors for introducing zero-emission trucks and KNIME.",
        "• Conducted statistical analysis on big data, eliminating data duplication, and used cross join to filter plazas based on approximate distances.",
        "• Visualized traffic data to display the distribution of various vehicle categories with Power BI."
      ]
    }
  ];

  const projects = [
    {
      title: "Early Detection of Alzheimer's using Deep Learning",
      period: "August 2024- March 2025",
      description: "• Utilized brain image and biomarker data from ADNI dataset. Preprocessed them and trained DL models for diagnostics. \n • Used Feature Extraction such as ResNet and autoencoders. Built a fusion model with custom CNN for MRI images combined with MLP for biomarkers.\n• Implemented LSTM for progression prediction with Attention mechanism. Used Streamlit for front-end UI.",
      technologies: ["ResNet", "MLP (Multi-Layer Perceptron)", "Autoencoders", "Streamlit", "CNN (Convolutional Neural Nets)"],
      link: "https://drive.google.com/file/d/1AgF2NKZiPs1RHWf8h3YvC16WyKJr3z4y/view?usp=drive_link"
    },
    {
      title: "LLM-Based Dynamic Query Portal for SQL Databases", 
      period: "April 2025- May 2025",
      description: "• Developed a portal enabling admins to query databases using natural language, eliminating the need for manual SQL writing.\n • Integrated Claude with REST API backend using LLMOps principles. Employed prompt engineering to improve response and query accuracy.\n • Experimented with Gemini APIs, Hugging Face models, and Mistral, comparing their performance for backend inference. \n • Enabled large-event administrators to flexibly retrieve insights such as room allocations and registration summaries through prompts.",
      technologies: ["LLMs", "Prompt Engineering", "MySQL", "Restful APIs" ],
      link: "https://query-ssr.netlify.app/",
      sourceCodeLink: ' https://github.com/Parami-Kris/render-backend/'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero" >
        <div className='sect'style={{backgroundImage:"url('section1.jpg')"}}></div>
        <div className="heroc container-md text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="fontx mb-4">
              <span style={{ marginLeft: '0.5rem' }}>AI & Deep Learning Enthusiast</span>
            </Badge>
          </div>
          <h4 className="mb-6">Hey There!👋</h4>
          <p className="text-m text-muted mb-8 container-sm leading-relaxed"  style={{color: 'rgb(221 224 182 / 69%)', fontWeight:'bold',textShadow:'none'}}>
            I'm <span className="sketch-highlight"> Parami </span>. I'm Passionate about Python, Data Science, Web Dev, GenAI & Language Models.
            I love building things that think. From dynamic full-stack web apps to LLM-powered apps to deep learning models, I enjoy solving complex problems with clean code and creativity.
            I'm currently exploring open-source LLMs & building smart, human-centric AI tools.
          </p>
        </div>
      </section>

        
        {/* About Section */}
        <section>
          <div className='sect'style={{backgroundImage:"url('section2.jpg')"}}></div>
          <h4 className="mb-8 text-center">About Me</h4>
          <Card className="me container-md" >
            <CardContent className='bout'>
              <p className="text-m leading-relaxed text-center" style={{textAlign:'justify'}}>
                 &rarr; I'm a recent B.Tech graduate in Artificial Intelligence and Data Science from Easwari Engineering College, with a strong foundation in core engineering and modern tech stacks. <br></br><br></br>
                 &rarr; My academic journey was shaped by hands-on learning across Python, Machine Learning, Deep Learning, and Web Development. <br></br><br></br>  &rarr; I've built projects like Early Alzheimer’s detection model
                using deep learning and developed fullstack webpages like <a href='https://sacredseva.org/' id='pg'>sacredseva.org</a> and <a href='https://query-ssr.netlify.app/'id='pg'>query-ssr.netlify</a>  blending creativity with code to solve real-world problems.<br></br><br></br>
                &rarr; I’m particularly drawn to building responsive, functional apps that make AI and data tools more accessible. I enjoy experimenting with GenAI technologies, exploring LLMs like Mistral and
                HuggingFace Transformers, and integrating APIs like Claude and Gemini to create powerful, user-friendly tools. <br></br><br></br>&rarr; When I’m not coding, I’m often exploring new ideas in AI, sharpening my 
                problem-solving skills through DSA, or collaborating on innovative tech projects.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
           <div className='sect'style={{backgroundImage:"url('section3.jpg')"}}></div>
            <h4 className="mb-12 text-center" >Skills & Expertise</h4>
            <div className="flex justify-center px-4 md:px-12 lg:px-24">
             <div className="s3g grid grid-cols-1 md:grid-cols-2 gap-8"id='grid-section' >
            {Object.entries(skills).map(([category, skillList]) => {
              const icons = {
                "Languages & Libraries": CodeIcon,
                "AI & Data Science": BrainIcon,
                "Tools & Platforms": DatabaseIcon,
                "Core": BarChart3Icon
              };
              const Icon = icons[category];
              
              return (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon />
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );  
            })}
          </div>
        </div>
        </section>

        {/* Experience Section style={{position: 'relative', width: '60%',left: '20%', }}*/}
        <section>
          <div className='s4 sect'></div>
          <h4 className="mb-12 text-center">Work Experience</h4>
          <div className="space-y-8" id="workexp"  >
            {experience.map((exp, index) => (
              <Card key={index}  >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span>{exp.company}</span>
                        <Separator orientation="vertical" />
                        <span className="flex items-center gap-1">
                          <MapPinIcon />
                          <span>{exp.location}</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <CalendarIcon />
                      <span>{exp.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" style={{textAlign:'justify'}}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="bullet-point"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className='s5 sect'style={{backgroundImage:"url('section5.jpg')"}}></div>
          <h4 className="mb-12 text-center">Academic Projects</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" id='grid-section'style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1rem" }}>
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="leading-tight">{project.title}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1 whitespace-nowrap">
                      <CalendarIcon />
                      <span>{project.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p style={{whiteSpace: "pre-line" ,textAlign:'justify',color:'rgb(166 168 140 / 61%)', lineHeight: "1.8"}} className="text-muted leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2" style={project.title.includes("Alzheimer") ? { marginTop: "1.75cm" } : {}}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  {project.title.includes("LLM") ? (<div className="flex gap-2" style={{ marginTop: "1.3cm" }}>  
                     <Button onClick={() => window.open(project.link, "_blank")} variant="outline" size="sm" className="w-half">
                      <ExternalLinkIcon />
                      <span className="ml-2">View Project</span>
                      </Button>
                      <Button onClick={() => window.open(project.sourceCodeLink, "_blank")} variant="outline" size="sm" className="w-half">
                      <CodeIcon />
                      <span className="ml-2">Source Code</span>
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => window.open(project.link, "_blank")} style={{...(project.title.includes("Alzheimer") )}} variant="outline" size="sm" className="w-full">
                    <ExternalLinkIcon />
                    <span className="ml-2">View Project</span>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className='s6 sect'style={{backgroundImage:"url('section6.jpg')"}}></div>
          <h4 className="mb-12 text-center">Education</h4>
          <Card className="edu container-sm">
            <CardHeader>
              <CardTitle className='flex justify-between items-start'>Bachelor of Technology<div><Badge className='date' variant="outline">August 2021 - March 2025</Badge></div></CardTitle>
              <CardDescription>Artificial Intelligence and Data Science</CardDescription> 
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Easwari Engineering College, Anna University</span>
                <div className="flex gap-2 text-sm">
                <span className="grade" style={{color: 'rgba(170, 161, 161, 0.884'}}>GPA:</span>
                <span className="score">8.35/10</span>
                </div>
              </div>
              </CardContent>          
                <CardHeader>
                <CardTitle>12th grade</CardTitle>
              <CardDescription>Computer Science with Physics, Chemistry, Math</CardDescription>
                </CardHeader>
                 <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                <span>NSN Matriculation Higher Secondary </span>
                <div className="flex gap-2 text-sm">
                  <span className="grade" style={{color: 'rgba(170, 161, 161, 0.884'}}>Percentage:</span>
                  <span className="score">91.3%</span>
              </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <div className='s7 sect'style={{backgroundImage:"url('section7.jpg')"}}></div>
          <h4 className="mb-12 text-center">Let's Connect !</h4>
          <Card className="cnct" >
            <CardContent className="p-8 text-center space-y-6">
              <p className="text-m text-muted">
                Interested in collaborating on AI/ ML/ Web Dev projects or discussing the latest in GenAI?
                I'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button style={{background: 'none',border: 'none', color: 'inherit',cursor: 'text',userSelect: 'text'}} variant="outline" size='m'>
                  <MailIcon />
                  <span style={{ marginLeft: '0.5rem' }}>paramikris@gmail.com</span>
                </Button>
                <Button style={{background: 'none',border: 'none', color: 'inherit',cursor: 'text',userSelect: 'text'}} variant="outline" size='m'>
                  <PhoneIcon />
                  <span style={{ marginLeft: '0.2rem' }}>+91 9940084228</span>
                </Button>
                <Button onClick={() =>  window.open("https://www.linkedin.com/in/parami-kris/", "_blank")} variant="ghost" size="m" >
                  <LinkedinIcon />
                  <span style={{ marginLeft: '0.5rem' }}>LinkedIn</span>
                </Button>
                <Button variant="ghost" onClick={() =>  window.open('https://github.com/Parami-Kris/', "_blank")} size='m'>
                  <GithubIcon />
                  <span style={{ marginLeft: '0.5rem' }}>GitHub</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      {/* Footer 
      <footer className="border-t py-8 px-4 text-center text-muted">
        <p>&copy; 2025 Parami Krishnamurthy. Passionate about AI innovation and problem-solving.</p>
      </footer>*/}
    </div>
  );
}
