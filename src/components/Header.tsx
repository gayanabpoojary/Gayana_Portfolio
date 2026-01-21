import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        {/* ✅ PROPER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE COLUMN */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Rings */}
              <div className="absolute inset-0 w-80 h-80 rounded-full border border-primary/20 animate-glow" />
              <div className="absolute inset-4 w-72 h-72 rounded-full border border-primary/10" />
              <div className="absolute inset-8 w-64 h-64 rounded-full border border-border/50" />

              {/* Image container (defines height → prevents overlap) */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-background border-2 border-primary/30 shadow-2xl m-8">
                <img
                  src={`${import.meta.env.BASE_URL}G.jpg`}
                  alt="Gayana Poojary"
                  className="absolute inset-0 w-full h-full object-cover rounded-full z-20 select-none"
                  draggable={false}
                />
              </div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-1/4 glass-card px-4 py-2 shadow-xl"
              >
                <div className="text-xs text-muted-foreground">MBA Finance</div>
                <div className="text-sm font-semibold text-foreground">CGPA 7.48</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-8 bottom-1/4 glass-card px-4 py-2 shadow-xl"
              >
                <div className="text-xs text-muted-foreground">Expertise in</div>
                <div className="text-sm font-semibold text-primary">
                  Finance & Accounting
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-foreground">Gayana</span>
                <span className="gold-text">Poojary</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 max-w-lg">
                Finance Professional focused on{" "}
                <span className="text-foreground font-medium">accuracy</span>,{" "}
                <span className="text-foreground font-medium">compliance</span>, and{" "}
                <span className="text-foreground font-medium">insight</span>.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Bengaluru, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  +91 8147499741
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  gayanabpoojary@gmail.com
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}Resume/Gayana_Poojary_Resume.pdf`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="premium-button bg-primary text-primary-foreground rounded-full px-8 py-3">
                    Download Resume
                  </button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  className="premium-button border-border/50 hover:border-primary/50 hover:bg-primary/5 rounded-full px-8"
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Experience
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
