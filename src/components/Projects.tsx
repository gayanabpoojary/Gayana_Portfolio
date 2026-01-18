import { motion } from "framer-motion";
import { ArrowUpRight, Users, TrendingDown, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Engagement & Brand Loyalty Analysis",
      description: "Analyzed survey data to identify retention-related insights using financial modeling",
      icon: Users,
      metrics: ["120+ Respondents", "Spending Patterns", "Retention Insights"],
      outcomes: [
        "Modeled customer spending patterns in Excel to support data-backed retention and pricing insights",
      ],
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Financial Literacy Survey Analysis",
      description: "Led team analysis improving data accuracy and reporting clarity significantly",
      icon: BarChart3,
      metrics: ["Team Lead", "40% Improvement", "120+ Records"],
      outcomes: [
        "Generated summarized financial awareness reports using Excel for youth survey data",
      ],
      color: "from-primary/20 to-amber-500/10",
    },
    {
      title: "Corrugation Manufacturing Cost Optimization",
      description: "Examined cost components across production stages to drive major cost reduction",
      icon: TrendingDown,
      metrics: ["25% Cost Reduction", "Variance Analysis", "Process Improvement"],
      outcomes: [
        "Compared budgeted vs actual costs to identify variance drivers and recommend improvements",
      ],
      color: "from-emerald-500/20 to-green-500/10",
    },
  ];

  return (
    <section className="container-section relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Impactful projects showcasing analytical and financial expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card h-full p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                    <project.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, mIndex) => (
                    <span key={mIndex} className="metric-badge">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="pt-6 border-t border-border/50">
                  {project.outcomes.map((outcome, oIndex) => (
                    <p key={oIndex} className="text-sm text-foreground/70 leading-relaxed">
                      {outcome}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;