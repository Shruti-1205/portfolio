export interface Role {
  company: string;
  role: string;
  location: string;
  dates: string;
  current?: boolean;
  bullets: string[];
}

export const experience: Role[] = [
  {
    company: 'Community Dreams Foundation',
    role: 'Data Scientist, Volunteer',
    location: 'Remote, 25 hrs/week',
    dates: 'Mar 2026 to Present',
    current: true,
    bullets: [
      'Building analytics and predictive models supporting the foundation\u2019s community energy and technology programs.',
      'Early engagement: data intake, EDA, dashboard scaffolding for non-technical stakeholders.',
    ],
  },
  {
    company: 'Chista Health',
    role: 'Data Engineering Intern, AI & Analytics Systems',
    location: 'Remote',
    dates: 'Jul 2025 to Dec 2025',
    bullets: [
      'Shipped ETL pipelines turning 5,000+ unstructured pharmacy-benefit PDFs into schema-aligned analytical records.',
      'Designed CrewAI multi-agent extraction (entity \u2192 normalization \u2192 validation), replacing brittle regex pipelines.',
      'Stood up validation and EDA layers feeding Power BI dashboards for plan-to-plan coverage comparison.',
      'Ran iterative extraction evaluation with confusion matrices and prompt re-engineering across releases.',
    ],
  },
  {
    company: 'Inventiff Consulting Services',
    role: 'Data Science Intern',
    location: 'India',
    dates: 'Jun 2023 to Dec 2023',
    bullets: [
      'Built LangChain-powered invoice processing pipeline over flat files, REST APIs, and scanned PDFs.',
      'Two-pass scikit-learn anomaly detection (schema + semantic outliers): manual review errors down 40%.',
      'Delivered ops dashboards in Python, SQL, and Power BI covering throughput and anomaly rate per vendor.',
    ],
  },
  {
    company: 'VESIT Renaissance Cell',
    role: 'Research Intern',
    location: 'Mumbai, India',
    dates: 'Jun 2022 to Dec 2022',
    bullets: [
      'Benchmarked unsupervised time-series anomaly detection across Isolation Forest, One-Class SVM, XGBoost, CatBoost.',
      'Contributed regression-based thresholding that lifted precision in the tail of the score distribution.',
      'Co-authored IJCA 2022 paper on unsupervised anomaly detection for time series.',
    ],
  },
];
