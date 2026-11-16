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
    brand: "MEL Genius",
    title: "Monitoring, Evaluation, Research & Learning (MERL) Specialist",
    tagline: "Turning programme data into decisions.",
    roles: ["MEL Specialist", "Power BI Developer", "Data Systems Builder", "Results Framework Designer", "Automation Builder"],
    location: "Nairobi, Kenya",
    summary:
      "I design results frameworks, build digital data systems and turn messy field data into dashboards that donors and programme teams actually use. Over 6+ years I have delivered MEL on programmes funded by the Mastercard Foundation, USAID, FCDO, the EU, the World Bank, the UN, the ILO and the Government of Kenya.",
    photo: "", // e.g. "assets/img/nelson.jpg"; leave empty to show initials
    cv: "assets/Nelson-Mitei-CV.pdf", // add your CV PDF with this exact name
    email: "mcmitey@gmail.com",
    phone: "+254712358810",
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

  kpis: [
    { value: 6, suffix: "+", label: "Years in MEL & data" },
    { value: 8, suffix: "", label: "Funders & donors served" },
    { value: 380, suffix: "+", label: "Field staff & enumerators trained" },
    { value: 659, suffix: "", label: "Farmers in one survey I led" },
    { value: 40, suffix: "%", label: "Faster reporting with Power BI" },
    { value: 100, suffix: "%", label: "Donor reporting compliance" }
  ],

  donors: ["Mastercard Foundation", "USAID", "FCDO", "European Union", "World Bank", "United Nations", "ILO", "Government of Kenya"],

  /* ---------- Theory of Change: my career as a results chain ---------- */
  toc: [
    { col: "Inputs", items: [
      { id: "i1", t: "ICT foundation", d: "Three national ICT roles (2018–2019): ICT Authority Digital Literacy Programme, NIIMS biometric registration and the KNBS 2019 Census. This is where I learnt to run large field data operations.", to: ["a2", "a3"] },
      { id: "i2", t: "MSc Monitoring & Evaluation", d: "MSc Monitoring & Evaluation (JKUAT) and BSc Business Information Management (Kisii University), plus certifications in RBM, Theory of Change and Results Frameworks.", to: ["a1"] },
      { id: "i3", t: "Data toolkit", d: "Power BI (Power Query, DAX), advanced Excel, Python, KoboToolbox, ODK, CommCare, SPSS, STATA, GIS and Make.com.", to: ["a2", "a4", "a5"] }
    ]},
    { col: "Activities", items: [
      { id: "a1", t: "Design results frameworks", d: "Theories of change, logframes (including EU intervention logic), indicator reference sheets and MEL plans.", to: ["o2"] },
      { id: "a2", t: "Build digital data collection", d: "Mobile survey tools in KoboToolbox, ODK and CommCare, with validation built in so errors are caught in the field.", to: ["o3", "o4"] },
      { id: "a3", t: "Train & supervise field teams", d: "Enumerator training, supervision and data quality assurance on national exercises and county surveys.", to: ["o3", "o4"] },
      { id: "a4", t: "Clean & analyse data", d: "Python, SPSS and STATA workflows for cleaning, deduplication and analysis of large survey datasets.", to: ["o1", "o4"] },
      { id: "a5", t: "Visualise & automate", d: "Power BI dashboards and Make.com automations that remove manual reporting work.", to: ["o1"] }
    ]},
    { col: "Outputs", items: [
      { id: "o1", t: "Decision dashboards", d: "Power BI dashboards for programme teams and donors, including the SEMA II horticulture dashboard and Ajira Digital reporting.", to: ["c1"] },
      { id: "o2", t: "Compliant donor reports", d: "Every Ajira Digital report submitted on time and to standard (100% compliance).", to: ["c2"] },
      { id: "o3", t: "Skilled teams", d: "30+ staff and partners trained on MEL systems; 380+ enumerators and data-capture staff trained on national exercises.", to: ["c2", "c3"] },
      { id: "o4", t: "Clean, trusted datasets", d: "For example the 659-farmer, 226-variable SEMA II master dataset.", to: ["c1", "c3"] }
    ]},
    { col: "Outcomes", items: [
      { id: "c1", t: "40% faster reporting", d: "Dashboards cut reporting turnaround time by 40% on the Ajira Digital Programme.", to: ["m1"] },
      { id: "c2", t: "+25% data accuracy", d: "Results frameworks and data quality assurance raised data accuracy by 25%.", to: ["m1"] },
      { id: "c3", t: "Evidence-led decisions", d: "Programme managers adjust activities based on what the data shows, not guesswork.", to: ["m1"] }
    ]},
    { col: "Impact", items: [
      { id: "m1", t: "Programmes that improve lives", d: "Youth in digital work, smallholder farmers with better yields, and communities protecting their forests, all supported by evidence.", to: [] }
    ]}
  ],

  /* ---------- Career timeline (newest first) ---------- */
  timeline: [
    { when: "Jun – Jul 2026", role: "MEL Consultant", org: "Institute of Applied Studies & Research (IASR) · SEMA II Project, KALRO partnership", where: "Makueni County",
      points: ["Led end-to-end design and implementation of the project's MEL framework", "Designed digital tools, sampling and survey protocols; coordinated data collection for 659 smallholder farmers", "Cleaned, validated and analysed the data; built interactive Power BI dashboards", "Prepared technical reports and presentations, and facilitated learning and reflection sessions"] },
    { when: "Apr 2020 – Mar 2026", role: "Regional MEL Lead", org: "eMobilis Technology Training Institute · Ajira Digital Programme (Mastercard Foundation)", where: "Rift Valley region",
      points: ["Improved data accuracy by 25% and achieved 100% donor reporting compliance through results frameworks, digital tools and DQA", "Built Power BI dashboards that cut reporting turnaround time by 40%", "Ran routine data quality assessments, verification visits and performance reviews", "Trained 30+ staff, partners and stakeholders on MEL systems and evidence use"] },
    { when: "Aug – Sep 2019", role: "ICT Supervisor", org: "Kenya National Bureau of Statistics (KNBS) · 2019 Population & Housing Census", where: "Kericho County",
      points: ["Led a team of 50 ICT specialists supporting census field operations", "Trained 150 enumerators on ICT tools, data collection protocols and field procedures", "Achieved 95% data accuracy through equipment audits and quality checks", "Digital collection processes cut collection time by 30%"] },
    { when: "Mar – Jul 2019", role: "ICT Project Coordinator", org: "National Integrated Identity Management System (NIIMS) · Ministry of Interior", where: "Bureti Sub-county",
      points: ["Trained 230+ data-capture staff on registration procedures and data quality standards", "Cut data discrepancies by 20% through validation and quality control", "Resolved operational challenges 80% faster through stronger field reporting", "90% positive stakeholder feedback"] },
    { when: "Mar 2018 – Mar 2019", role: "ICT Officer", org: "ICT Authority · Digital Literacy Programme", where: "Bomet County",
      points: ["Trained 60 teachers in Google Workspace and digital tools", "Assessed 70+ educational materials for digital suitability and accessibility"] }
  ],

  /* ---------- Projects / case studies ---------- */
  // sector: used for filter chips. tools: used for the skills explorer.
  // chart: optional mini chart shown in the case-study window (illustrative).
  projects: [
    {
      id: "ajira", title: "Ajira Digital Programme: regional MEL system", org: "eMobilis · Mastercard Foundation", year: "2020–2026",
      sector: "Youth employment", tools: ["Power BI", "KoboToolbox", "Excel", "MEL frameworks"],
      summary: "Six years leading MEL for a flagship youth digital-jobs programme across the South Rift.",
      problem: "Regional data arrived late, in different formats, with errors that took days to fix before every donor report.",
      built: "A results framework with clear indicators, digital data collection tools, a data quality assurance routine, and Power BI dashboards for regional and donor reporting.",
      result: "Data accuracy up 25%, reporting turnaround down 40%, 100% donor reporting compliance, and 30+ staff and partners trained.",
      chart: { type: "bar", label: "Change after MEL system (%)", labels: ["Data accuracy", "Reporting speed", "Donor compliance"], data: [25, 40, 100] }
    },
    {
      id: "sema", title: "SEMA II horticulture dashboard", org: "IASR · KALRO", year: "2026",
      sector: "Agriculture", tools: ["Power BI", "Python", "KoboToolbox", "GIS"],
      summary: "From 659 farmer interviews to a four-page Power BI dashboard for a Makueni County horticulture programme.",
      problem: "A large survey (659 farmers, 226 variables) with inconsistent entries, mixed data types and a gap in photo evidence.",
      built: "A Python cleaning workflow, a Power BI dashboard (Overview, Outcomes, Farmer Profiles, Agricultural Practices) with county maps, and a script that uploaded 626 field photos automatically.",
      result: "Programme staff can explore outcomes by ward, gender and practice in minutes; findings were delivered as a presentation and report.",
      chart: { type: "doughnut", label: "Dataset processed", labels: ["Farmers surveyed", "Photos uploaded by script"], data: [659, 626] }
    },
    {
      id: "niims", title: "NIIMS national registration (Huduma Namba)", org: "Ministry of Interior · Government of Kenya", year: "2019",
      sector: "Government", tools: ["Field data systems", "Training"],
      summary: "Coordinated digital population registration in Bureti Sub-county and trained 230+ data-capture staff.",
      problem: "Residents had to be registered digitally in a short window, using new devices and newly hired staff.",
      built: "Training for 230+ data-capture staff, a field reporting and issue-resolution routine, and data validation and quality control.",
      result: "Data discrepancies down 20%, operational issues resolved 80% faster, and 90% positive stakeholder feedback.",
      chart: { type: "bar", label: "Improvement (%)", labels: ["Fewer data discrepancies", "Faster issue resolution", "Positive feedback"], data: [20, 80, 90] }
    },
    {
      id: "census", title: "2019 Kenya Population & Housing Census", org: "Kenya National Bureau of Statistics", year: "2019",
      sector: "Government", tools: ["Field data systems", "Training"],
      summary: "ICT supervision in Kericho County for Kenya's first digital census: 50 ICT specialists led, 150 enumerators trained.",
      problem: "Census data captured on tablets needed working devices, secure data handling and fast troubleshooting in the field.",
      built: "Enumerator training, equipment audits, quality checks and a digital collection process, coordinated across a team of 50 ICT specialists.",
      result: "95% data accuracy, with collection time cut by 30%.",
      chart: { type: "bar", label: "Result (%)", labels: ["Data accuracy", "Time saved"], data: [95, 30] }
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
    },
    {
      id: "trendhub", title: "TrendHub Kenya: automated content engine", org: "Personal venture", year: "2026",
      sector: "Automation", tools: ["Make.com", "APIs", "AI"],
      summary: "A Facebook page that publishes 9 AI-written posts a day with no manual work.",
      problem: "Running a daily news page by hand takes hours every day.",
      built: "A Make.com scenario linking RSS feeds, the Claude API and the Facebook Graph API, triggered on a schedule.",
      result: "Nine posts a day across three time slots, fully automated. The same skills apply to automating M&E reporting.",
      chart: { type: "bar", label: "Posts per time slot", labels: ["Morning", "Afternoon", "Evening"], data: [3, 3, 3] }
    }
  ],

  /* ---------- Skills (self-rated 0–100; adjust as you like) ---------- */
  skills: [
    { name: "MEL frameworks", level: 95 },
    { name: "Power BI", level: 92 },
    { name: "KoboToolbox", level: 90 },
    { name: "Excel", level: 90 },
    { name: "Python", level: 70 },
    { name: "SPSS / STATA", level: 78 },
    { name: "GIS", level: 65 },
    { name: "Make.com", level: 80 }
  ],

  /* ---------- Places on the map ---------- */
  places: [
    { name: "Nairobi", lat: -1.2864, lng: 36.8172, note: "Home base · MEL Genius consulting" },
    { name: "Makueni County", lat: -1.8036, lng: 37.6203, note: "SEMA II horticulture survey & dashboard (2026)" },
    { name: "South Rift region", lat: -0.3031, lng: 36.0800, note: "Ajira Digital Programme, Regional MEL Lead (2020–2026)" },
    { name: "Bureti, Kericho County", lat: -0.5850, lng: 35.1900, note: "NIIMS registration coordination (2019)" },
    { name: "Chepalungu Forest, Bomet", lat: -0.9300, lng: 35.2300, note: "Community conservation project design (2026)" },
    { name: "Kapsosurwo, Sotik", lat: -0.6800, lng: 35.1200, note: "The Golden Abosi Kapsosurwo CBO (co-founder)" }
  ],

  /* ---------- Gallery ("Work in action") ---------- */
  // Faces and client figures are blurred on purpose. Add new images to assets/img/gallery/
  gallery: [
    { img: "assets/img/gallery/participatory-learning.jpg", title: "Participatory Learning & Adaptation",
      caption: "Participatory learning-focused session with programme participants engaged in group reflection and discussion.", tag: "Learning" },
    { img: "assets/img/gallery/evaluation-dashboard.jpg", title: "Evaluation & Data Analysis",
      caption: "Power BI dashboard presenting evaluation findings, agricultural outcomes, yield and income changes, market access and adoption.", tag: "Power BI" },
    { img: "assets/img/gallery/business-analysis.jpg", title: "Business Analysis Dashboard",
      caption: "Interactive sales dashboard with profit by product, customer and pricing segment, and country filters.", tag: "Business intelligence" },
    { img: "assets/img/gallery/youth-tracking.jpg", title: "Youth Enrolment-to-Employment Tracking",
      caption: "Tracking youth from enrolment to employment: joining, completion, transition to work, barriers and investor return.", tag: "Excel analytics" }
  ],

  certifications: [
    "Power BI", "KoboToolbox", "Results-Based Management", "SPSS", "Theory of Change & Results Frameworks",
    "Data Visualization", "Advanced Excel", "Core Humanitarian Standard (CHS)", "Fundraising Essentials"
  ],

  services: [
    { t: "Power BI dashboards", d: "Programme and donor dashboards built from your Excel, Kobo or survey data." },
    { t: "Survey data cleaning & analysis", d: "Clean, deduplicated, analysis-ready datasets with a clear report of findings." },
    { t: "Digital data collection", d: "KoboToolbox, ODK and CommCare forms with built-in validation and skip logic." },
    { t: "MEL systems & frameworks", d: "Theories of change, logframes, indicator sheets and MEL plans that donors recognise." },
    { t: "Reporting automation", d: "Make.com and Python workflows that remove repetitive reporting tasks." },
    { t: "Training & capacity building", d: "Hands-on training for staff, partners and enumerators." }
  ]
};
