import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERIENCE = [
  {
    company: "Amazon (via Varite)",
    location: "Bangalore",
    role: "Software Developer Engineer-II (Contract)",
    period: "2025",
    details: [
      "Architected and led the global expansion of the Seller Referral Service, evolving it from a single-market implementation into a scalable, distributed system for worldwide use.",
      "Converted a Monolithic Service into several microservices using Java and Spring Boot, leveraging Kafka for asynchronous event-driven communication to handle a 10x increase in global traffic.",
      "Enhanced a seller-facing automation script on the GST portal, resulting in a 50% increase in service adoption and a 70% reduction in processing time for adding new business locations.",
      "Integrated data-driven deal recommendation engines for major sales events resulting in a 10% increase in seller participation.",
      "Provided technical guidance and mentorship to junior developers, including code reviews and design discussions."
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Microservices"]
  },
  {
    company: "Fujitsu",
    location: "Bangalore",
    role: "Senior Software Engineer",
    period: "2023 - 2024",
    details: [
      "Engineered a high-availability network re-establishment module using Java and Spring Boot, implementing automated recovery logic that increased network reliability and achieved a 30% reduction in dropped calls.",
      "Developed a seamless handoff feature utilizing Spring State Machine and Reactive Programming to ensure uninterrupted connectivity for users during high-velocity transitions between network nodes.",
      "Optimized system resilience by implementing Resilience4j for circuit breaking and retry mechanisms, ensuring the application gracefully handled downstream service failures.",
      "Authored comprehensive technical design specifications (HLD/LLD) and API documentation using Swagger/OpenAPI, facilitating team collaboration and long-term maintainability of core Java components."
    ],
    tech: ["Java", "Spring Boot", "Spring State Machine", "Reactive Programming", "Resilience4j"]
  },
  {
    company: "Radisys",
    location: "Gurgaon",
    role: "Software Engineer",
    period: "2021 - 2023",
    details: [
      "Architected a scalable network resource allocation service using Java and Kafka, effectively reducing end-to-end latency for telecom subscribers through asynchronous processing.",
      "Improved system throughput and stability by conducting deep-dive performance tuning; utilized VisualVM and JProfiler to resolve 100+ critical bottlenecks and memory leaks within the JVM heap.",
      "Refactored legacy logic into clean, object-oriented Java code, leveraging Design Patterns (Strategy, Observer) to reduce resource consumption and improve code extensibility.",
      "Streamlined the CI/CD pipeline by writing automated unit and integration tests using JUnit and Mockito, ensuring 90%+ code coverage for mission-critical telecom modules."
    ],
    tech: ["Java", "Kafka", "JUnit", "Mockito", "VisualVM", "JProfiler"]
  }
];

const SKILLS = [
  { category: "Backend", items: ["Java (Spring Boot)", "Python", "SQL"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "DynamoDB"] },
  { category: "Tools/Testing", items: ["JUnit", "Mockito", "Selenium", "Git", "GDB"] },
  { category: "Concepts", items: ["System Design", "Object-Oriented Design", "Data Structures", "Algorithms", "Multithreading", "Agile", "REST"] }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'research', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-transparent min-h-screen text-slate-400 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT SIDE - STICKY OUTLINE */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter text-slate-200 sm:text-6xl"
              >
                Manish <span className="accent-gradient">Wadhwani.</span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-xl font-light tracking-tight text-slate-300 sm:text-2xl"
              >
                Software Engineer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 max-w-xs leading-relaxed font-light text-slate-400"
              >
                I build scalable, high-availability backend systems and <span className="text-slate-200 italic serif">architectures</span>.
              </motion.p>

              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="nav hidden lg:block mt-16"
              >
                <ul className="w-max">
                  {['about', 'experience', 'education', 'research', 'skills'].map((section) => (
                    <li key={section}>
                      <button 
                        onClick={() => scrollToSection(section)}
                        className={`group flex items-center py-3 active:outline-none focus-visible:outline-none focus:outline-none ${activeSection === section ? 'text-sky-400' : 'text-slate-500 hover:text-sky-400'}`}
                      >
                        <span className={`nav-indicator mr-4 h-px transition-all duration-300 ease-out ${activeSection === section ? 'w-16 bg-sky-400' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-sky-400'}`}></span>
                        <span className={`nav-text text-xs uppercase tracking-widest transition-all duration-300 ${activeSection === section ? 'font-bold text-sky-400' : 'font-semibold'}`}>
                          {section}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </div>

            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center gap-5 text-slate-400"
            >
              <li>
                <a href="https://github.com/manishwadhwani2" target="_blank" rel="noreferrer" className="hover:text-slate-200 hover:scale-110 transition-all">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manish-wadhwani-607bb6160/" target="_blank" rel="noreferrer" className="hover:text-slate-200 hover:scale-110 transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="mailto:manishwadhwani1998@gmail.com" className="hover:text-slate-200 hover:scale-110 transition-all">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
              </li>
            </motion.ul>
          </header>

          {/* RIGHT SIDE - SCROLLING CONTENT */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT */}
            <motion.section 
              id="about" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="small-caps lg:sr-only">About</h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed font-light text-slate-300">
                  I am a software engineer driven by the challenge of building scalable, user-centric applications. With a strong foundation in data structures and algorithms and a specialized focus on the Java/Spring Boot ecosystem, I enjoy writing the complex backend logic.
                </p>
                <div className="flex flex-col gap-3 text-sm mt-6 pt-4 border-t border-slate-800/80">
                   <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-400" /> <span>Bangalore, India</span></div>
                   <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-400" /> <a href="mailto:manishwadhwani1998@gmail.com" className="text-slate-200 hover:text-sky-400 transition-colors">manishwadhwani1998@gmail.com</a></div>
                   <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-400" /> <span>+91 9870652629</span></div>
                </div>
              </div>
            </motion.section>

            {/* EXPERIENCE */}
            <motion.section 
              id="experience" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="small-caps lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {EXPERIENCE.map((exp, index) => (
                    <li key={index} className="mb-12 transition-all hover:!opacity-100 group-hover/list:opacity-50">
                      <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:glass-card lg:p-6 lg:rounded-2xl transition-all pl-6 border-l border-slate-800 lg:border-transparent lg:hover:border-slate-800 ml-2 lg:ml-0">
                        <div className="absolute left-[-1px] top-6 w-[1px] h-4 bg-sky-400 opacity-0 lg:group-hover:opacity-100 transition-opacity hidden lg:block"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          {exp.period}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-white">
                            <div>
                              <div className="inline-flex items-baseline font-semibold leading-tight text-white hover:text-sky-400 focus-visible:text-sky-400 group/link text-base">
                                <span>{exp.role} &middot; {exp.company}</span>
                              </div>
                            </div>
                            <div className="text-slate-500 text-sm mt-1 mb-2 flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {exp.location}
                            </div>
                          </h3>
                          <ul className="mt-2 text-sm leading-relaxed font-light space-y-2 list-disc list-outside ml-4 text-slate-400">
                            {exp.details.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                            {exp.tech.map((t) => (
                              <li key={t} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full glass-card px-3 py-1.5 text-[10px] uppercase font-medium tracking-wide text-slate-200">
                                  {t}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.section>

            {/* EDUCATION */}
            <motion.section 
              id="education" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="small-caps lg:sr-only">Education</h2>
              </div>
              <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 hover:glass-card p-4 lg:p-6 rounded-2xl transition-all pl-6 border-l border-slate-800 lg:border-transparent lg:hover:border-slate-800 ml-2 lg:ml-0">
                <div className="absolute left-[-1px] top-4 lg:top-6 w-[1px] h-6 lg:h-4 bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2017 - 2021
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-white">
                    <div>
                      <div className="inline-flex items-baseline font-medium leading-tight text-white hover:text-sky-400 text-base">
                        <span>Delhi Technological University</span>
                      </div>
                    </div>
                  </h3>
                  <div className="text-slate-400 text-sm mt-1">Bachelor of Technology (Mathematics and Computing)</div>
                  <div className="text-slate-500 text-sm mt-1">7.53 CGPA out of 10</div>
                  <p className="mt-4 text-sm leading-relaxed font-light text-slate-400">
                    <span className="font-semibold text-slate-300">Coursework:</span> Object-Oriented Programming, Databases, Discrete Mathematics, Data Structures and Algorithms, Operating Systems, Computer Networks, Machine Learning, Data Mining
                  </p>
                  
                  <div className="mt-6 border-t border-slate-800/50 pt-4">
                     <h4 className="text-sm font-semibold text-white mb-2">Achievements</h4>
                     <ul className="text-sm space-y-1 text-slate-400">
                        <li className="flex items-start gap-2"><span className="text-sky-400 font-bold">&bull;</span> Secured 6027 rank in JEE Main</li>
                        <li className="flex items-start gap-2"><span className="text-sky-400 font-bold">&bull;</span> Secured 8672 rank in JEE Advanced</li>
                     </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* RESEARCH */}
            <motion.section 
              id="research" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="small-caps lg:sr-only">Research Paper</h2>
              </div>
              <a href="https://ieeexplore.ieee.org/document/9418374" target="_blank" rel="noreferrer" className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 hover:glass-card p-4 lg:p-6 rounded-2xl transition-all pl-6 border-l border-slate-800 lg:border-transparent lg:hover:border-slate-800 ml-2 lg:ml-0 min-h-[140px]">
                <div className="absolute left-[-1px] top-4 lg:top-6 w-[1px] h-6 lg:h-4 bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2021
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-white">
                    <div className="inline-flex items-baseline font-medium leading-tight text-white group-hover:text-sky-400 text-base">
                      <span className="flex items-center gap-2">
                        Expert Based Recommendation System
                        <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </h3>
                  <div className="text-slate-500 text-sm mt-1 font-semibold">IEEE Publication</div>
                  <p className="mt-2 text-sm leading-relaxed font-light text-slate-400">
                    Using Community Detection in Online Music Streaming Service. Researched and developed a system to detect communities of music listeners and to find experts within those communities to provide accurate and personal recommendations to other users on a music streaming service.
                  </p>
                </div>
              </a>
            </motion.section>

            {/* SKILLS */}
            <motion.section 
              id="skills" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050505]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="small-caps lg:sr-only">Skills</h2>
              </div>
              <div className="space-y-8">
                {SKILLS.map((skillGroup, index) => (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 lg:p-6 hover:glass-card rounded-2xl transition-all pl-6 border-l border-slate-800 lg:border-transparent lg:hover:border-slate-800 ml-2 lg:ml-0 group relative">
                    <div className="absolute left-[-1px] top-4 lg:top-6 w-[1px] h-6 lg:h-4 bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"></div>
                    <div className="text-white font-semibold sm:col-span-1 border-b sm:border-0 border-slate-800 pb-2 sm:pb-0">{skillGroup.category}</div>
                    <div className="sm:col-span-3 flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span key={item} className="inline-flex items-center rounded-full glass-card px-3 py-1.5 text-[10px] uppercase font-medium tracking-wide text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </main>
        </div>
      </div>
    </div>
  );
}
