const Skills = () => {
  const accountingSkills = [
    "Tally ERP9 (Ledger Creation, Voucher Entry, Journal Entries, Trial Balance)",
    "Accounts Payable & Receivable",
    "Bank Reconciliation",
    "Invoice Processing",
    "GST Filing (GSTR-1, GSTR-3B)",
    "GST Reconciliation (GSTR-2A / GSTR-2B)",
    "TDS Compliance",
    "Month-End Closing",
    "Audit Support",
    "Financial Statements",
  ];

  const reportingSkills = [
    "Advanced Excel (VLOOKUP, Pivot Tables, IF, SUMIFS)",
    "MIS Reports",
    "Costing Sheets",
    "Budget vs Actual Analysis",
    "Variance Analysis",
    "Financial & Marketing Data Analysis",
  ];

  return (
    <section className="container-section border-b border-divider">
      <h2 className="section-heading">Core Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-heading mb-4">
            Accounting & Compliance
          </h3>
          <div className="flex flex-wrap gap-2">
            {accountingSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-heading mb-4">
            Reporting & Data Analysis
          </h3>
          <div className="flex flex-wrap gap-2">
            {reportingSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
