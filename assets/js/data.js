/* ============================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   You never need to touch index.html or app.js to add a project,
   certificate or job. Just edit the lists below and push to GitHub.
   Items in [SQUARE BRACKETS] are placeholders to replace.
   ============================================================ */
window.PORTFOLIO = {
  person: {
    name: "Nelson Cheruiyot Mitei",
    shortName: "Nelson Mitei",
    brand: "MEL Consultant",
    title: "Monitoring, Evaluation and Learning (MEL) Specialist | Data Analytics and Power BI | Digital Data Collection",
    tagline: "Turning programme data into decisions.",
    roles: ["MEL Specialist", "Power BI Developer", "Systems-informed MEL Practitioner", "Results Framework Designer", "Digital Data Collection Expert"],
    location: "Nairobi, Kenya",
    summary:
      "I design and strengthen MEL systems for donor-funded youth employment, digital skills and agriculture programmes in Kenya. In 6+ years I have built results frameworks, digital data collection systems and Power BI dashboards that turn field data into clear evidence for programme managers and donors, including as Regional MEL Lead on the Mastercard Foundation-funded Ajira Digital Programme.",
    availability: "Available for remote, home-based and on-site roles (EAT, UTC+3)",
    photo: "", // e.g. "assets/img/nelson.webp"; leave empty to show initials
    cv: "assets/Nelson-Mitei-CV.pdf", // add your CV PDF with this exact name
    email: "mcmitey@gmail.com",
    phone: "+254712358810", // shown as a WhatsApp link, not as plain text
    // Contact form: FormSubmit (no account needed). The FIRST message sends a one-time
    // activation email to this address; click "Activate" in it and the form works from then on.
    formEndpoint: "https://formsubmit.co/ajax/mcmitey@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/nelsonmitei/",
      github: "https://github.com/nelsoncheruiyotmitei",
      upwork: "[https://www.upwork.com/freelancers/your-profile]",
      fiverr: "https://www.fiverr.com/nelsonmitei"
    }
  },

  // Hero "Key results" cards. src = where the number comes from (shown under each card)
  kpis: [
    { value: 6, suffix: "+", label: "Years in MEL & data", src: "2018 to date" },
    { value: 659, suffix: "", label: "Farmers in one survey I led", src: "SEMA II, Makueni, 2026" },
    { value: 25, prefix: "+", suffix: "%", label: "Data accuracy", src: "Ajira Digital · routine DQA results" },
    { value: 40, suffix: "%", label: "Faster reporting with Power BI", src: "Ajira Digital · reporting turnaround" },
    { value: 100, suffix: "%", label: "Donor reporting compliance", src: "Ajira Digital · Mastercard Foundation" },
    { value: 30, suffix: "+", label: "Staff & partners trained", src: "Ajira Digital, 2020–2026" }
  ],

  // Organisations and programmes I have worked with (scrolling strip under the hero)
  donorsLabel: "Programmes and partners I have worked with",
  donors: ["Mastercard Foundation", "Ajira Digital Programme", "eMobilis", "KALRO", "IASR", "Kenya National Bureau of Statistics", "ICT Authority", "Government of Kenya"],

  /* ---------- Theory of Change: my career as a results chain ---------- */
  // Each box: t = title, d = story, then a mini logframe:
  // ind = indicator, mov = evidence (means of verification), ex = example project, as = assumption for the next level
  toc: [
    { col: "Inputs", stat: "6+ yrs · MSc M&E", items: [
      { id: "i1", t: "ICT foundation", d: "Three national ICT roles (2018–2019): ICT Authority Digital Literacy Programme, NIIMS registration and the KNBS 2019 Census. This is where I learnt to run large field data operations.", to: ["a2", "a3"],
        ind: "National field exercises supported: 3 (KNBS Census, NIIMS, Digital Literacy Programme)", mov: "Employment records; training registers", ex: "KNBS 2019 Census · NIIMS", as: "Field teams have working devices and connectivity" },
      { id: "i2", t: "MSc Monitoring & Evaluation", d: "MSc Monitoring & Evaluation (JKUAT) and BSc Business Information Management (Kisii University), plus certifications in RBM, Theory of Change and Results Frameworks.", to: ["a1"],
        ind: "Formal MEL qualifications and certifications held", mov: "Degree and certificates", ex: "JKUAT · Kisii University", as: "Methods are adapted to each programme's context" },
      { id: "i3", t: "Data toolkit", d: "Power BI (Power Query, DAX), advanced Excel, Python, KoboToolbox, ODK, CommCare, SPSS, STATA, GIS and Make.com.", to: ["a2", "a4", "a5"],
        ind: "Analytical and digital tools in regular use: 10+", mov: "Certifications; portfolio dashboards", ex: "Power BI · Kobo · Python", as: "Clients can access and maintain the tools after handover" }
    ]},
    { col: "Activities", stat: "5 core MEL services", items: [
      { id: "a1", t: "Design results frameworks", d: "Theories of change, logframes (including EU intervention logic), indicator reference sheets and MEL plans.", to: ["o2"],
        ind: "Results frameworks and MEL plans designed", mov: "Approved logframes; indicator reference sheets", ex: "Ajira Digital · SEMA II · Golden ABC", as: "Stakeholders agree on outcomes and targets" },
      { id: "a2", t: "Build digital data collection", d: "Mobile survey tools in KoboToolbox, ODK and CommCare, with validation built in so errors are caught in the field.", to: ["o3", "o4"],
        ind: "Digital tools deployed with built-in validation", mov: "XLSForms; submission logs", ex: "SEMA II farmer survey (659 farmers)", as: "Enumerators follow protocols and sync data daily" },
      { id: "a3", t: "Train & supervise field teams", d: "Enumerator training, supervision and data quality assurance on national exercises and county surveys.", to: ["o3", "o4"],
        ind: "Enumerators and field teams trained and supervised", mov: "Training registers; supervision reports", ex: "KNBS Census · NIIMS · SEMA II", as: "Trained staff are retained through the exercise" },
      { id: "a4", t: "Clean & analyse data", d: "Python, SPSS and STATA workflows for cleaning, deduplication and analysis of large survey datasets.", to: ["o1", "o4"],
        ind: "Datasets cleaned, validated and analysed", mov: "Cleaning logs; analysis scripts", ex: "SEMA II: 659 × 226 dataset", as: "Raw data is complete enough to analyse" },
      { id: "a5", t: "Visualise & automate", d: "Power BI dashboards and Make.com automations that remove manual reporting work.", to: ["o1"],
        ind: "Dashboards and automated workflows delivered", mov: "Published dashboards; workflow logs", ex: "Ajira Digital dashboards", as: "Data sources are updated on schedule" }
    ]},
    { col: "Outputs", stat: "30+ trained · 659 farmers surveyed", items: [
      { id: "o1", t: "Decision dashboards", d: "Power BI dashboards for programme teams and donors, including the SEMA II horticulture dashboard and Ajira Digital reporting.", to: ["c1"],
        ind: "Dashboards in active use by programme teams", mov: "Dashboard access logs; management meeting notes", ex: "SEMA II (4-page dashboard) · Ajira Digital", as: "Managers make time to review the data" },
      { id: "o2", t: "Compliant donor reports", d: "Every Ajira Digital report submitted on time and to standard (100% compliance).", to: ["c2"],
        ind: "% of donor reports submitted on time and to standard: 100%", mov: "Donor submission records", ex: "Ajira Digital (Mastercard Foundation)", as: "Donor reporting requirements stay stable" },
      { id: "o3", t: "Skilled teams", d: "30+ staff and partners trained on MEL systems, plus census and registration enumerators trained on digital data collection.", to: ["c2", "c3"],
        ind: "Staff and partners trained on MEL systems: 30+", mov: "Training registers; post-training assessments", ex: "Ajira Digital regional teams", as: "Trained staff apply the skills in their roles" },
      { id: "o4", t: "Clean, trusted datasets", d: "For example the 659-farmer, 226-variable SEMA II master dataset.", to: ["c1", "c3"],
        ind: "Analysis-ready datasets with documented cleaning", mov: "Data dictionaries; DQA reports", ex: "SEMA II master dataset", as: "Data is stored securely and shared appropriately" }
    ]},
    { col: "Outcomes", stat: "40% faster · +25% accuracy", items: [
      { id: "c1", t: "40% faster reporting", d: "Dashboards cut reporting turnaround time by 40% on the Ajira Digital Programme.", to: ["m1"],
        ind: "Reporting turnaround time: down 40%", mov: "Reporting calendars, before vs after", ex: "Ajira Digital", as: "Time saved is reinvested in analysis and learning" },
      { id: "c2", t: "+25% data accuracy", d: "Results frameworks and data quality assurance raised data accuracy by 25%.", to: ["m1"],
        ind: "Data accuracy: up 25%", mov: "Routine DQA results", ex: "Ajira Digital", as: "DQAs continue after the initial fixes" },
      { id: "c3", t: "Evidence-led decisions", d: "Programme managers adjust activities based on what the data shows, not guesswork.", to: ["m1"],
        ind: "Programme adjustments informed by MEL evidence", mov: "Learning-review notes; management decisions log", ex: "SEMA II learning sessions", as: "Leadership is open to adapting plans" }
    ]},
    { col: "Impact", stat: "Youth · digital skills · agriculture", items: [
      { id: "m1", t: "Programmes that improve lives", d: "Youth in digital work, smallholder farmers with better yields, and communities protecting their forests, all supported by evidence.", to: [],
        ind: "Long-term change in livelihoods, employment and resilience", mov: "Endline evaluations; programme impact reports", ex: "Youth employment · agriculture · environment", as: "Wider economic and policy conditions remain supportive" }
    ]}
  ],
  // The "Walk me through it" button plays this path, one box per column
  tocWalk: ["i3", "a5", "o1", "c1", "m1"],

  // Assumptions & risks strip under the Theory of Change
  tocAssumptions: {
    title: "Key assumptions & risks: example from a youth employment programme",
    items: [
      { link: "Inputs → Activities", a: "Youth can reach the training: affordable internet, devices and transport to centres.", monitor: "Attendance and dropout rates, with reasons for dropping out", risk: "Cost of data and transport; response: data bundles, local training hubs" },
      { link: "Activities → Outputs", a: "Trainees stay and complete the course instead of leaving for casual work.", monitor: "Completion rate by cohort, gender and location", risk: "Women drop out more due to care duties; response: flexible, childcare-friendly schedules" },
      { link: "Outputs → Outcomes", a: "There is demand for digital work, and youth can get paid (payment accounts and IDs in place).", monitor: "Job/gig placement at 3 and 6 months; % with working payment accounts", risk: "Accounts opened but no earnings; response: mentorship to win a first client" },
      { link: "Outcomes → Impact", a: "Income from digital work is steady enough to support a livelihood, and policy stays supportive.", monitor: "Monthly income; % earning above a set threshold; policy scanning", risk: "Irregular gig income or new restrictions; response: diversify platforms, engage partners on policy" }
    ]
  },

  // Method badges shown under the Theory of Change
  methods: ["Systems-informed MEL", "Market Systems Development (MSD)", "OECD-DAC criteria", "Baseline · Midline · Endline",
    "Mixed methods (KIIs, FGDs)", "Outcome harvesting", "Contribution analysis", "Data Quality Assessments (DQA)",
    "Results-Based Management", "Indicator reference sheets (PIRS)", "Adaptive management & learning"],

  /* ---------- Career timeline (newest first) ---------- */
  timeline: [
    { when: "Jun – Jul 2026", role: "MEL Consultant", org: "Institute of Applied Studies and Research (IASR) · SEMA II Project, in partnership with KALRO", where: "Makueni County",
      points: ["Led the design and implementation of the project's MEL framework using a systems-thinking and Market Systems Development (MSD) lens, tracking farmers' interactions with value-chain actors and support services alongside farm-level outcomes",
        "Designed KoboToolbox tools, sampling and survey protocols; coordinated data collection for 659 smallholder farmers and trained field teams",
        "Cleaned and validated the master dataset (659 records, 226 variables) with Excel, Power Query and Python (pandas); built an interactive Power BI dashboard",
        "Produced a technical report and 14-slide presentation with recommendations for programme management",
        "Worked with project staff, KALRO researchers, extension officers and communities to strengthen data collection and evidence use"] },
    { when: "Apr 2020 – Mar 2026", role: "Regional MEL Lead", org: "eMobilis Technology Training Institute · Ajira Digital Programme (funded by Mastercard Foundation)", where: "South Rift Region",
      points: ["Led the MEL system across multiple sites, applying systems thinking to map how youth, training providers, employers and online work platforms interact",
        "Applied MSD principles to track uptake and practice change among partners and market actors, informing adaptive management and scale-up",
        "Improved data accuracy by 25% and achieved 100% donor reporting compliance through results frameworks, digital tools, DQAs and verification visits",
        "Built Power BI dashboards that cut reporting turnaround time by 40%",
        "Facilitated pause-and-learn sessions, outcome harvesting and contribution analysis; trained 30+ staff, partners and stakeholders"] },
    { when: "Aug – Sep 2019", role: "Enumerator Coordinator and Trainer", org: "Kenya National Bureau of Statistics (KNBS) · 2019 Kenya Population and Housing Census", where: "Kenya",
      points: ["Trained and coordinated census enumerators on digital data collection procedures, supporting field teams to meet data quality and coverage standards"] },
    { when: "Mar – Jul 2019", role: "Project Coordinator", org: "National Integrated Identity Management System (NIIMS) · digital biometric registration", where: "Bureti Sub-county, Kericho County",
      points: ["Trained and supervised enumerators on digital biometric registration, coordinating field teams and monitoring registration progress and data quality"] },
    { when: "Mar 2018 – Mar 2019", role: "ICT Officer", org: "ICT Authority · Digital Literacy Programme (with Kenya News Agency ICT support)", where: "Kenya",
      points: ["Provided ICT support for the national Digital Literacy Programme, maintaining devices and systems and supporting users"] }
  ],

  /* ---------- Projects / case studies ---------- */
  // sector: used for filter chips. tools: used for the skills explorer.
  // chart: optional mini chart shown in the case-study window (illustrative).
  projects: [
    {
      id: "ajira", title: "Ajira Digital Programme: regional MEL system", org: "eMobilis · Mastercard Foundation", year: "2020–2026",
      sector: "Youth employment", tools: ["Power BI", "KoboToolbox", "Excel", "MEL frameworks"],
      summary: "Six years leading MEL for a youth digital-jobs programme across the South Rift, with a systems-informed, MSD lens.",
      problem: "Data from distributed sites arrived late and in different formats, and the programme needed to see change in the wider system (training providers, employers, online platforms), not just outputs.",
      built: "A results framework and indicators, digital data collection tools, routine DQAs and verification visits, Power BI dashboards, and learning routines (pause-and-learn, outcome harvesting, contribution analysis).",
      result: "Data accuracy up 25%, reporting turnaround down 40%, 100% donor reporting compliance, and 30+ staff and partners trained.",
      chart: { type: "bar", label: "Change after MEL system (%)", labels: ["Data accuracy", "Reporting speed", "Donor compliance"], data: [25, 40, 100] }
    },
    {
      id: "sema", title: "SEMA II horticulture MEL & dashboard", org: "IASR · KALRO", year: "2026",
      sector: "Agriculture", tools: ["Power BI", "Python", "KoboToolbox", "GIS"],
      summary: "A systems-informed MEL framework and Power BI dashboard built from 659 farmer interviews in Makueni County.",
      problem: "The programme needed to track farmers' links with value-chain actors and extension alongside farm-level outcomes, from a large survey with 226 variables.",
      built: "A MEL framework with an MSD lens, KoboToolbox tools and sampling, a cleaning workflow in Excel, Power Query and Python, and a Power BI dashboard (overview, outcomes, farmer profiles, practices, geography).",
      result: "Findings delivered as a technical report and 14-slide presentation, with recommendations for programme management.",
      chart: { type: "doughnut", label: "Dataset processed", labels: ["Records (farmers)", "Variables"], data: [659, 226] }
    },
    {
      id: "niims", title: "NIIMS national registration (Huduma Namba)", org: "Government of Kenya", year: "2019",
      sector: "Government", tools: ["Field data systems", "Training"],
      summary: "Project Coordinator for digital biometric registration in Bureti Sub-county, Kericho County.",
      problem: "Residents had to be registered digitally in a short window, using new devices and newly hired enumerators.",
      built: "Enumerator training and supervision, coordination of field teams, and monitoring of registration progress and data quality.",
      result: "Field teams were trained, coordinated and monitored for progress and data quality throughout the exercise.",
      chart: null
    },
    {
      id: "census", title: "2019 Kenya Population & Housing Census", org: "Kenya National Bureau of Statistics", year: "2019",
      sector: "Government", tools: ["Field data systems", "Training"],
      summary: "Enumerator Coordinator and Trainer for Kenya's first digital census.",
      problem: "Census enumerators needed to collect data digitally to national quality and coverage standards.",
      built: "Training and coordination of enumerators on digital data collection procedures.",
      result: "Field teams supported to meet data quality and coverage standards.",
      chart: null
    },
    {
      id: "chepalungu", title: "Chepalungu Forest: community fodder & conservation design", org: "The Golden Abosi Kapsosurwo CBO", year: "2026",
      sector: "Environment", tools: ["MEL frameworks", "Theory of Change"],
      summary: "Project design and MEL framework to reduce grazing pressure on Chepalungu Forest, Bomet County.",
      problem: "Livestock grazing is degrading an important but unprotected forest, and farmers lack fodder in dry seasons.",
      built: "A theory of change, results framework and proposal combining fodder demonstration plots, lead-farmer learning, conservation education and dialogue with forest authorities.",
      result: "Proposals prepared for conservation funders on behalf of the CBO, which I co-founded.",
      chart: null
    },
    {
      id: "poultry", title: "Golden ABC poultry project: theory of change", org: "Golden ABC, Litein", year: "2026",
      sector: "Agriculture", tools: ["MEL frameworks", "Theory of Change"],
      summary: "Theory of change and results framework in EU intervention-logic format for a village poultry enterprise.",
      problem: "The project needed a clear results chain and indicators that funders would recognise.",
      built: "An EU-style intervention logic with outcomes, outputs, indicators, means of verification and assumptions.",
      result: "A funder-ready results framework the group can use for reporting.",
      chart: null
    }
  ],

  /* ---------- Skills: each tool is backed by projects and/or a certificate ---------- */
  // The case studies that used a tool are found automatically from each project's "tools" list.
  // evidence = extra proof (certificate or where you used it) shown on the tool's card.
  skills: [
    { name: "MEL frameworks", evidence: "Certified in Results-Based Management and in Theory of Change & Results Frameworks" },
    { name: "Power BI", evidence: "Certified: Microsoft Power BI Desktop for Business Intelligence" },
    { name: "KoboToolbox", evidence: "Certified: KoboToolbox Data Collection and Management" },
    { name: "Excel", evidence: "Certified: Advanced Microsoft Excel for Data Analysis" },
    { name: "Python", evidence: "pandas cleaning workflow for the 659 × 226 SEMA II dataset" },
    { name: "SPSS / STATA", evidence: "Certified: SPSS for Data Analysis and Research" },
    { name: "GIS", evidence: "Geography page of the SEMA II Power BI dashboard" },
    { name: "Make.com", evidence: "Scheduled, API-driven automation workflows built in personal projects" }
  ],

  /* ---------- Places on the map ---------- */
  places: [
    { name: "Nairobi", lat: -1.2864, lng: 36.8172, note: "Home base · MEL consulting" },
    { name: "Makueni County", lat: -1.8036, lng: 37.6203, note: "SEMA II horticulture survey & dashboard (2026)" },
    { name: "South Rift region", lat: -0.3031, lng: 36.0800, note: "Ajira Digital Programme, Regional MEL Lead (2020–2026)" },
    { name: "Bureti, Kericho County", lat: -0.5850, lng: 35.1900, note: "NIIMS digital registration, Project Coordinator (2019)" },
    { name: "Chepalungu Forest, Bomet", lat: -0.9300, lng: 35.2300, note: "Community conservation project design (2026)" },
    { name: "Kapsosurwo, Sotik", lat: -0.6800, lng: 35.1200, note: "The Golden Abosi Kapsosurwo CBO (co-founder)" }
  ],

  /* ---------- Testimonials (shown under the case studies) ---------- */
  // Copy recommendations word for word from LinkedIn.
  testimonials: [
    { quote: "Nelson is a natural leader with a wealth of knowledge in consulting, training, strategy and the digital space. He follows through and is an ever present figure in each step of the journey. Nelson's tenacity seeps through everything that he touches and any organization/individual will be privileged to tap into his skillset.",
      name: "Akoko Achieng", role: "Customer Experience Leader · CX Strategy", date: "November 2021", source: "LinkedIn recommendation" }
  ],
  testimonialsLink: "https://www.linkedin.com/in/nelsonmitei/details/recommendations/",

  /* ---------- Gallery ("Work in action") ---------- */
  // Faces and client figures are blurred on purpose. Add new images to assets/img/gallery/
  gallery: [
    { img: "assets/img/gallery/participatory-learning.webp", title: "Participatory Learning & Adaptation",
      caption: "Participatory learning-focused session with programme participants engaged in group reflection and discussion.", tag: "Learning" },
    { img: "assets/img/gallery/evaluation-dashboard.webp", title: "Evaluation & Data Analysis",
      caption: "Power BI dashboard presenting evaluation findings, agricultural outcomes, yield and income changes, market access and adoption.", tag: "Power BI" },
    { img: "assets/img/gallery/business-analysis.webp", title: "Business Analysis Dashboard",
      caption: "Interactive sales dashboard with profit by product, customer and pricing segment, and country filters.", tag: "Business intelligence" },
    { img: "assets/img/gallery/youth-tracking.webp", title: "Youth Enrolment-to-Employment Tracking",
      caption: "Tracking youth from enrolment to employment: joining, completion, transition to work, barriers and investor return.", tag: "Excel analytics" }
  ],

  certifications: [
    "Core Humanitarian Standard (CHS) on Quality and Accountability", "Results-Based Management (RBM), Monitoring and Evaluation",
    "Theory of Change and Results Framework Development", "Microsoft Power BI Desktop for Business Intelligence",
    "Data Visualisation and Dashboard Development", "KoboToolbox Data Collection and Management", "SPSS for Data Analysis and Research",
    "Advanced Microsoft Excel for Data Analysis", "Fundraising Essentials (Business Development and Grants)",
    "Trainer Certification – Women in Digital Business Initiative", "Business Model Canvas for Agribusinesses",
    "Climate Smart Agribusiness: Adaptation", "Creating an Investment-Ready Agribusiness (ABF)"
  ],

  services: [
    { t: "MEL consultancy", d: "End-to-end MEL support for donor-funded programmes: MEL plans, baselines and endlines, evaluations, data quality assessments and learning reviews." },
    { t: "Power BI dashboards", d: "Programme and donor dashboards built from your Excel, Kobo or survey data." },
    { t: "Survey data cleaning & analysis", d: "Clean, deduplicated, analysis-ready datasets with a clear report of findings." },
    { t: "Digital data collection", d: "KoboToolbox, ODK and CommCare forms with built-in validation and skip logic." },
    { t: "MEL systems & frameworks", d: "Theories of change, logframes, indicator sheets and MEL plans that donors recognise." },
    { t: "Reporting automation", d: "Make.com and Python workflows that remove repetitive reporting tasks." },
    { t: "Training & capacity building", d: "Hands-on training for staff, partners, enumerators and entrepreneurs." }
  ]
};
