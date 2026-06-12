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
    company: 'Dataminr',
    role: 'Data Scientist',
    location: 'NY, USA',
    dates: 'Jul 2025 to Present',
    current: true,
    bullets: [
      'Built real-time event detection workflows using PySpark and AWS SageMaker, improving alert relevance by 18% across public news and social content streams globally.',
      'Refined NLP classification models using PyTorch and TensorFlow, improving entity extraction consistency by 15% and supporting faster intelligence assessment across emerging risk events. ',
      'Performed Feature Engineering on streaming datasets through ETL Pipelines, accelerating event ingestion by 24% while improving downstream model readiness and processing efficiency.',
      'Assessed Generative AI summaries against analyst-reviewed outputs, increasing content relevance by 13% and establishing quality benchmarks for intelligence monitoring workflows. ',
      'Maintained model deployment and experiment tracking through MLflow and Docker, reducing validation turnaround by 16% across production machine learning environments. ',
    ],
  },
  {
    company: 'Atlassian',
    role: 'Data Scientist',
    location: 'Remote',
    dates: 'Jun 2023 to Jul 2024',
    bullets: [
      'Analyzed Jira and Confluence usage data using Python and SQL, uncovering adoption trends that improved feature prioritization accuracy by 14% across products. ',
      'Conducted Exploratory Data Analysis (EDA) across customer interaction datasets, identifying 17% variation in engagement behavior among enterprise and mid-market user segments. ',
      'Developed Predictive Modeling solutions estimating feature adoption likelihood, improving targeting effectiveness by 12% and supporting roadmap planning decisions for product teams. ',
      'Processed behavioral datasets through Apache Spark, reducing feature preparation time by 21% while supporting recurring analytics and experimentation initiatives across platforms.',
      'Created Tableau dashboards supporting Dashboard Development, improving stakeholder visibility by 18% and centralizing adoption insights for release performance monitoring. ',
      'Executed Model Evaluation and Statistical Analysis activities, reducing forecasting variance by 17% and strengthening confidence in long-term product planning decisions.',
    ],
  },
  {
    company: 'CleverTap',
    role: 'Data Analyst (Intern)',
    location: 'India',
    dates: 'Jun 2023 to Dec 2023',
    bullets: [
      'Examined campaign performance data using SQL and Power BI, identifying audience behavior trends that improved targeted engagement effectiveness by 12% across applications.',
      'Integrated customer interaction records from messaging, push notification, and in-app channels, improving reporting completeness by 19% across marketing analytics datasets. ',
      'Utilized Python, Pandas, and NumPy for Data Wrangling, reducing segmentation preparation effort by 15% while supporting campaign performance analysis initiatives.',
      'Validated Data Quality and attribution reporting outputs, reducing dashboard discrepancies by 16% and improving confidence in campaign measurement across stakeholders.',
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
