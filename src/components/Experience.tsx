import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Streamlined Excel-based costing sheets, significantly reducing manual documentation errors across marketing expense records.",
    "Assessed marketing spend and ROI data to improve budget control and reduce variance across campaigns.",
    "Prepared and verified 50+ expense records monthly to support accurate posting in Tally ERP9.",
    "Supported GST reconciliation by matching 100+ purchase invoices with GSTR-2A/2B data.",
    "Compiled Excel-based MIS reports for expense tracking, budget monitoring, and variance analysis.",
  ];

  return (
    <section className="container-section border-b border-divider">
      <h2 className="section-heading">Experience</h2>
      
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-heading mb-1">
              Udaya Group of Industry
            </h3>
            <p className="text-secondary font-medium">
              Marketing Intern (Finance Operations Support)
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-2 md:mt-0 text-sm text-muted-foreground md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <Calendar className="h-4 w-4" />
              <span>Nov 2024 – Feb 2025</span>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <MapPin className="h-4 w-4" />
              <span>Manipal, Udupi</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex gap-3 text-body">
              <span className="text-secondary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
