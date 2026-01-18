import { Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
          Gayana Poojary
        </h1>
        <p className="text-xl md:text-2xl font-medium opacity-90 mb-6">
          Accounts Executive | Finance Executive
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm md:text-base opacity-85 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>gayana.poojary@email.com</span>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="lg"
          className="font-medium"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;
