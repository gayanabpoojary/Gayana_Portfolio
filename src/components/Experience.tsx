import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Udaya Group of Industry",
      role: "Marketing Intern (Finance Operations Support)",
      duration: "Nov 2024 – Feb 2025",
      location: "Manipal, Udupi",
      achievements: [
        {
          text: "Streamlined Excel-based costing sheets, significantly reducing manual documentation errors",
          metric: "Error Reduction",
        },
        {
          text: "Assessed marketing spend and ROI data to improve budget control and reduce variance",
          metric: "Budget Control",
        },
        {
          text: "Prepared and verified expense records monthly to support accurate posting in Tally ERP9",
          metric: "50+ Records",
        },
        {
          text: "Supported GST reconciliation by matching purchase invoices with GSTR-2A/2B data",
          metric: "100+ Invoices",
        },
        {
          text: "Compiled Excel-based MIS reports for expense tracking, budget monitoring, and variance analysis",
          metric: "MIS Reports",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="container-section relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Professional journey in finance and accounting operations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'} pl-20 md:pl-0`}>
                <div className="glass-card p-8 hover:border-primary/30 transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary/70" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * achIndex, duration: 0.4 }}
                        className="flex gap-3 group/item"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary/50 flex-shrink-0 mt-0.5 group-hover/item:text-primary transition-colors" />
                        <div className="flex-1">
                          <p className="text-foreground/80 leading-relaxed">{achievement.text}</p>
                          <span className="metric-badge mt-2">{achievement.metric}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;