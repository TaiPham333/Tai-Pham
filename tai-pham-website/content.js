/* ====================================================================
   EDIT YOUR WEBSITE HERE
   Everything you see on the page comes from this file.
   Change the text between the quotation marks, save, and refresh.
   Keep the quotation marks, commas and brackets as they are.
   ==================================================================== */

const SITE = {

  /* ---- General ---- */
  name: "Tai Pham",                       // shown in the top bar
  linkedin: "https://www.linkedin.com/in/tai-pham-716729139/",
  email: "dacanhtai.pham@gmail.com",                              // add your email to show an email icon and enable the Email button
  footer: "Tai Pham",                     // footer text (the year is added automatically)

  /* ---- Pictures ---- */
  // Replace the files in the "images" folder with your own (same file names),
  // or change the file names below.
  profileImage: "images/profile.jpg",     // your profile picture (square works best)
  profileAlt: "Illustrated portrait of Tai Pham",
  backgroundImage: "images/background.jpg", // blurred picture behind your intro

  /* ---- Intro (top of page): each line is its own paragraph ---- */
  about: [
    "I'm Tai, a Data Analyst based in Milton, Australia, working in automotive finance industry.",
    "I enjoy turning complex data into stories, building dashboards people actually use, and finding better ways to work with data.",
    "SKILLS: SQL, Python, SAS, Advanced Excel, PowerBI, DAX, Microsoft Fabrics, Jira, Power Automate, Azure Factory."
  ],

  /* ---- Menu labels ---- */
  nav: { about: "About", work: "Work", career: "Career", contact: "Contact" },

  /* ---- Work section ---- */
  work: {
    title: "Work",
    note: "Select a project to view the dashboard, screenshots or analysis. Work shown uses anonymised or sample data.",
    allLabel: "All",
    interactiveLabel: "Interactive",       // filter that appears when a project has an embed link
    noImageText: "Screenshot coming soon",
    interactiveCardText: "Interactive project - click to explore",
    interactiveHint: "Interactive project. If it does not load, open it in a new tab.",
    openProjectButton: "Open full project",
    openNewTabButton: "Open in new tab",
    fullscreenButton: "Fullscreen"
  },

  /* ---- Career section ---- */
  career: { title: "Career", nowLabel: "NOW" },

  /* ---- Contact section ---- */
  contact: {
    title: "Contact",
    text: "Have a question or want to work together? Get in touch.",
    linkedinButton: "Connect on LinkedIn",
    emailButton: "Email me",
    emailSubject: "Website enquiry",
    noEmailMessage: "Email address not set yet. Add it to 'email' at the top of content.js."
  }
};


/* ====================================================================
   YOUR PROJECTS  (the cards in the Work section)
   Copy one { ... } block to add a project. Remove a block to delete it.

   title     name of the project
   type      a group name, e.g. "Dashboard", "Analytics", "Automation".
             Each different type becomes a filter button.
   desc      short description
   tools     list of tools used
   image     screenshot, e.g. "images/projects/dashboard1.png" (optional)
   embed     link to an interactive page to show inside the site (optional).
             Use your GitHub Pages address, e.g.
             "https://yourname.github.io/your-repo/"   (must start with https://)
   link      a page with the full project (optional)

   Only use anonymised or sample data. Check with your employer before
   publishing anything from work.
   ==================================================================== */

const PROJECTS = [
  {
    title: "Amazon Sales Performance Claude Dashboard",
    type: "Dashboard",
    desc: "Interactive Claude dashboard tracking sales of Amazon by products and campaigns.",
    tools: ["Claude", "Excel", "AI"],
    image: "images/claude.png", embed: "https://taipham333.github.io/Amazon-Sales/", link: "https://taipham333.github.io/Amazon-Sales/"
  },
  {
    title: "Sales Performance",
    type: "Dashboard",
    desc: "PowerBI dashboard monitor revenue performance by countries and categories.",
    tools: ["Excel", "SQL", "Power BI"],
    image: "images/Powerbi.png", embed: "", link: ""
  },
  {
    title: "Bank Customer Churn Prediction",
    type: "Analytics",
    desc: "Predictive Models build to predict customer who is likely churn",
    tools: ["Python", "Machine Learning", "Predictive Modelling"],
    image: "images/churn.png",
    embed: "",            // <-- paste your GitHub Pages link here
    link: "https://github.com/TaiPham333/Bank_Churn_Prediction/blob/main/Banking%20Customer%20Churn%20Analysis%20%26%20Prediction.ipynb"
  },
  {
    title: "Airbnb House Price Prediction",
    type: "Analytics",
    desc: "Predictive Models build to predict Airbnb house prices per night",
    tools: ["Python", "Machine Learning", "Predictive Modelling"],
    image: "images/airbnb.png",
    embed: "",            // <-- paste your GitHub Pages link here
    link: "https://github.com/TaiPham333/Airbnb-Price-Prediction/blob/main/Group_Assignment_46159223.ipynb"
  }
];


/* ====================================================================
   YOUR CAREER TIMELINE  (newest first)
   Copy one { ... } block to add a stage.

   kind     "work" or "edu"   (sets the colour)
   date     any text, e.g. "Jul 2022 – Apr 2024"
   now      true for your current role (shows the NOW tag), otherwise leave out
   title    job title or qualification
   org      company or university
   desc     one or two sentences
   points   optional bullet points
   ==================================================================== */

const CAREER_KINDS = {
  work: { label: "Work",      color: "#e65b8a" },
  edu:  { label: "Education", color: "#4fb3bf" }
};

const CAREER = [
  {
    kind: "work",
    date: "Aug 2024 – Present",
    now: true,
    title: "Sales Data Analyst",
    org: "Toyota Finance Australia",
    desc: "Build Power BI and Excel reporting that turns sales, contract and dealership data into commercial insights across a network of more than 130 dealerships.",
    points: [
      "Automated recurring reporting, saving over 3,000 hours a year",
      "Built Power Automate workflows and dashboards across multiple regions",
      "Recognised with an organisation-wide Silver Award"
    ]
  },
  {
    kind: "work",
    date: "Jul 2022 – Apr 2024",
    title: "Data Analyst",
    org: "Shinhan Bank, Ho Chi Minh City",
    desc: "Delivered end-to-end analytics and BI using SQL, SAS, Python, PySpark, Tableau and Power BI, and designed automated KPI dashboards.",
    points: [
      "Built predictive models for customer acquisition and retention",
      "Improved ETL processes and data quality controls",
      "Automation delivered annual savings above AUD 150K"
    ]
  },
  {
    kind: "edu",
    date: "2022",
    title: "Master of Business Analytics",
    org: "Macquarie University, Sydney",
    desc: "Moved into data and analytics: data visualisation, predictive analytics, machine learning and big data.",
    points: ["WAM of 81/100", "AUD 20,000 in scholarships"]
  },
  {
    kind: "edu",
    date: "2019",
    title: "Bachelor of Business (Accounting and Finance)",
    org: "University of Technology Sydney",
    desc: "Built a foundation in financial accounting, financial statement analysis, audit, and commercial and investment banking."
  }
];
