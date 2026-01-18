import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button variant="secondary" className="font-medium">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Me
            </Button>
          </div>
          
          <p className="text-sm opacity-70 text-center md:text-right">
            © 2025 Gayana Poojary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
