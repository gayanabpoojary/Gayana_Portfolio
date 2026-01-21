import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading">Academic foundation in finance and business</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Master of Business Administration
                </h3>
                <p className="text-xl text-primary font-medium mb-3">
                  Finance Specialization
                </p>
                <p className="text-muted-foreground mb-4">
                  Mangalore Institute of Technology and Engineering
                </p>

                {/* Meta badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">CGPA: 7.48</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Feb 2024 – Nov 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
          
          {/* Spacer between education cards */}
          <div className="h-8 md:h-12"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor Of Commerce
                </h3>
                <p className="text-xl text-primary font-medium mb-3">
                  Commerce Specialization
                </p>
                <p className="text-muted-foreground mb-4">
                  Poorna Prajna College Udupi
                </p>

                {/* Meta badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">CGPA: 6.84</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Jun 2020 – Aug 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
  
      </div>
    </section>
  );
};

export default Education;