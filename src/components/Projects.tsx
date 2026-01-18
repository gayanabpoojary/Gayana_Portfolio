import { FolderOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Engagement & Brand Loyalty Analysis",
      points: [
        "Analyzed survey data from 120+ respondents to identify retention-related insights using financial modeling.",
        "Modeled customer spending patterns in Excel to support data-backed retention and pricing insights.",
      ],
    },
    {
      title: "Financial Literacy Survey Analysis (Team Lead)",
      points: [
        "Led analysis of 120+ youth survey records, improving data accuracy and reporting clarity by 40%.",
        "Generated summarized financial awareness reports using Excel.",
      ],
    },
    {
      title: "Corrugation Manufacturing Cost Optimization",
      points: [
        "Examined raw material, labor, and overhead cost components across production stages, reducing overall costs by 25%.",
        "Compared budgeted vs actual costs to identify variance drivers and recommend process improvements.",
      ],
    },
  ];

  return (
    <section className="container-section border-b border-divider">
      <h2 className="section-heading">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <FolderOpen className="h-5 w-5 text-secondary mt-0.5" />
              <h3 className="text-lg font-semibold text-heading">
                {project.title}
              </h3>
            </div>
            <ul className="space-y-2 ml-8">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex gap-3 text-body">
                  <span className="text-secondary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
