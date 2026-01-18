import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Accent line */}
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="section-heading">About</h2>
              <p className="text-muted-foreground text-lg">
                Building financial clarity through precision and insight
              </p>
            </div>

            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light"
              >
                MBA Finance graduate with{" "}
                <span className="text-primary font-medium">hands-on experience</span> supporting 
                day-to-day accounting operations including{" "}
                <span className="text-foreground font-medium">Tally ERP9 entries</span>,{" "}
                <span className="text-foreground font-medium">GST reconciliation</span>,{" "}
                <span className="text-foreground font-medium">bank reconciliation</span>, 
                MIS reporting, and Excel-based cost analysis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {["Accounts Executive", "Finance Executive", "MBA Finance"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;