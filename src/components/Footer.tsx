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

           <a
    href="mailto:gayanabpoojary@gmail.com?subject=Opportunity%20Discussion&body=Hi%20Gayana,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20like%20to%20connect.%0D%0A%0D%0ARegards,"
    aria-label="Send email to Gayana Poojary"
  >
    <Button
      variant="outline"
      size="lg"
      className="premium-button border-border/50 hover:border-primary/50 hover:bg-primary/5 rounded-full px-8"
    >
      <Mail className="h-4 w-4 mr-2" />
      Get in Touch
    </Button>
  </a>
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
            <span>+918147499741</span>
          </div>
          <div className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="h-4 w-4 text-primary" />
            <span>gayanabpoojary@gmail.com</span>
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
            href="https://www.linkedin.com/in/gayana-poojary-5112152b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </a>
          <a
            href="mailto:gayanabpoojary@gmail.com"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground
">
          <p>© {currentYear} Gayana Poojary. All rights reserved.</p>
          {/* <p className="flex items-center gap-1">
            Built with <span className="text-primary">precision</span> and{" "}
            <span className="text-primary">purpose</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;