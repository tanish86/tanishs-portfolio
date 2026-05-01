import { motion } from 'framer-motion'
import { GitBranch, Mail, ExternalLink, Code2, Database, BrainCircuit, LineChart } from 'lucide-react'

// Reusable fade-in wrapper
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function HTMLContent() {
  return (
    <div className="text-text-main">
      {/* 1. Hero Section (Page 1) */}
      <section className="h-screen flex flex-col justify-center px-[10vw]">
        <FadeIn>
          <p className="text-accent text-lg font-medium tracking-wider mb-4 uppercase">Hello! I'm</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
            TANISH <br /> TANEJA
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-3xl text-text-muted max-w-2xl font-light leading-relaxed">
            A B.Tech CSE (AI & ML) student with strong foundations in machine learning and data-driven problem solving.
          </h2>
        </FadeIn>
      </section>

      {/* 2. Skills Section (Page 2) */}
      <section className="min-h-screen flex flex-col justify-center px-[10vw] py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-white">Technical Arsenal</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {[
            { title: "Programming", skills: "Python, SQL", icon: <Code2 size={24} /> },
            { title: "Machine Learning", skills: "XGBoost, Rec. Systems, Model Eval", icon: <BrainCircuit size={24} /> },
            { title: "Deep Learning", skills: "PyTorch (Basics)", icon: <BrainCircuit size={24} /> },
            { title: "Mathematics", skills: "Linear Algebra, Probability, Diff. Equations", icon: <LineChart size={24} /> },
            { title: "Data & Analytics", skills: "Power BI, A/B Testing, Pandas", icon: <Database size={24} /> },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-primary-light/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-text-muted">{item.skills}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Experience Section (Page 3) */}
      <section className="min-h-screen flex flex-col justify-center px-[10vw] py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-white">Experience</h2>
        </FadeIn>
        <div className="max-w-3xl space-y-12 border-l-2 border-white/10 pl-8 ml-4">
          <FadeIn>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-primary"></div>
              <h3 className="text-2xl font-bold text-white">Software Trainee</h3>
              <p className="text-accent font-medium mb-4">Espire Infolabs, Faridabad | Jun 2025 - Aug 2025</p>
              <ul className="list-disc list-outside ml-5 text-text-muted space-y-2">
                <li>Resolved 10+ bugs in Python applications, improving stability.</li>
                <li>Collaborated to optimize execution time by ~15%.</li>
                <li>Assisted in AI integration within Power BI for predictive dashboards.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-primary"></div>
              <h3 className="text-2xl font-bold text-white">Intern Teacher</h3>
              <p className="text-accent font-medium mb-4">Khushi Ek Ehsaas, Faridabad | Jul 2025</p>
              <ul className="list-disc list-outside ml-5 text-text-muted space-y-2">
                <li>Taught computer fundamentals to 30-35 students.</li>
                <li>Increased student participation by ~25% through interactive methods.</li>
                <li>Introduced AI concepts via TSP and problem-solving games.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-primary"></div>
              <h3 className="text-2xl font-bold text-white">Small Business Owner</h3>
              <p className="text-accent font-medium mb-4">Self-Employed | Dec 2025 - Jan 2026</p>
              <ul className="list-disc list-outside ml-5 text-text-muted space-y-2">
                <li>Achieved ~20% profit margins by optimizing pricing strategies.</li>
                <li>Completed 30+ sales transactions maintaining customer engagement.</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Projects Section (Page 4) */}
      <section className="min-h-screen flex flex-col justify-center px-[10vw] py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-white">Selected Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          {[
            {
              title: "Chronic Kidney Disease Risk Analysis",
              tech: "Python, XGBoost, Streamlit",
              desc: "Machine learning model achieving 92% accuracy. Improved ROC-AUC score through feature engineering. Deployed via Streamlit."
            },
            {
              title: "AI Chatbot for Document Analysis",
              tech: "OpenLLM, LLaMA, Python",
              desc: "Processed 50+ documents. Implemented wrapper algorithm in LLaMA to optimize extraction. Extracted key insights from PDFs."
            },
            {
              title: "Movie Recommendation System",
              tech: "Matrix Factorization, SQL",
              desc: "Built collaborative & content-based filtering models. Improved accuracy through feature engineering and used SQL for efficient querying."
            },
            {
              title: "Numerical Methods for Differential Equations",
              tech: "Python, NumPy",
              desc: "Solved ODEs using Euler and Runge-Kutta methods. Visualized results using plots and optimized computations using NumPy."
            }
          ].map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group bg-primary-light/30 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-primary-light/60 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Code2 size={24} />
                  </div>
                  <ExternalLink size={20} className="text-white/30 group-hover:text-accent transition-colors cursor-pointer" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-accent text-sm font-mono mb-4">{project.tech}</p>
                <p className="text-text-muted leading-relaxed">{project.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Contact Section (Page 5) */}
      <section className="h-[80vh] flex flex-col items-center justify-center px-[10vw] text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Let's Connect</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl text-text-muted max-w-2xl mb-12">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex gap-6">
            <a href="mailto:tanishtaneja0714@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-teal-400 transition-colors">
              <Mail size={20} />
              Say Hello
            </a>
            <a href="https://github.com/tanish86" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              <GitBranch size={20} />
              GitHub
            </a>
          </div>
        </FadeIn>
        
        <div className="mt-auto pb-8 text-sm text-text-muted pt-20">
          <p>Designed & Built by Tanish Taneja</p>
        </div>
      </section>
    </div>
  )
}
