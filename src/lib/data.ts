import type { Job, Project, SkillCategory, Hobby, Testimonial } from "@/types";

export const jobs: Job[] = [
  {
    company: "Fender Musical Instruments Corporation",
    role: "Senior Supply Chain Analyst",
    period: "Jul 2021 — Present",
    location: "Scottsdale, AZ",
    current: true,
    bullets: [
      "Architected and maintained enterprise-scale data pipelines processing millions of rows of supply chain transactional data, migrating infrastructure from AWS Redshift to Databricks — reducing pipeline runtime by ~40% and enabling real-time analytical access across global teams.",
      "Designed and deployed 25+ Tableau dashboards and operational reports consumed by executive leadership for SIOP and annual financial budgeting cycles, consolidating data from disparate ERP, Planning and WMS sources into a single source of truth.",
      "Built Fill Rate, In-Stock and Out of Stock reporting framework for supply performance measurement, enabling Supply Planning and e-Commerce teams to identify and resolve fulfillment gaps, contributing to measurable improvements in on-time delivery SLAs.",
      "Developed Inbound/Outbound and Container Forecast models for the Transportation and Warehousing teams, providing 12-month forward visibility into container volumes and capacity plans — directly informing freight budget planning and reducing unplanned capacity overheads.",
      "Designed end-to-end Inventory Forecasting, Excess & Obsolete, and Web Reserved Inventory analytics, integrating statistical trend models with business logic to surface slow-moving SKUs, size reserves, and quantify in-stock/OOS exposure across the digital catalog.",
    ],
  },
  {
    company: "Tillamook County Creamery Association",
    role: "Demand Planner",
    period: "Jul 2018 — Jun 2021",
    location: "Portland, OR (Remote)",
    bullets: [
      "Delivered an average 85% forecast accuracy at warehouse level by building and maintaining statistical forecast models across multiple time horizons and aggregation levels, supporting a $1B+ dairy brand.",
      "Led monthly forecast consensus process, coordinating cross-functional reviews with Finance and Sales to align operational and financial plans — reducing forecast revision cycles from 3 rounds to 1.",
      "Served as primary forecasting liaison to co-manufacturing partners, delivering weekly updated demand signals that reduced shortages and over-production events, generating a direct $2M cost saving in FY 2019.",
      "Scripted and maintained SQL stored procedures to automate data aggregation across ERP, WMS, and planning systems — reducing manual reporting effort by an estimated 6 hrs/week per analyst.",
    ],
  },
  {
    company: "FedEx Corporation",
    role: "Graduate Supply Chain Consultant",
    period: "Jan 2017 — May 2017",
    location: "Dallas, TX",
    bullets: [
      "Applied ANOVA and regression analysis to identify root causes of cycle count variances; Pareto analysis isolated top bins driving 80% of dollar inaccuracy — insights adopted in the facility's corrective action plan.",
      "Proposed continuous improvement plan targeting a 99.7% service level; recommendations presented to operations leadership and approved for phased implementation.",
    ],
  },
  {
    company: "Wordit CDE Pvt Ltd",
    role: "Supply Chain Analyst",
    period: "Aug 2013 — Apr 2015",
    location: "India",
    bullets: [
      "Managed end-to-end supply chain for 70+ publishing projects across e-commerce, retail, and eBook channels; onboarded 36 e-commerce and 75 retail vendor relationships globally.",
      "Reduced process flow time by 40% and overhead costs by 5% by identifying and eliminating workflow bottlenecks — achieving 90% demand forecast accuracy using Exponential Smoothing.",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Enterprise Data Pipeline Migration",
    description:
      "Migrated supply chain data infrastructure from AWS Redshift to Databricks, cutting pipeline runtime by ~40% and enabling real-time analytical access for global teams processing millions of rows of transactional data.",
    tags: ["Databricks", "AWS Redshift", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Executive SIOP Dashboard Suite",
    description:
      "Designed and deployed 25+ Tableau dashboards consolidating data from ERP, Planning, and WMS into a single source of truth — directly powering executive SIOP cycles and annual financial budgeting decisions at Fender.",
    tags: ["Tableau", "SQL", "ERP Integration", "SIOP"],
  },
  {
    number: "03",
    title: "Inventory Forecasting & E&O Analytics",
    description:
      "Built end-to-end inventory forecasting and Excess & Obsolete analytics, integrating statistical trend models with business logic to surface slow-moving SKUs, size reserves, and quantify in-stock/OOS exposure across the digital catalog.",
    tags: ["Python", "Statistical Modeling", "SQL", "Tableau"],
  },
  {
    number: "04",
    title: "Demand Forecasting Model",
    description:
      "Built and maintained statistical demand forecast models at warehouse level for a $1B+ dairy brand, achieving 85% forecast accuracy and reducing monthly revision cycles from 3 rounds to 1 through cross-functional consensus planning.",
    tags: ["Logility", "SQL", "Statistical Modeling", "S&OP"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Data & BI Tools",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Alteryx" },
      { name: "Advanced Excel" },
      { name: "SQL" },
      { name: "Python" },
    ],
  },
  {
    label: "Cloud & Platforms",
    skills: [
      { name: "Databricks" },
      { name: "AWS Redshift" },
      { name: "SAP ECC / HANA" },
      { name: "Dynamics 365" },
      { name: "Logility" },
      { name: "DAX" },
    ],
  },
  {
    label: "Supply Chain Methods",
    skills: [
      { name: "SIOP / S&OP" },
      { name: "Demand Planning" },
      { name: "IBP" },
      { name: "Statistical Forecasting" },
      { name: "Lean / Six Sigma" },
      { name: "Data Pipelines" },
    ],
  },
];

export const hobbies: Hobby[] = [
  {
    title: "Hiking & Outdoors",
    description:
      "There's something about being in the mountains that resets everything. Whether it's a trail in the Cascades or a snowy ridgeline, the outdoors is where I decompress best.",
  },
  {
    title: "Cricket & Sports",
    description:
      "Grew up watching cricket and the data behind it never got old — strike rates, run rates, match situations. The analytics of sport is as compelling as the sport itself.",
  },
  {
    title: "Travel & Culture",
    description:
      "From India to the Pacific Northwest, every place has shaped how I think about logistics, systems, and people. Travel is the best supply chain problem — every trip is a planning exercise.",
  },
  {
    title: "Reading & Learning",
    description:
      "Constantly reading about data, forecasting, and systems thinking. If there's a book on decision-making, supply chain strategy, or analytics, it's probably already in the queue.",
  },
];

export const marqueeItems = [
  "SUPPLY CHAIN ANALYTICS",
  "TABLEAU",
  "SQL",
  "DATABRICKS",
  "DEMAND PLANNING",
  "SIOP",
  "PYTHON",
  "FORECASTING",
  "DATA PIPELINES",
  "STORYTELLING",
];

export const testimonials: Testimonial[] = [];

export const contact = {
  email: "pranoy.p9@gmail.com",
  linkedin: "https://linkedin.com/in/pranoy",
  github: "https://github.com/pranoy91",
};
