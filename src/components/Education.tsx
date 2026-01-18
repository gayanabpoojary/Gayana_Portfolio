import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="container-section border-b border-divider">
      <h2 className="section-heading">Education</h2>
      
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent rounded-lg">
            <GraduationCap className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-heading mb-1">
              Master of Business Administration (Finance)
            </h3>
            <p className="text-body mb-2">
              Mangalore Institute of Technology and Engineering
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded font-medium">
                CGPA: 7.41
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Feb 2024 – Nov 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
