import { motion } from "framer-motion";
import { Calculator, LineChart, FileSpreadsheet, Shield, TrendingUp, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Accounting & Compliance",
      icon: Calculator,
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      skills: [
        { name: "Tally ERP9", detail: "Ledger, Voucher, Journal" },
        { name: "Accounts Payable & Receivable", detail: null },
        { name: "Bank Reconciliation", detail: null },
        { name: "Invoice Processing", detail: null },
        { name: "GST Filing", detail: "GSTR-1, GSTR-3B" },
        { name: "GST Reconciliation", detail: "2A/2B" },
        { name: "TDS Compliance", detail: null },
        { name: "Month-End Closing", detail: null },
        { name: "Audit Support", detail: null },
        { name: "Financial Statements", detail: null },
      ],
    },
    {
      title: "Reporting & Data Analysis",
      icon: LineChart,
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30",
      skills: [
        { name: "Advanced Excel", detail: "VLOOKUP, Pivot, SUMIFS" },
        { name: "MIS Reports", detail: null },
        { name: "Costing Sheets", detail: null },
        { name: "Budget vs Actual Analysis", detail: null },
        { name: "Variance Analysis", detail: null },
        { name: "Financial Data Analysis", detail: null },
      ],
    },
  ];

  const highlights = [
    { icon: FileSpreadsheet, label: "Excel Expert", value: "Advanced" },
    { icon: Shield, label: "GST Compliant", value: "100%" },
    { icon: TrendingUp, label: "Cost Reduction", value: "25%" },
    { icon: Database, label: "Records Monthly", value: "50+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="container-section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">Core Expertise</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Specialized skills in accounting, compliance, and financial analysis
          </p>
        </div>

        {/* Highlight Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <item.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className={`glass-card p-8 ${category.borderColor} hover:shadow-xl hover:shadow-primary/5 transition-all duration-500`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    className="skill-tag group cursor-default"
                  >
                    <span>{skill.name}</span>
                    {skill.detail && (
                      <span className="text-muted-foreground text-xs ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        ({skill.detail})
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;