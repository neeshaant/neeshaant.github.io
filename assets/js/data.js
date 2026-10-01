/* =========================================================
   Every word that changes over time lives here.
   ========================================================= */

const CAREER_START = '2019-10-01';

const TICKER = ['Functional Testing','API Testing','Postman','Regression','Smoke & Sanity','Selenium WebDriver','TestNG','Rest Assured',
  'Mobile Testing','BrowserStack','Localization','Accessibility','Datadog','JIRA','UAT','Test Planning'];

const CHIPS = ['Functional','API','Mobile','Regression','Localization','Accessibility','UAT','Agile'];

/* ---------- GROWTH: certifications & courses ----------
   Leave empty to show the placeholder. Add objects like:
   { kind: 'Certification', title: 'Postman API Fundamentals Expert',
     description: 'Issued by Postman. Request building, tests, collections and environments.',
     tags: ['Postman','2024'], url: 'https://badges.parchment.com/...' }       */
const GROWTH = [];

/* ---------- BUILD: things you've built / automated ----------
   Leave empty to show the placeholder. Add objects like:
   { kind: 'Automation framework', title: 'Selenium + TestNG suite for Rev79',
     description: 'Page-object framework covering core LMS workflows, with Extent reports.',
     tags: ['Selenium','Java','TestNG'], url: 'https://github.com/...' }       */
const BUILD = [];

const STACK = [
  { name:'API testing',   items:['Postman','Rest Assured (Java)','Swagger / OpenAPI','JSON schema checks'] },
  { name:'Automation',    items:['Selenium WebDriver','Java','TestNG','Extent Reports'] },
  { name:'Mobile & web',  items:['Android & iOS','Native & hybrid apps','BrowserStack','Cross-browser testing'] },
  { name:'Performance',   items:['JMeter','Datadog APM','Response-time & error-rate checks','Load & stress basics'] },
  { name:'Database',      items:['SQL','MySQL','PostgreSQL','Data integrity checks'] },
  { name:'Test types',    items:['Functional & integration','Smoke & sanity','Regression','Localization & accessibility'] },
  { name:'Tracking',      items:['JIRA','Asana','Trello','Defect lifecycle'] },
  { name:'Process',       items:['Agile / Scrum','Test plans & cases','Release notes','UAT sign-off'] },
];

const ROLES = [
  { title:'QA Engineer', org:'Rubico Tech · Haridwar, Uttarakhand', start:'Oct 2019', end:'Present',
    points:[
      'Design and author test plans and test cases from project requirements across EdTech, FinTech and healthcare domains.',
      'Run API testing in Postman, validating request and response structures, status codes and data integrity.',
      'Execute cross-browser and cross-device testing on BrowserStack for consistent behaviour across environments.',
      'Conduct localization and accessibility testing so products work for global and inclusive audiences.',
      'Review release notes, contribute to project documentation, and take part in sprint planning and retrospectives.',
      'Mentor junior QA engineers on automation and test strategy, and have run 10+ technical interviews.',
      'Support UAT by coordinating with stakeholders and getting timely sign-offs.',
    ] },
];

const PROJECTS = [
  { name:'Gold Athletics', role:'Lead QA', when:'Jul 2024 – Present',
    summary:'A fundraising platform that supports school and team initiatives through web and mobile apps.',
    stack:['Laravel','Vue.js','Flutter (iOS & Android)','Postman'],
    points:['Tested Android and iOS apps after each new feature integration.','Ran API testing in Postman for both admin and mobile features.',
      'Wrote and executed detailed test cases for mobile and admin workflows.','Performed smoke and regression testing across mobile and admin modules.',
      'Reported and tracked defects through to resolution and release readiness.'] },
  { name:'PathWD — a complete business solution', role:'Lead QA', when:'Mar 2024 – Present',
    summary:'A unified operations platform covering CRM, orders, installations, services and warehouse activity, with dynamic workflows, barcode scanning and real-time tracking.',
    stack:['NestJS microservices','Angular','Datadog','Postman'],
    points:['Review frequently used dynamic workflows: bulk vendor emails, e-signing approved bills, document uploads, bulk delivery notes and user notifications.',
      'Use Postman to pinpoint which step of a multi-step workflow is failing.',
      'Monitor response times, 4xx/5xx error rates and failed requests in Datadog, and verify alerts for outages, job failures and queue delays.',
      'Coordinate with the QA team before features go to the product owner.'] },
  { name:'Rev79 — a Three Strands project', role:'Lead QA', when:'Jan 2020 – Mar 2025',
    summary:'A PWA-enabled learning management system live in more than 20 countries.',
    stack:['Ruby on Rails','TypeScript','Vue.js','DevExpress','i18n'],
    points:['Designed and executed manual and automated tests with Selenium WebDriver, Java, TestNG and Extent Reports.',
      'Worked with backend teams in Postman to catch wrong status codes, data mismatches and error-handling gaps.',
      'Ran localization testing in Portuguese, Indonesian, Spanish and French.',
      'Led post-deployment regression and daily automated smoke tests, and verified fixes during UAT.'] },
  { name:'TAND App', role:'QA', when:'Healthcare · 16 countries',
    summary:'A Flutter app for detecting TSC-associated neuropsychiatric disorders, backed by a 35-member consortium spanning WHO regions.',
    stack:['Flutter','Mobile'],
    points:['Developed and executed 300+ positive and negative scenarios to validate the scientific algorithms for clinical accuracy.'] },
  { name:'Paxster', role:'QA', when:'IoT · Norway',
    summary:'A Norwegian electric micro-vehicle project where smart chips stream real-time data to iOS and Android apps.',
    stack:['IoT','iOS','Android','API'],
    points:['API and UI testing for location tracking, battery status, load/unload events and service alerts, ensuring reliable data sync in production.'] },
];

