export interface Project {
  id: string;
  title: string;
  category: "Public GitHub" | "Confidential Case Study";
  technologies: string[];
  overview: string;
  features: string[];
  myContribution?: string[];
  areasCovered?: string[];
  githubUrl?: string;
  isConfidential: boolean;
  confidentialNote?: string;
  highlightStats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  defaultSubject: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  responsibilities: string[];
  confidentialNotice?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: "Degree" | "Certification";
  badgeText: string;
  note?: string;
}

export const PERSONAL_INFO = {
  name: "Ashish Patil",
  headline: "Data Analyst & Power BI Developer | SQL, DAX & Business Intelligence",
  primaryRole: "Power BI Developer",
  secondaryRoles: ["Data Analyst", "Business Intelligence Developer"],
  location: "Indore, Madhya Pradesh, India",
  availability: "Open to Full-Time & Freelance Opportunities",
  relocation: "Open to relocation",
  email: "ashishpatil1432100@gmail.com",
  phone: "+91 6265872475",
  linkedin: "https://www.linkedin.com/in/ashish-patil8/",
  github: "https://github.com/Ashish14-Patil",
  intro:
    "I build interactive Power BI dashboards, business performance reports, and data-driven insights using Power BI, DAX, SQL, Excel, and Python. I enjoy transforming complex datasets into clear, actionable business information through dashboard development, analytical reporting, and data modelling.",
  about:
    "I am a Power BI Developer and Data Analyst focused on business intelligence, interactive dashboards, KPI reporting, SQL analysis, data transformation, and MIS reporting. My technical skill set includes Power BI, DAX, Power Query, SQL, Advanced Excel, and Python. My project experience includes financial insights, customer analytics, TAT process reporting, client Power BI support, and customer sentiment analysis. My earlier experience in timesheet operations, data validation, exception reporting, and payroll support has also helped me understand the importance of data accuracy and reliable reporting.",
};

export const SKILL_CATEGORIES = [
  {
    title: "Power BI & Business Intelligence",
    description: "End-to-end dashboard design, DAX calculated measures, and analytical modeling.",
    icon: "BarChart3",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modelling",
      "Dashboard Development",
      "KPI Reporting",
      "Drill-through",
      "Tooltips",
      "Page Navigation",
      "MTD / QTD / YTD Analysis",
      "Current Year vs Last Year",
    ],
  },
  {
    title: "SQL & Data Analysis",
    description: "Database queries, data aggregation, multi-table joins, and subqueries.",
    icon: "Database",
    skills: [
      "SQL / MySQL",
      "JOINs",
      "GROUP BY",
      "Aggregations",
      "Subqueries",
      "Filtering",
    ],
  },
  {
    title: "Excel & MIS Reporting",
    description: "Data validation, exception tracking, pivot summaries, and payroll support reports.",
    icon: "FileSpreadsheet",
    skills: [
      "Pivot Tables",
      "XLOOKUP / VLOOKUP",
      "Conditional Formatting",
      "Data Cleaning",
      "Exception Reporting",
    ],
  },
  {
    title: "Python & Development Tools",
    description: "Data manipulation, analytical exploration, and version control workflows.",
    icon: "Code2",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
      "Git",
      "GitHub",
      "SQLite",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nine-a",
    role: "Power BI Developer Intern",
    company: "Nine A Business Connect Pvt. Ltd.",
    period: "July 2026 – Present",
    location: "India",
    workMode: "Remote",
    responsibilities: [
      "Supporting ongoing Power BI projects and analytical requirements.",
      "Supporting existing reports and interactive business dashboards.",
      "Investigating reported issues and implementing required modifications.",
      "Improving dashboard UI, visual hierarchy, design, and user navigation.",
      "Supporting business reporting requirements and stakeholder queries.",
    ],
    confidentialNotice: "Client engagements and internal figures remain strictly confidential.",
  },
  {
    id: "sgs-consulting",
    role: "Timesheet Executive / Account Support",
    company: "SGS Consulting",
    period: "June 2025 – December 2025",
    location: "Indore, India",
    workMode: "On-site",
    responsibilities: [
      "Maintained timesheets for US candidates across multiple client accounts.",
      "Entered and updated information accurately in vendor management portals.",
      "Prepared exception reports using Advanced Excel for operational accuracy.",
      "Identified and corrected data discrepancies, errors, and duplicate entries.",
      "Prepared timesheet reports for smooth payroll processing cycles.",
      "Supported employee registration and termination updates in the system.",
      "Managed email communication and day-to-day operational account tasks.",
      "Worked in a team of 17 professionals and handled weekly volumes of 100–500 records.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "financial-insights",
    title: "Financial Insights Dashboard",
    category: "Public GitHub",
    technologies: ["Power BI", "DAX", "Power Query", "SQL"],
    overview:
      "An interactive financial dashboard for analysing sales, profit, profit margins, revenue trends, product/category performance, and customer/business segments.",
    features: [
      "MTD, QTD, and YTD financial performance reporting",
      "Current Year vs Last Year (CY vs LY) dynamic comparison",
      "Interactive slicers for time horizons and market segments",
      "Contextual drill-through to product-level breakdowns",
      "Custom tooltips displaying margin trends and variances",
      "Intuitive page navigation and KPI summary cards",
      "Power Query data cleaning and ETL transformations",
      "Optimized star-schema data model relationships",
    ],
    githubUrl: "https://github.com/Ashish14-Patil/-Financial-Insights-Dashboard-Power-BI",
    isConfidential: false,
    highlightStats: [
      { label: "Core Dimensions", value: "Sales & Margins" },
      { label: "Time Periods", value: "MTD / QTD / YTD" },
      { label: "Data Pipeline", value: "Power Query ETL" },
    ],
  },
  {
    id: "customer-insights",
    title: "Customer Insights Dashboard",
    category: "Public GitHub",
    technologies: ["SQL", "MySQL", "Power BI", "DAX", "Power Query"],
    overview:
      "A customer analytics dashboard for analysing revenue, orders, customer count, average order value (AOV), customer segments, and buying trends.",
    features: [
      "SQL multi-table joins, subqueries, and window aggregations",
      "GROUP BY query optimization for customer transaction logs",
      "Custom DAX KPIs for Customer Lifetime & Average Order Value",
      "Interactive slicers for customer cohorts and purchase frequency",
      "Historical trend analysis across product lines and regions",
      "Dynamic customer segmentation and tier grouping",
      "Tooltips and drill-through for transaction-level analysis",
      "Robust data modeling connecting dim_customer and fact_orders",
    ],
    githubUrl: "https://github.com/Ashish14-Patil/Customer_Insight_Dashboard",
    isConfidential: false,
    highlightStats: [
      { label: "Analysis Focus", value: "Customer Cohorts & AOV" },
      { label: "Database", value: "MySQL / Relational SQL" },
      { label: "Visuals", value: "Segment Breakdowns" },
    ],
  },
  {
    id: "tat-process-analytics",
    title: "TAT Process Analytics & MIS Reporting",
    category: "Confidential Case Study",
    technologies: ["Power BI", "DAX", "Data Modelling", "MIS Reporting"],
    overview:
      "A comprehensive turnaround-time (TAT) process analytics dashboard and MIS reporting system designed to monitor operational milestones, bottleneck stages, and target vs actual delivery.",
    features: [
      "PR Approval stage tracking & cycle time measurement",
      "PO Release workflow analytics and status monitoring",
      "Price Discovery variance and quotation turnaround tracking",
      "Proposal Approval milestone tracking and delay notifications",
      "Delay Events categorization and root-cause analysis",
    ],
    myContribution: [
      "Executed data cleaning, standardization, and star-schema data modelling",
      "Built DAX measures for SLA breach calculations and KPI summary cards",
      "Conducted monthly trend analysis across various operational milestones",
      "Created SBU-wise and project-wise comparative breakdown views",
      "Implemented Target-versus-Actual reporting and variance alerts",
      "Designed clean, accessible dashboard UI tailored for operational review",
      "Supported process-specific ad-hoc analysis and scheduled MIS reports",
    ],
    areasCovered: [
      "PR Approval",
      "PO Release",
      "Price Discovery",
      "Proposal Approval",
      "Delay Events",
    ],
    isConfidential: true,
    confidentialNote: "Confidential live-project case study. Client names, raw figures, and proprietary data are protected.",
    highlightStats: [
      { label: "Workflow Scope", value: "5 Key Process Stages" },
      { label: "Comparative Views", value: "SBU & Project-wise" },
      { label: "Reporting Model", value: "Target vs Actual MIS" },
    ],
  },
  {
    id: "client-power-bi-support",
    title: "Client Power BI Support & Issue Resolution",
    category: "Confidential Case Study",
    technologies: ["Power BI", "DAX", "Issue Troubleshooting", "Dashboard UI Polish"],
    overview:
      "An ongoing operational support and client dashboard maintenance engagement ensuring report accuracy, visual usability, DAX measure refinement, and prompt bug resolution.",
    features: [
      "Diagnostic investigation of report discrepancies and measure inconsistencies",
      "DAX formula debugging and query optimization for faster report loads",
      "Dashboard visual interface cleanup, spacing, and accessibility alignment",
      "Cross-functional coordination between business stakeholders and reporting requirements",
    ],
    myContribution: [
      "Supported existing production Power BI reports and executive dashboards",
      "Participated actively in client meetings regarding reported dashboard issues",
      "Investigated data model discrepancies and coordinated fast resolution",
      "Supported layout modifications and ongoing ad-hoc reporting requirements",
      "Enhanced user experience with intuitive slicers, tooltips, and clear labels",
    ],
    isConfidential: true,
    confidentialNote: "Confidential client-support case study. Role focused on Power BI support and issue resolution.",
    highlightStats: [
      { label: "Engagement", value: "Client Support & Fixes" },
      { label: "Focus", value: "Usability & Accuracy" },
      { label: "Outcome", value: "Fast Issue Resolution" },
    ],
  },
  {
    id: "customer-review-sentiment",
    title: "Customer Review & Sentiment Analytics",
    category: "Confidential Case Study",
    technologies: ["Excel", "Power BI", "Power Query", "DAX"],
    overview:
      "A business intelligence solution analyzing customer sentiment, product satisfaction ratings, common complaints, and feature preferences across product lines.",
    features: [
      "Positive, negative, and neutral sentiment classification breakdown",
      "Product-wise sentiment comparison and customer rating distributions",
      "Time-based trend analysis identifying shifting customer sentiment",
      "Common complaints and most-liked product features analysis",
      "Cross-product side-by-side evaluation matrix and MIS reports",
      "Interactive KPI navigation, dynamic filters, and review summary tables",
    ],
    myContribution: [
      "Designed clean, user-friendly dashboard UI with intuitive visual hierarchy",
      "Engineered Power Query data transformation pipelines for customer review text",
      "Constructed DAX calculations for satisfaction ratios and sentiment indexes",
      "Created comparative charts, sentiment bar breakdowns, and glossary pages",
      "Developed comprehensive MIS reports for cross-product benchmarking",
    ],
    isConfidential: true,
    confidentialNote: "Confidential live-project case study. Illustrative project overview; real client data and customer comments protected.",
    highlightStats: [
      { label: "Classification", value: "Pos / Neu / Neg Sentiment" },
      { label: "Benchmarking", value: "Cross-Product Evaluation" },
      { label: "Analytics Tool", value: "Power BI & Excel" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "power-bi-dashboards",
    title: "Power BI Dashboard Development",
    description:
      "End-to-end creation of interactive, executive-ready Power BI dashboards featuring custom KPIs, dynamic slicers, drill-throughs, and intuitive page navigation.",
    deliverables: [
      "Custom business KPI scorecards",
      "Interactive filters & drill-through pages",
      "Clean UI aligned with brand palettes",
      "Optimized data model relationships",
    ],
    defaultSubject: "Power BI Freelance Project",
  },
  {
    id: "dax-kpi-reporting",
    title: "DAX Measures & KPI Reporting",
    description:
      "Development of accurate, robust DAX calculations for complex business logic, including time intelligence (MTD/QTD/YTD), variance tracking, and CY vs LY benchmarks.",
    deliverables: [
      "Time intelligence measures (YTD, QTD, MTD)",
      "Growth rates & comparative variance metrics",
      "Dynamic ranking and conditional measures",
      "Well-documented DAX formula library",
    ],
    defaultSubject: "Power BI Freelance Project",
  },
  {
    id: "excel-to-powerbi",
    title: "Excel/CSV to Power BI Reports",
    description:
      "Migrate manual spreadsheets and static CSV files into dynamic, automated Power BI dashboards that refresh seamlessly.",
    deliverables: [
      "Data ingestion & schema normalization",
      "Automated refresh setup",
      "Modern interactive visual replacements",
      "Elimination of manual copy-paste errors",
    ],
    defaultSubject: "Power BI Freelance Project",
  },
  {
    id: "power-query-etl",
    title: "Power Query Data Cleaning & Transformation",
    description:
      "Structured ETL workflows in Power Query to clean messy raw datasets, remove duplicates, handle missing values, and prepare data for modeling.",
    deliverables: [
      "Automated data cleaning steps",
      "Unpivoting, merging, and appending tables",
      "Custom column definitions and data typing",
      "Resilient query structure for new data batches",
    ],
    defaultSubject: "Data Analytics Project",
  },
  {
    id: "sql-data-analysis",
    title: "SQL Data Analysis & Reporting",
    description:
      "Extracting, filtering, and aggregating business records using relational SQL (MySQL/SQLite) with optimized joins, subqueries, and grouping.",
    deliverables: [
      "Complex SQL queries & views",
      "Customer cohort & sales aggregations",
      "Data validation & discrepancy checks",
      "Prepared datasets ready for BI visualization",
    ],
    defaultSubject: "Data Analytics Project",
  },
  {
    id: "dashboard-fixes",
    title: "Existing Dashboard Fixes & Improvements",
    description:
      "Audit and repair existing Power BI reports: fix broken DAX measures, resolve slow loading times, correct relationships, and upgrade UI usability.",
    deliverables: [
      "DAX measure troubleshooting & optimization",
      "Model relationship & cardinality fixes",
      "UI visual cleanup & responsive layout adjustments",
      "Fast turnaround on reported client bugs",
    ],
    defaultSubject: "Power BI Freelance Project",
  },
  {
    id: "mis-performance-reports",
    title: "MIS Reports & Business Performance Dashboards",
    description:
      "Creation of structured Management Information System (MIS) reports, turnaround-time (TAT) trackers, and executive performance overviews.",
    deliverables: [
      "Process turnaround-time (TAT) monitoring",
      "Target vs actual variance analysis",
      "SBU and departmental breakdown views",
      "Exportable summary views for leadership",
    ],
    defaultSubject: "Job Opportunity",
  },
  {
    id: "python-data-analysis",
    title: "Python Data Analysis",
    description:
      "Exploratory data analysis, statistical summaries, data cleaning, and visualization using Python libraries like Pandas, NumPy, and Matplotlib.",
    deliverables: [
      "Data exploration in Jupyter Notebooks",
      "Automated data manipulation with Pandas",
      "Exploratory charts & visual distributions",
      "Exportable clean datasets & summaries",
    ],
    defaultSubject: "Data Analytics Project",
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "mba-it",
    title: "MBA — Information Technology",
    institution: "Arihant College / DAVV University",
    period: "2024 – 2025",
    type: "Degree",
    badgeText: "Postgraduate Degree",
    note: "Focus on IT systems, business data processes, and enterprise technology management.",
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce (B.Com.)",
    institution: "Devi Ahilya Bai College / DAVV University",
    period: "2021 – 2023",
    type: "Degree",
    badgeText: "Undergraduate Degree",
    note: "Strong foundation in financial accounting, commercial data, business arithmetic, and auditing principles.",
  },
  {
    id: "power-bi-cert",
    title: "Power BI for Beginners",
    institution: "Microsoft / Simplilearn SkillUp",
    period: "Completed: 22 June 2026",
    type: "Certification",
    badgeText: "Course Completion Credential",
    note: "Focused credential covering Power BI fundamentals, data transformation, DAX calculations, and report visualization.",
  },
];
