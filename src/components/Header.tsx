import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start lg:items-center">

          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="block text-foreground">Gayana</span>
              <span className="gold-text">Poojary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-lg"
            >
              Finance Graduate{" "}
              <span className="text-foreground font-medium">Worked on GST Filings</span>,{" "}
              <span className="text-foreground font-medium">Invoice Reconciliation & Prepared MIS Reports</span>, and{" "}
              <span className="text-foreground font-medium">Hands-On Accounting Exposure</span>.
            </motion.p>

            {/* IMAGE ON MOBILE (AFTER NAME & TAGLINE) */}
            <div className="lg:hidden flex justify-center mb-12">
              <ProfileImage />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
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
            </motion.div>
          </motion.div>

          {/* IMAGE COLUMN (DESKTOP ONLY) */}
          <div className="hidden lg:flex justify-center order-2">
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
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

/* IMAGE COMPONENT — ANIMATION SAFE */

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative
        w-56 h-56
        sm:w-64 sm:h-64
        lg:w-80 lg:h-80
        select-none
      "
    >
      {/* Subtle floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {/* Rings */}
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-glow" />
        <div className="absolute inset-6 rounded-full border border-primary/10" />
        <div className="absolute inset-10 rounded-full border border-border/50" />

        {/* Image wrapper */}
        <div
          className="
            absolute inset-10
            rounded-full
            bg-gradient-to-br from-secondary to-background
            border-2 border-primary/30
            shadow-2xl
            overflow-hidden
            pointer-events-none
          "
        >
          <img
            src={`${import.meta.env.BASE_URL}G.jpg`}
            alt="Gayana Poojary"
            className="
              w-full h-full
              object-cover
              select-none
              pointer-events-none
              transition-transform duration-300
              hover:scale-[1.03]
            "
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onKeyDown={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};


export default Header;
