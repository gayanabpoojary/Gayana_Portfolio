import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Let's </span>
            <span className="gold-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Open to Accounts Executive and Finance Executive opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="premium-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="premium-button border-border/50 hover:border-primary/50 hover:bg-primary/5 rounded-full px-8"
          >
            <Mail className="h-4 w-4 mr-2" />
            Get in Touch
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-12"
        >
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="h-4 w-4 text-primary" />
            <span>gayana.poojary@email.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="#"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Gayana Poojary. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary">precision</span> and{" "}
            <span className="text-primary">purpose</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;