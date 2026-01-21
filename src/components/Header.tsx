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
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start lg:items-center">

          {/* LEFT COLUMN (TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-foreground">Gayana</span>
              <span className="gold-text">Poojary</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-lg">
              Finance Professional focused on{" "}
              <span className="text-foreground font-medium">accuracy</span>,{" "}
              <span className="text-foreground font-medium">compliance</span>, and{" "}
              <span className="text-foreground font-medium">insight</span>.
            </p>

            {/* IMAGE FOR MOBILE (AFTER NAME & TAGLINE) */}
            <div className="flex justify-center mb-10 lg:hidden">
              <ProfileImage />
            </div>

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

          {/* RIGHT COLUMN (IMAGE – DESKTOP ONLY) */}
          <div className="order-2 hidden lg:flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
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

/* 🔒 ISOLATED IMAGE COMPONENT (prevents layout bugs) */
const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-64 h-64"
    >
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-glow" />
      <div className="absolute inset-4 rounded-full border border-primary/10" />
      <div className="absolute inset-8 rounded-full border border-border/50" />

      {/* Image */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-secondary to-background border-2 border-primary/30 shadow-2xl overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}G.jpg`}
          alt="Gayana Poojary"
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

export default Header;
