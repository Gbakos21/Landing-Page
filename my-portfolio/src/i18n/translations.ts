export type Language = "hu" | "en" | "de";

export type TranslationKey =
  | "navPortfolio"
  | "navProjects"
  | "navLanguageHu"
  | "navLanguageEn"
  | "navLanguageDe"
  | "heroEyebrow"
  | "heroLead1"
  | "heroLead2"
  | "heroCtaCv"
  | "heroCtaProjects"
  | "heroTechFrontend"
  | "heroTechBackend"
  | "heroTechOther"
  | "heroAccentStackTitle"
  | "heroAccentStackValue"
  | "heroAccentStackMeta"
  | "heroAccentFocusTitle"
  | "heroAccentFocusValue"
  | "heroAccentFocusMeta"
  | "proofEyebrow"
  | "proofTitle"
  | "proofLead"
  | "proofLiveTitle"
  | "proofLiveValue"
  | "proofLiveMeta"
  | "proofStackTitle"
  | "proofStackValue"
  | "proofStackMeta"
  | "proofClientTitle"
  | "proofClientValue"
  | "proofClientMeta"
  | "proofExperienceTitle"
  | "proofExperienceValue"
  | "proofExperienceMeta"
  | "projectsEyebrow"
  | "projectsTitle"
  | "projectsLead"
  | "footerEyebrow"
  | "footerTitle"
  | "footerLead"
  | "footerEmail"
  | "footerPhone"
  | "footerLocation"
  | "footerStudies"
  | "footerLinks"
  | "footerLinkedin"
  | "footerGithub"
  | "welcomeTitle"
  | "welcomeArrow"
  | "openProject"
  | "openProjectLabel"
  | "openImageLabel"
  | "closeLabel"
  | "downloadLabel"
  | "downloadAriaLabel"
  | "projectSmurfDesc"
  | "projectAnalyzerDesc"
  | "projectSmartCvDesc"
  | "projectWorkoutDesc"
  | "projectConfigAsCodeDesc"
  | "projectPicPartyDesc"
  | "projectConfigcobraDesc"
  | "projectConfigcobraAppDesc"
  | "projectDigitecholdDesc"
  | "projectKlimaDesc"
  | "projectWeatherDesc"
  | "projectPlaylistDesc"
  | "projectZorkaDesc"
  | "projectFeladatDesc"
  | "projectPlazaDesc"
  | "projectWebshopDesc"
  | "languageTitle"
  | "languageHu"
  | "languageEn"
  | "languageDe"
  | "languageLevelNative"
  | "languageLevelB2"
  | "languageLevelHobby"
  | "languageHuAria"
  | "languageEnAria"
  | "languageDeAria"
  | "certTitle"
  | "certBme"
  | "certNetwork"
  | "certEuropass"
  | "certDriver"
  | "certBoat"
  | "certCiscoDevasc";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  hu: {
    navPortfolio: "Portfolio",
    navProjects: "Projektek",
    navLanguageHu: "Magyar",
    navLanguageEn: "Angol",
    navLanguageDe: "Német",
    heroEyebrow: "Frontend fejlesztő / Full-stack projektek",
    heroLead1:
      "BME VIK-es mérnökinformatikusként végeztem, és már több csapatprojektben is bizonyítottam. Reacttal 1 év tapasztalatom van, HTML + CSS-ben 4-5 évet dolgoztam, ezért szívesen építek letisztult, gyors és megbízható felületeket.",
    heroLead2:
      "A célom, hogy a design elegáns legyen, a használat pedig egyszerű és magától értetődő. Olyan termékeket készítek, amelyek nemcsak szépek, hanem hasznos élményt is adnak.",
    heroCtaCv: "Önéletrajz letöltése",
    heroCtaProjects: "Projektek",
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Egyéb",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Fókusz",
    heroAccentFocusValue: "Reszponzív UI / UX szemlélet",
    heroAccentFocusMeta: "Gyors, stabil megoldások",
    proofEyebrow: "Gyors proof",
    proofTitle: "Valodi projektek, eles tapasztalat",
    proofLead:
      "Nem csak gyakorloprojektek: eles webappok, ugyfelmunka, AI-integracio es frontend/backend tapasztalat egy helyen.",
    proofLiveTitle: "Eles projektek",
    proofLiveValue: "15+",
    proofLiveMeta: "publikus demo es production jellegu app",
    proofStackTitle: "Magabiztos stack",
    proofStackValue: "React · TypeScript · .NET",
    proofStackMeta: "frontend, API, CMS es deployment",
    proofClientTitle: "Projektkornyezet",
    proofClientValue: "BME · Digital Technologies · Digitechold",
    proofClientMeta: "egyetemi, ceges es product projektek",
    proofExperienceTitle: "Tapasztalat",
    proofExperienceValue: "4-5 ev HTML/CSS · 1+ ev React",
    proofExperienceMeta: "UX-kozelii, gyors es tiszta feluletek",
    projectsEyebrow: "Valós munkák",
    projectsTitle: "Kiemelt projektek",
    projectsLead:
      "Production appok, diplomamunka, ügyféloldalak és saját termékötletek egy közös portfólióban.",
    footerEyebrow: "Kapcsolat",
    footerTitle: "Dolgozzunk együtt egy erős, átgondolt terméken",
    footerLead:
      "Ha frontend, full-stack vagy UX-közeli webes projekten dolgozol, szívesen beszélgetek róla. Elérsz e-mailben, telefonon vagy LinkedInen is.",
    footerEmail: "E-mail",
    footerPhone: "Telefon",
    footerLocation: "Helyszín",
    footerStudies: "Jelenlegi tanulmányok",
    footerLinks: "Közösségi linkek",
    footerLinkedin: "LinkedIn",
    footerGithub: "GitHub",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Ugrás a hero szekcióra",
    openProject: "Megnyitás",
    openProjectLabel: "Projekt megnyitása",
    openImageLabel: "Képernyőkép nagyítása",
    closeLabel: "Bezárás",
    downloadLabel: "Letöltés",
    downloadAriaLabel: "letöltése",
    projectSmurfDesc:
      "Egy full-stack miniapp, amely a törpök (Smurfs) adatait jeleníti meg áttekintő statisztikákkal, listákkal és részletes nézetekkel. Frontend: React + TypeScript, Material UI, MUI X chart, React Router; reszponzív felület és dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "Ez a projekt egy webes alkalmazás, amely különböző közösségi platformokról (például Reddit, Google Reviews, X/Twitter, YouTube) származó kommentek automatikus begyűjtését és mesterséges intelligencián alapuló hangulatelemzését végzi. A rendszer a háttérben párhuzamos feldolgozással, üzenetsorok segítségével dolgozza fel a nagy mennyiségű szöveges adatot, majd az eredményeket adatbázisban tárolja és valós időben jeleníti meg egy modern, reszponzív webes felületen grafikonok és statisztikák formájában.",
    projectSmartCvDesc:
      "A SmartCV a BME-n készült diplomadolgozatom, egy AI-alapú önéletrajz-elemző és -optimalizáló webalkalmazás. A rendszer felismeri a CV gyenge pontjait, pontszámokkal értékeli a tartalmat, javítási javaslatokat ad, és szükség esetén optimalizált változatot is készít. A felhasználók Google- vagy Facebook-fiókkal is bejelentkezhetnek, miközben több AI-szolgáltatás is beköthető a folyamatba.",
    projectWorkoutDesc:
      "Ezt az alkalmazást a BME-n a Design a szoftverfejlesztésben című UX-központú tárgyra készítettem. A Workout App egy edzésnapló és fejlődéskövető rendszer, ahol az edzéseket fel lehet jegyezni, lépésről lépésre végig lehet követni, a vizuális naplóban képeket lehet összehasonlítani, és a fejlődés statisztikái is megjelennek. AI is került bele: edzéstervek generálhatók, az előző edzések alapján ajánlások kérhetők, és ezek elfogadásakor a rendszer módosítja az edzéstervet. Elsődlegesen mobilra optimalizáltam, de desktopon is használható.",
    projectConfigAsCodeDesc:
      "Ezt a projektet a Digital Technologies részére készítettem. A cél egy CMS-ből irányítható weboldalrendszer volt, ahol ugyanaz a kódbázis különböző domaineken és adatbázisokkal tud eltérő oldalakat létrehozni a pipeline és build során történő environment‑átírás segítségével. A tartalom és a vizuális megjelenés a CMS-ből vezérelhető, miközben a rendszer automatikusan kezeli a SEO-generálást, a képek optimalizálását, a többnyelvűséget, az e-mail küldést és az értesítéseket. Chatbot is került bele, hogy segítse a látogatókat.",
    projectPicPartyDesc:
      "Ezt a projektet pár barátommal közösen fejlesztem. A PicParty egy party game baráti társaságoknak: a játékosok feltöltik a saját képeiket, majd a játék során ki kell találni, hogy melyik kép kihez tartozik. Közben pontokat lehet gyűjteni, versenyezni egymással, és az egész élmény kifejezetten közös játékra van kihegyezve.",
    projectConfigcobraDesc:
      "Ez a weboldal az app.configcobra SaaS alkalmazás marketing oldala, amelyet a Digitaltechnologies Kft. számára készítettem. A cél az volt, hogy a design szép és letisztult legyen, miközben a lehető legjobb SEO-teljesítményt érje el. Ennek érdekében az eredetileg statikus oldalt SSR-re alakítottam, és több SEO-optimalizáló eszközt használtam, például a beépített Lighthouse-t és az Ahrefs oldalát.",
    projectConfigcobraAppDesc:
      "Ez a projekt egy SaaS alkalmazás, amely Microsoft 365 / Entra tenantok biztonsági és megfelelőségi beállításait vizsgálja. A felhasználó bejelentkezik a Microsoft fiókjával, kiválasztja a releváns standardokat, majd a rendszer lefuttatja az ellenőrzést a tenanton. Az alkalmazás összesíti az eredményeket, megmutatja a megfelelt/nem megfelelt pontokat, részletezi az eltéréseket (misconfigurations), és dashboardon vizuálisan is bemutatja a státuszt és pontszámokat. Másfél évig vettem részt a Digitaltechnologies Kft.-nél vezető frontend programozóként: a frontend kód felügyelete az én feladatom volt, és a jelentős részét én írtam.",
    projectDigitecholdDesc:
      "Ezt a weboldalt a Digitechold Kft.-nek kellett elkészítenem. A portfóliójukat mutatja be, ami eléggé összetett. A projekt különlegessége, hogy rengeteg animációt és interaktív stílust tartalmaz, továbbá Sanity CMS rendszert használ a blogok kezelésére. A megoldás egy modern, Next.js 15 (App Router) alapú, TypeScriptes weboldal, ahol a statikus marketing oldalak és a dinamikus blog tartalmak egy kódbázisban élnek.",
    projectKlimaDesc:
      "Ezt a weboldalt a Digital Technologies Kft. számára kellett elkészítenem, akiknek egyik profilja, hogy klímákkal is kereskednek. A bemutató egy B2B klímanagykereskedelmi landing, amely kifejezetten viszonteladók és kivitelezők igényeire fókuszál: kiemeli az AEVORIN split klímák előnyeit, a megbízható beszállítói hátteret, a volumenes rendelési lehetőségeket és a gyors logisztikát raktárról vagy konténerben. A tartalom bemutatja a kiemelt modellt és annak fő specifikációit, hangsúlyozza a halk működést, az energiahatékonyságot és a Wi‑Fi vezérlést, valamint interaktív elemekkel segíti a döntést, például zajszint‑demóval és havi költségkalkulátorral. A célcsoportok és a partneri támogatás részletesen szerepelnek, így a site egyértelműen kommunikálja a B2B együttműködés előnyeit, miközben erős bizalmi elemeket is ad véleményekkel, GYIK‑kal és teljes elérhetőségi adatokkal.",
    projectWeatherDesc:
      "Modern, reszponzív időjárás-app városnév vagy geolokáció alapján. OpenWeather API, üveg-hatású felület és dinamikus színátmenet. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc:
      "Ez az oldal egy gyakorlás céljából készített, kisebb frontend projekt, amelynek célja egy modern, böngészőalapú zenelejátszó megvalósítása volt. A projekt során egy olyan webes alkalmazás készült, amely képes zenék lejátszására, lejátszási lista kezelésére, borítóképek megjelenítésére, valamint alapvető vezérlési funkciók (lejátszás, szünet, következő/előző szám, némítás, idővonal) használatára. Emellett a lejátszó külső adatforrásokból is képes információkat lekérni az adott zenéről és előadóról. A projekt elsődleges célja a JavaScript, böngésző API-k és modern UI-megoldások gyakorlása volt, nem pedig egy éles rendszer létrehozása.",
    projectZorkaDesc:
      "Ez a projekt egy baráti, hobbi jellegű webes játék, amelyet egy barátom számára készítettem. Az alkalmazás lényege, hogy a felhasználó feltöltheti a kutyájáról készült képeket, majd ezekkel különböző játékokat játszhat. A projekt két fő részből áll: egy memory párosító játékból és egy kirakó (puzzle) játékból, több nehézségi szinttel. A játékok mobilbarátok, hanghatásokat használnak, és a haladás, illetve a feltöltött képek automatikusan mentésre kerülnek a böngészőben.",
    projectFeladatDesc:
      "Ez a projekt a BME-n a \"Design a szoftvertervezésben\" című tárgy keretében készült. A feladat célja egy olyan alkalmazás megtervezése és megvalósítása volt, amely előre meghatározott UX elvek és funkcionális specifikációk alapján készül. A projekt során kiemelt szerepet kapott a felhasználói élmény, az átlátható feladatkezelés, valamint a reszponzív és következetes felület kialakítása. Az elkészült alkalmazás egy feladatkezelő rendszer, amely támogatja a határidők, prioritások, típusok kezelését, értesítéseket, valamint a világos/sötét téma közötti váltást.",
    projectPlazaDesc:
      "Ez a weboldal egy hálózatos technikusi vizsgaremek kisebb részeként készült. A feladat során egy Debrecenben található pláza hálózatának megtervezése volt a cél, amelyhez egy egyszerű, statikus weboldalt kellett készíteni. Az oldal arra szolgált, hogy bemutassa: a saját webszerveren futó weboldal DNS-néven keresztül, böngészőből elérhető, így igazolva a hálózati szolgáltatások helyes működését a tervezett környezetben.",
    projectWebshopDesc:
      "Ez a projekt az ekiegeszitok.hu számára készült gyakorlati megoldás volt, ahol a feladat az volt, hogy több tízezer soros, angol nyelvű Excel termékadatokat automatizált módon magyarra fordítsak. A cél egy olyan script készítése volt, amely ChatGPT API-t használva végzi a fordítást, miközben figyel a márkanevek és terméknevek védelmére, a HTML-tartalom megőrzésére, a duplikációk kiszűrésére, valamint a stabil hibakezelésre. A megoldás grafikus felülettel rendelkezik, támogatja a nagy fájlokat, párhuzamos feldolgozást alkalmaz, és biztonságosan kezeli az API-kulcsot.",
    languageTitle: "Nyelvtudás",
    languageHu: "Magyar",
    languageEn: "Angol",
    languageDe: "Német",
    languageLevelNative: "Anyanyelv",
    languageLevelB2: "B2",
    languageLevelHobby: "Hobbi",
    languageHuAria: "Magyar szint: 5/5",
    languageEnAria: "Angol szint: 3/5",
    languageDeAria: "Német szint: 1/5",
    certTitle: "Végzettségek és tanúsítványok",
    certBme: "BME VIK Mérnökinformatikus BSc diploma",
    certNetwork: "Hálózattervező technikus és rendszergazdai technikus",
    certEuropass: "Europass - Computer system and application operation technician",
    certDriver: "Vezetői engedély",
    certBoat: "Nemzetközi kedvtelési célú kishajó-vezetői tanúsítvány",
    certCiscoDevasc: "Cisco DEVASC fejlesztői tanúsítvány",
  },
  en: {
    navPortfolio: "Portfolio",
    navProjects: "Projects",
    navLanguageHu: "Hungarian",
    navLanguageEn: "English",
    navLanguageDe: "German",
    heroEyebrow: "Frontend developer / Full-stack projects",
    heroLead1:
      "I graduated from BME VIK as a computer engineer and have already contributed to multiple team projects. I have 1 year of React experience and 4-5 years with HTML + CSS, so I enjoy building clean, fast, and reliable interfaces.",
    heroLead2:
      "My goal is elegant design and a simple, intuitive experience. I build products that look good and feel great to use.",
    heroCtaCv: "Download CV",
    heroCtaProjects: "Projects",
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Sonstiges",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Fokus",
    heroAccentFocusValue: "Responsive UI / UX Fokus",
    heroAccentFocusMeta: "Schnelle, stabile Loesungen",
    proofEyebrow: "Quick proof",
    proofTitle: "Real projects, real delivery experience",
    proofLead:
      "Not just practice work: live web apps, client projects, AI integrations, and hands-on frontend/backend delivery.",
    proofLiveTitle: "Live projects",
    proofLiveValue: "15+",
    proofLiveMeta: "public demos and production-style apps",
    proofStackTitle: "Confident stack",
    proofStackValue: "React · TypeScript · .NET",
    proofStackMeta: "frontend, API, CMS, and deployment",
    proofClientTitle: "Project context",
    proofClientValue: "BME · Digital Technologies · Digitechold",
    proofClientMeta: "academic, client, and product work",
    proofExperienceTitle: "Experience",
    proofExperienceValue: "4-5 years HTML/CSS · 1+ year React",
    proofExperienceMeta: "UX-minded, fast, and clean interfaces",
    projectsEyebrow: "Selected work",
    projectsTitle: "Featured projects",
    projectsLead:
      "Production apps, thesis work, client websites, and personal product ideas collected in one portfolio.",
    footerEyebrow: "Contact",
    footerTitle: "Let’s build something thoughtful and well-crafted",
    footerLead:
      "If you are working on a frontend, full-stack, or UX-driven web product, I’d be happy to talk. You can reach me by email, phone, or LinkedIn.",
    footerEmail: "Email",
    footerPhone: "Phone",
    footerLocation: "Location",
    footerStudies: "Current studies",
    footerLinks: "Social links",
    footerLinkedin: "LinkedIn",
    footerGithub: "GitHub",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Jump to hero section",
    openProject: "Open",
    openProjectLabel: "Open project",
    openImageLabel: "Open screenshot",
    closeLabel: "Close",
    downloadLabel: "Download",
    downloadAriaLabel: "download",
    projectSmurfDesc:
      "A full-stack mini app that shows Smurfs data with overview stats, lists, and detailed views. Frontend: React + TypeScript, Material UI, MUI X charts, React Router; responsive UI and dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "A web app that collects comments from multiple platforms (e.g., Reddit, Google Reviews, X/Twitter, YouTube) and runs AI-based sentiment analysis. The system processes large volumes in parallel using message queues, stores results in a database, and shows them in real time with charts and stats in a modern, responsive UI.",
    projectSmartCvDesc:
      "SmartCV is my BME thesis project, an AI-powered web app for resume analysis and optimization. It detects weak points in a CV, scores the content, suggests practical improvements, and can also generate an optimized version when needed. Users can sign in with Google or Facebook, and multiple AI services can be integrated into the workflow.",
    projectWorkoutDesc:
      "I built this app at BME for the UX-focused course Design in Software Development. Workout App is a training log and progress tracking system where users can record workouts, follow sessions step by step, compare photos in a visual journal, and review progress statistics. AI is also integrated: it can generate workout plans, suggest adjustments based on previous sessions, and update the training plan when those recommendations are accepted. The app is optimized primarily for mobile, but it also works on desktop.",
    projectConfigAsCodeDesc:
      "I built this project for Digital Technologies. The goal was to create a CMS-driven website platform where the same codebase can produce different websites, domains, and databases by rewriting environment settings during the pipeline and build process. Styling and content are controlled from the CMS, while SEO generation, image optimization, multilingual support, email sending, and notifications are handled automatically. A chatbot is also integrated to help visitors.",
    projectPicPartyDesc:
      "I am building this project together with a few friends. PicParty is a party game for friend groups: players upload their own photos, then during the game everyone tries to guess which picture belongs to whom. Along the way users can collect points, compete with each other, and enjoy a playful social experience built around shared memories.",
    projectConfigcobraDesc:
      "The marketing site for the app.configcobra SaaS product, built for Digitaltechnologies Kft. The goal was a clean, elegant design with the best possible SEO performance. I converted the original static site to SSR and used multiple SEO tools, including built-in Lighthouse audits and Ahrefs.",
    projectConfigcobraAppDesc:
      "A SaaS application that checks Microsoft 365 / Entra tenant security and compliance settings. Users sign in with Microsoft, select relevant standards, then the system audits the tenant, summarizes pass/fail items, details misconfigurations, and shows status and scores on dashboards. I worked on this for 1.5 years at Digitaltechnologies Kft. as lead frontend, supervising and building most of the frontend code.",
    projectDigitecholdDesc:
      "A modern, complex portfolio website for Digitechold Kft. with lots of animations and interactive styling. Built with Next.js 15 (App Router) and TypeScript, combining static marketing pages with dynamic blog content in one codebase. The blog is powered by Sanity CMS, and Sanity Studio is available under /admin.",
    projectKlimaDesc:
      "Built for Digital Technologies Kft., this is a B2B HVAC wholesale landing page focused on resellers and installers. It highlights the AEVORIN split AC line, reliable supplier background, bulk ordering options, and fast logistics from stock or container. The page presents the flagship model and key specs, emphasizes quiet operation, energy efficiency, and Wi‑Fi control, and supports decision‑making with interactive elements like a noise‑level demo and monthly cost calculator. It also details target audiences and partner support, and reinforces trust with reviews, FAQs, and full contact information.",
    projectWeatherDesc:
      "Modern, responsive weather app using city name or geolocation. OpenWeather API, glassmorphism UI, and dynamic gradients. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc:
      "A small frontend project built for practice, focused on creating a modern, browser-based music player. The app supports playback, playlist management, cover art, and core controls (play/pause, next/previous, mute, timeline). It also fetches metadata about tracks and artists from external sources. The main goal was practicing JavaScript, browser APIs, and modern UI patterns rather than building a production system.",
    projectZorkaDesc:
      "A friendly hobby project I built for a friend. Users can upload photos of their dog and play different games with them. The project has two main parts: a memory matching game and a puzzle game with multiple difficulty levels. The games are mobile-friendly, include sound effects, and progress plus uploaded images are saved in the browser.",
    projectFeladatDesc:
      "This project was developed at BME for the course ƒ?oDesign in Software Designƒ??. The goal was to design and implement an application based on predefined UX principles and functional specifications. The project emphasized user experience, clear task management, and a responsive, consistent UI. The result is a task manager supporting deadlines, priorities, types, notifications, and a light/dark theme switch.",
    projectPlazaDesc:
      "This website was created as a small part of a networking technician exam project. The task was to design the network of a shopping mall in Debrecen and build a simple static website. The site demonstrated that a website hosted on a private server is reachable via DNS from a browser, validating the network services in the planned environment.",
    projectWebshopDesc:
      "A practical solution built for ekiegeszitok.hu, where the task was to automatically translate tens of thousands of English Excel product rows into Hungarian. The goal was a script using the ChatGPT API while protecting brand and product names, preserving HTML content, removing duplicates, and handling errors robustly. The solution includes a GUI, supports large files, runs parallel processing, and safely manages the API key.",
    languageTitle: "Languages",
    languageHu: "Hungarian",
    languageEn: "English",
    languageDe: "German",
    languageLevelNative: "Native",
    languageLevelB2: "B2",
    languageLevelHobby: "Hobby",
    languageHuAria: "Hungarian level: 5/5",
    languageEnAria: "English level: 3/5",
    languageDeAria: "German level: 1/5",
    certTitle: "Education & Certificates",
    certBme: "BME VIK Computer Engineering BSc diploma",
    certNetwork: "Network design technician and system administrator technician",
    certEuropass: "Europass - Computer system and application operation technician",
    certDriver: "Driver license",
    certBoat: "International certificate for operators of pleasure craft",
    certCiscoDevasc: "Certified Cisco DEVASC developer",
  },
  de: {
    navPortfolio: "Portfolio",
    navProjects: "Projekte",
    navLanguageHu: "Ungarisch",
    navLanguageEn: "Englisch",
    navLanguageDe: "Deutsch",
    heroEyebrow: "Frontend developer / Full-stack projects",
    heroLead1:
      "Ich habe mein Studium an der BME VIK als Informatikingenieur abgeschlossen und bereits an mehreren Teamprojekten mitgearbeitet. Mit React habe ich 1 Jahr Erfahrung, mit HTML + CSS 4-5 Jahre. Ich baue gerne klare, schnelle und zuverlaessige Oberflaechen.",
    heroLead2:
      "Mein Ziel ist ein elegantes Design und eine einfache, intuitive Nutzung. Ich baue Produkte, die gut aussehen und sich gut anfuehlen.",
    heroCtaCv: "Lebenslauf herunterladen",
    heroCtaProjects: "Projekte",
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Other",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Focus",
    heroAccentFocusValue: "Responsive UI / UX mindset",
    heroAccentFocusMeta: "Fast, stable solutions",
    proofEyebrow: "Schneller Nachweis",
    proofTitle: "Reale Projekte, echte Delivery-Erfahrung",
    proofLead:
      "Nicht nur Uebungsarbeiten: Live-Webapps, Kundenprojekte, AI-Integrationen und praktische Frontend/Backend-Erfahrung.",
    proofLiveTitle: "Live-Projekte",
    proofLiveValue: "15+",
    proofLiveMeta: "oeffentliche Demos und produktionsnahe Apps",
    proofStackTitle: "Sicherer Stack",
    proofStackValue: "React · TypeScript · .NET",
    proofStackMeta: "Frontend, API, CMS und Deployment",
    proofClientTitle: "Projektumfeld",
    proofClientValue: "BME · Digital Technologies · Digitechold",
    proofClientMeta: "Hochschule, Kundenarbeit und Produktprojekte",
    proofExperienceTitle: "Erfahrung",
    proofExperienceValue: "4-5 Jahre HTML/CSS · 1+ Jahr React",
    proofExperienceMeta: "UX-orientierte, schnelle und klare Interfaces",
    projectsEyebrow: "Ausgewaehlte Arbeiten",
    projectsTitle: "Ausgewaehlte Projekte",
    projectsLead:
      "Produktionsnahe Apps, Abschlussarbeit, Kundenwebsites und eigene Produktideen in einem Portfolio.",
    footerEyebrow: "Kontakt",
    footerTitle: "Lass uns gemeinsam ein starkes Produkt bauen",
    footerLead:
      "Wenn du an einem Frontend-, Full-Stack- oder UX-nahen Webprojekt arbeitest, spreche ich gern mit dir darueber. Du erreichst mich per E-Mail, Telefon oder LinkedIn.",
    footerEmail: "E-Mail",
    footerPhone: "Telefon",
    footerLocation: "Standort",
    footerStudies: "Aktuelles Studium",
    footerLinks: "Soziale Links",
    footerLinkedin: "LinkedIn",
    footerGithub: "GitHub",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Zum Hero-Bereich springen",
    openProject: "Oeffnen",
    openProjectLabel: "Projekt oeffnen",
    openImageLabel: "Screenshot oeffnen",
    closeLabel: "Schliessen",
    downloadLabel: "Herunterladen",
    downloadAriaLabel: "herunterladen",
    projectSmurfDesc:
      "Eine Full-Stack-Mini-App mit Smurf-Daten: Uebersicht, Statistiken, Listen und Detailansichten. Frontend: React + TypeScript, Material UI, MUI X Charts, React Router; responsive UI und Dark Mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "Eine Web-App, die Kommentare von mehreren Plattformen (z. B. Reddit, Google Reviews, X/Twitter, YouTube) sammelt und KI-basierte Sentiment-Analysen durchfuehrt. Das System verarbeitet grosse Datenmengen parallel ueber Message Queues, speichert Ergebnisse in einer Datenbank und zeigt sie in Echtzeit mit Charts und Statistiken in einer modernen, responsiven UI.",
    projectSmartCvDesc:
      "SmartCV ist meine BME-Abschlussarbeit, eine KI-gestuetzte Webanwendung zur Analyse und Optimierung von Lebenslaeufen. Die Plattform erkennt Schwachstellen im CV, bewertet Inhalte mit Punkten, gibt konkrete Verbesserungsvorschlaege und kann bei Bedarf eine optimierte Version erzeugen. Nutzer koennen sich mit Google oder Facebook anmelden, waehrend mehrere KI-Dienste in den Ablauf eingebunden werden koennen.",
    projectWorkoutDesc:
      "Diese App habe ich an der BME fuer den UX-orientierten Kurs Design in der Softwareentwicklung erstellt. Workout App ist ein Trainingsprotokoll und Fortschrittstracker, in dem Nutzer Workouts festhalten, Einheiten Schritt fuer Schritt begleiten, Bilder in einem visuellen Journal vergleichen und Entwicklungsstatistiken auswerten koennen. Auch KI wurde integriert: Trainingsplaene koennen generiert werden, auf Basis frueherer Einheiten lassen sich Empfehlungen erzeugen, und nach der Bestaetigung wird der Trainingsplan automatisch angepasst. Die App ist primaer fuer Mobilgeraete optimiert, funktioniert aber auch auf dem Desktop.",
    projectConfigAsCodeDesc:
      "Dieses Projekt habe ich fuer Digital Technologies umgesetzt. Ziel war eine CMS-gesteuerte Website-Plattform, bei der dieselbe Codebasis durch das Umschreiben von Environment-Werten waehrend Pipeline und Build verschiedene Websites mit separaten Domains und Datenbanken erzeugen kann. Inhalte und Styling werden aus dem CMS gesteuert, waehrend SEO-Generierung, Bildoptimierung, Mehrsprachigkeit, E-Mail-Versand und Benachrichtigungen automatisch abgedeckt werden. Zusaetzlich wurde ein Chatbot integriert, um Besucher zu unterstuetzen.",
    projectPicPartyDesc:
      "Dieses Projekt entwickle ich gemeinsam mit ein paar Freunden. PicParty ist ein Partyspiel fuer Freundesgruppen: Die Spieler laden ihre eigenen Bilder hoch, und waehrend des Spiels muss geraten werden, wem welches Bild gehoert. Dabei sammelt man Punkte, tritt gegeneinander an und erlebt ein lockeres Multiplayer-Spiel rund um gemeinsame Erinnerungen.",
    projectConfigcobraDesc:
      "Die Marketing-Seite für die app.configcobra SaaS-Anwendung, erstellt für Digitaltechnologies Kft. Ziel war ein klares, elegantes Design mit bestmöglicher SEO-Performance. Ich habe die ursprünglich statische Seite auf SSR umgestellt und mehrere SEO-Tools genutzt, darunter Lighthouse und Ahrefs.",
    projectConfigcobraAppDesc:
      "Eine SaaS-Anwendung zur Prüfung von Microsoft 365 / Entra Tenant-Sicherheits- und Compliance-Einstellungen. Nutzer melden sich mit Microsoft an, wählen relevante Standards, und das System prüft den Tenant, fasst Pass/Fail zusammen, listet Misconfigurations und zeigt Status sowie Scores im Dashboard. Ich war 1,5 Jahre bei Digitaltechnologies Kft. als Lead-Frontend tätig und habe die Frontend-Codebasis betreut und größtenteils entwickelt.",
    projectDigitecholdDesc:
      "Eine moderne, komplexe Portfolio-Website für Digitechold Kft. mit vielen Animationen und interaktiven Stilen. Next.js 15 (App Router) mit TypeScript, das statische Marketingseiten und dynamische Blog-Inhalte in einer Codebasis vereint. Der Blog nutzt Sanity CMS, das Sanity Studio ist unter /admin erreichbar.",
    projectKlimaDesc:
      "Eine B2B‑Landingpage fuer den Klima‑Grosshandel von Digital Technologies Kft., die sich an Wiederverkaeufer und Installateure richtet. Sie hebt die AEVORIN Split‑Geraete, den zuverlaessigen Lieferhintergrund, Grossbestellungen und schnelle Logistik ab Lager oder per Container hervor. Die Seite stellt das Hauptmodell und Spezifikationen vor, betont leisen Betrieb, Energieeffizienz und WLAN‑Steuerung und nutzt interaktive Elemente wie eine Lautstaerke‑Demo und einen monatlichen Kostenrechner. Zielgruppen und Partner‑Support sind klar beschrieben, Trust wird durch Reviews, FAQ und vollständige Kontaktdaten aufgebaut.",
    projectWeatherDesc:
      "Moderne, responsive Wetter-App mit Stadtname oder Geolocation. OpenWeather API, Glassmorphism UI und dynamische Verlaeufe. HTML5, CSS, Bootstrap, Vanilla JS.",
    projectPlaylistDesc:
      "Ein kleines Frontend-Uebungsprojekt mit dem Ziel, einen modernen browserbasierten Musikplayer umzusetzen. Die App unterstuetzt Wiedergabe, Playlists, Coverbilder und Basisfunktionen (Play/Pause, Naechster/Vorheriger, Mute, Timeline). Zusaetzlich werden Informationen zu Songs und Kuenstlern aus externen Quellen geladen. Ziel war das Ueben von JavaScript, Browser-APIs und modernen UI-Mustern, nicht der Aufbau eines Produktivsystems.",
    projectZorkaDesc:
      "Ein freundschaftliches Hobbyprojekt, das ich fuer einen Freund gebaut habe. Nutzer koennen Fotos ihres Hundes hochladen und damit verschiedene Spiele spielen. Das Projekt besteht aus zwei Teilen: einem Memory-Spiel und einem Puzzle mit mehreren Schwierigkeitsstufen. Die Spiele sind mobilfreundlich, nutzen Soundeffekte und speichern Fortschritt sowie Bilder im Browser.",
    projectFeladatDesc:
      "Dieses Projekt entstand an der BME im Kurs ƒ?zDesign in der Softwaregestaltungƒ?o. Ziel war die Konzeption und Umsetzung einer Anwendung auf Basis vorgegebener UX-Prinzipien und funktionaler Spezifikationen. Im Fokus standen Nutzererlebnis, klare Aufgabenverwaltung sowie eine responsive und konsistente UI. Das Ergebnis ist ein Aufgabenmanager mit Deadlines, Prioritaeten, Typen, Benachrichtigungen und Hell/Dunkel-Modus.",
    projectPlazaDesc:
      "Diese Website entstand als kleiner Teil einer Abschlussarbeit fuer Netzwerk-Techniker. Aufgabe war die Planung des Netzwerks eines Einkaufszentrums in Debrecen und der Bau einer einfachen statischen Website. Die Seite zeigte, dass eine auf einem eigenen Server gehostete Website ueber DNS im Browser erreichbar ist und damit die Netzwerkdienste im geplanten Umfeld korrekt funktionieren.",
    projectWebshopDesc:
      "Eine praktische Loesung fuer ekiegeszitok.hu: Aufgabe war die automatische Uebersetzung zehntausender englischer Excel-Produktdaten ins Ungarische. Ziel war ein Script mit ChatGPT-API, das Markennamen schuetzt, HTML beibehAlt, Duplikate entfernt und Fehler robust behandelt. Die Loesung bietet eine GUI, unterstuetzt grosse Dateien, nutzt Parallelisierung und verwaltet den API-Schluessel sicher.",
    languageTitle: "Sprachen",
    languageHu: "Ungarisch",
    languageEn: "Englisch",
    languageDe: "Deutsch",
    languageLevelNative: "Muttersprache",
    languageLevelB2: "B2",
    languageLevelHobby: "Hobby",
    languageHuAria: "Ungarisch Niveau: 5/5",
    languageEnAria: "Englisch Niveau: 3/5",
    languageDeAria: "Deutsch Niveau: 1/5",
    certTitle: "Abschluesse und Zertifikate",
    certBme: "BME VIK Informatikingenieur BSc Abschluss",
    certNetwork: "Netzwerkplaner und Systemadministrator Techniker",
    certEuropass: "Europass - Computer system and application operation technician",
    certDriver: "Fuehrerschein",
    certBoat: "Internationales Zertifikat fuer Freizeitbootfuehrer",
    certCiscoDevasc: "Zertifizierter Cisco DEVASC Entwickler",
  },
};
