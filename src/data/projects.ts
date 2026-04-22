export type TopicTag = 'ML' | 'LLM' | 'Analytics' | 'Systems';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  hook: string;
  tags: TopicTag[];
  stack: string[];
  metric: string;
  github?: string | null;
  demos?: ProjectLink[];
  paperUrl?: string | null;
  description: string[];
}

export const projects: Project[] = [
  {
    slug: 'indian-equities-research-assistant',
    title: 'Indian Equities Research Assistant',
    hook: 'Multi-agent LLM system explaining NSE stock moves with zero-fabrication numeric grounding.',
    tags: ['LLM', 'Systems'],
    stack: ['LangGraph', 'ChromaDB', 'DuckDB', 'Cerebras', 'Groq', 'Claude Haiku', 'FastAPI', 'Streamlit'],
    metric: '97.1% numeric grounding \u00b7 2.9% hallucination rate \u00b7 105-case LLM-as-judge benchmark.',
    github: 'https://github.com/Shruti-1205/indian-equity-research-assistant',
    demos: [{ label: 'Live App', url: 'https://indian-equity-research-assistant.streamlit.app/' }],
    description: [
      'Four parallel LangGraph agents (price, events, flows, macro) over Nifty 100 OHLCV in DuckDB and 12 months of BSE filings in ChromaDB.',
      'Three-layer grounding pipeline: deterministic number validator \u2192 verifier agent rewrite \u2192 regex redactor. The system does not fabricate numbers.',
      'Benchmarked against 105 labeled cases over 8 trading days with Claude Opus as independent LLM-as-judge grader.',
      'Cost-aware routing across Cerebras, Groq, and Claude Haiku with prompt caching and daily refresh via GitHub Actions.',
    ],
  },
  {
    slug: 'hospital-readmission-mlops',
    title: 'Hospital Readmission MLOps Platform',
    hook: 'Production MLOps stack for 30-day readmission prediction on 101,766 patient encounters.',
    tags: ['ML', 'Systems'],
    stack: ['MLflow', 'Optuna', 'XGBoost', 'FastAPI', 'Docker', 'Evidently', 'Streamlit', 'HuggingFace Spaces', 'GitHub Actions'],
    metric: 'ROC-AUC 0.6776 \u00b7 PR-AUC 0.2344 (2.06x base rate lift) \u00b7 live on HuggingFace Spaces.',
    github: 'https://github.com/Shruti-1205/Readmission-MLOps',
    demos: [{ label: 'Live Space', url: 'https://huggingface.co/spaces/shrutidevlekar/readmission-risk' }],
    description: [
      'MLflow sweep across five algorithms, Optuna-tuned XGBoost registered under Production alias. SMOTE vs class-weighting ablation documented.',
      'FastAPI + Pydantic v2 + multi-stage Docker (non-root, HEALTHCHECK). Evidently drift checks across 50 features with CI-gate JSON verdict.',
      'Promote-if-better retraining gate: new candidate must beat Production ROC-AUC by 0.001 margin. Already caught a regressing retrain in testing.',
      'Subgroup fairness audit: <0.02 gap across gender, 0.14 AUC gap across race subgroups, documented as data-collection action item.',
    ],
  },
  {
    slug: 'loan-default-prediction',
    title: 'Loan Default Prediction',
    hook: 'Credit risk classifier on 255k loan records with per-request SHAP explanations and typed API.',
    tags: ['ML', 'Systems'],
    stack: ['scikit-learn', 'FastAPI', 'SHAP', 'Streamlit', 'Docker', 'GitHub Actions', 'pytest'],
    metric: '255k records \u00b7 88/12 class imbalance \u00b7 threshold-tuned for F1 \u00b7 live Streamlit app.',
    github: 'https://github.com/Shruti-1205/loan-default-prediction',
    demos: [{ label: 'Live App', url: 'https://predict-loan-default.streamlit.app/' }],
    description: [
      'scikit-learn Pipeline (one-hot + scaling + class-balanced Random Forest) with decision threshold tuned on held-out validation for F1.',
      'Typed FastAPI returning prediction, probability, active threshold, and top-10 SHAP feature contributions per request.',
      'Streamlit dashboard with live threshold slider and what-if counterfactuals; precision, recall, confusion matrix update in real time.',
      'pytest + GitHub Actions CI, Dockerized API, diagnostic artifacts (ROC, PR, threshold sweep) rendered directly in the UI.',
    ],
  },
  {
    slug: 'telecom-customer-churn',
    title: 'Telecom Customer Churn Intelligence',
    hook: 'Calibrated churn classifier reframed as a revenue-at-risk problem with Tableau dashboard.',
    tags: ['ML', 'Analytics'],
    stack: ['scikit-learn', 'HistGradientBoosting', 'SQL', 'Streamlit', 'Tableau', 'SQLite'],
    metric: 'ROC-AUC 0.8448 \u00b7 77% recall on churn class \u00b7 $2.86M/month revenue at risk quantified.',
    github: 'https://github.com/Shruti-1205/CustomerChurnAnalysis',
    demos: [
      { label: 'Streamlit', url: 'https://telcocustomerchurnanalysis.streamlit.app' },
      { label: 'Tableau', url: 'https://public.tableau.com/app/profile/shruti.liladhar.devlekar/viz/Customer_Churn_and_Revenue_Overview/Dashboard1' },
    ],
    description: [
      'Calibrated HistGradientBoosting under StratifiedKFold + RandomizedSearchCV (25 candidates); isotonic calibration; threshold tuned to 0.3143.',
      '7 engineered features on 7,043 customers (tenure cohorts, LTV segments, contract risk flags); overall churn rate 26.54%.',
      'Quantified $2.86M monthly revenue at risk (17.83% of total); modeled $280K monthly net ROI from retention intervention.',
      '5-page Streamlit app + Tableau Public dashboard + 8 production SQL queries (CTEs, LAG, ROW_NUMBER, cohort + ROI modeling).',
    ],
  },
  {
    slug: 'f1-analytics-dashboard',
    title: 'F1 Analytics Dashboard (1950 to 2024)',
    hook: '75 years of Formula 1 turned into a dimensional model and interactive Power BI report.',
    tags: ['Analytics'],
    stack: ['Python', 'DuckDB', 'Parquet', 'Power BI', 'DAX', 'SQL', 'pandas'],
    metric: '14-table star schema \u00b7 30+ DAX measures \u00b7 589k+ lap records \u00b7 public Power BI dashboard.',
    github: 'https://github.com/Shruti-1205/F1-Analytics',
    demos: [{ label: 'Power BI Dashboard', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjJlNDQ2MzgtMzFkYy00MmFkLTg3NDYtOWFjMGM1Y2EyMDk0IiwidCI6Ijk2NDY0YThhLWY4ZWQtNDBiMS05OWUyLTVmNmI1MGEyMDI1MCIsImMiOjN9&embedImagePlaceholder=true&pageName=2c3f041043a6942a04a0' }],
    description: [
      'One-command pipeline: 13 raw Kaggle CSVs \u2192 pandas cleaning \u2192 DuckDB \u2192 14-file Parquet analytical layer aligned with Power BI VertiPaq.',
      'Star schema: 6 dimensions + 4 fact tables + 4 pre-aggregated summaries over a normalized 3NF source, optimized for slicer latency.',
      '30+ DAX measures: KPIs, time intelligence (YoY, SPLY), running totals, rankings, composite indices including win rate and championship gap.',
      '4-page dashboard (Overview, Drivers, Constructors, Race Deep-Dive) with cascading slicers and lap-by-lap drill-down across 860+ drivers.',
    ],
  },
  {
    slug: 'multi-agent-rl',
    title: 'Multi-Agent Reinforcement Learning System',
    hook: 'Graduate-project benchmark of five deep RL algorithms on a custom stochastic environment.',
    tags: ['ML'],
    stack: ['Python', 'PyTorch', 'Q-Learning', 'SARSA', 'DQN', 'Double DQN', 'Dueling DQN'],
    metric: '5 algorithm families \u00b7 convergence, policy stability, and failure-mode comparison under distribution shift.',
    github: null,
    description: [
      'Simulation environment designed first, with stochastic transitions, hard constraints, and injected failure scenarios.',
      'Q-Learning, SARSA, DQN, Double DQN, and Dueling DQN implemented in PyTorch under shared scaffolding for fair comparison.',
      'Evaluation pipeline logging convergence curves, rolling policy entropy, and failure-event counts across random seeds.',
      'Comparative writeup with selection lens: training budget, sample efficiency, tolerance for catastrophic failures.',
    ],
  },
  {
    slug: 'intellibank',
    title: 'IntelliBank: Banking Intent Recognition',
    hook: 'Service bot for banking conversations that classifies known user intents and discovers new ones from unlabeled queries.',
    tags: ['ML'],
    stack: ['Python', 'PyTorch', 'Django', 'SQLite', 'Docker', 'Contrastive Learning'],
    metric: 'Co-authored journal paper \u00b7 IJIRT, 2024 \u00b7 Django web service with Docker deployment.',
    github: 'https://github.com/Shruti-1205/IntelliBank',
    paperUrl: 'https://ijirt.org/publishedpaper/IJIRT168142_PAPER.pdf',
    description: [
      'Classifies known banking intents (e.g. top_up_limits, lost_or_stolen_card, transfer_timing) using ADBES (Adaptive Decision Boundary Learning via Expanding and Shrinking), which dynamically adjusts the boundary around each intent cluster.',
      'Queries falling outside all known-intent boundaries route to MTP-CLNN (Multi-Task Pre-training + Contrastive Learning with Nearest Neighbors) for unsupervised discovery of new intent categories.',
      'Clusters the discovered open intents and extracts pivotal keywords per cluster to auto-label emerging user needs directly from the query text.',
      'Packaged as a Django web service with Docker deployment. Co-authored paper: \u201cEnhancing Dialogue Systems with Adaptive Decision Boundaries and Multi-task Learning for Open Intent Recognition\u201d (IJIRT, 2024).',
    ],
  },
];
