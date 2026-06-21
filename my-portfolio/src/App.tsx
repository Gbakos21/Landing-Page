import React from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Reveal from "./components/Reveal";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { I18nProvider } from "./i18n/I18nProvider";
import { useI18n } from "./i18n/I18nProvider";

const AppContent: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="page">
      <div className="bg-aurora" />
      <div className="bg-orbs" />
      <div className="bg-noise" />
      <div className="bg-overlay" />

      <Navbar />

      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            px: { xs: 2, md: 6 },
            pb: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Welcome />
          <Reveal>
            <Hero />
          </Reveal>

          <div id="projektek" className="section-anchor" />
          <Reveal>
            <section className="projects-intro" aria-labelledby="projects-title">
              <p className="projects-intro__eyebrow">{t("projectsEyebrow")}</p>
              <h2 id="projects-title">{t("projectsTitle")}</h2>
              <p className="projects-intro__lead">{t("projectsLead")}</p>
            </section>
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Smurf village"
              description={t("projectSmurfDesc")}
              href="https://smurf.gbakos.hu"
              image="/smurf.svg"
              tech={["React", "TypeScript", "MUI", "ASP.NET Core", "REST API"]}
              screenshot="/screenshots/smurf.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="BME Diplomadolgozat"
              description={t("projectAnalyzerDesc")}
              href="https://analyzer.gbakos.hu"
              image="/logos/reddit_analyzer.png"
              tech={[
                "React",
                "TypeScript",
                "Material UI",
                "WebSocket",
                "C#",
                ".NET Core",
                "ASP.NET Core",
                "REST API",
                "Python",
                "BeautifulSoup",
                "Sentiment analysis",
                "Ollama",
                "LM Studio",
                "LLM-ek",
                "RabbitMQ",
                "MySQL",
                "phpMyAdmin",
                "Docker",
                "Reddit",
                "YouTube",
                "Stack Overflow",
                "Google Reviews",
                "X (Twitter)",
                "Gyakori kerdesek",
              ]}
              screenshot="/screenshots/analyzer.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="SmartCV"
              description={t("projectSmartCvDesc")}
              href="https://smartcv.gbakos.hu"
              image="/smartcv-logo.png"
              tech={[
                "C#",
                ".NET",
                "Identity",
                "Entity Framework",
                "React",
                "TypeScript",
                "MUI",
                "Docker",
                "MySQL",
                "phpMyAdmin",
                "Swagger",
                "SignalR",
                "NATS message queue",
                "Nginx reverse proxy",
                "Portainer",
                "OAuth",
                "Google login",
                "Facebook login",
                "AI APIs",
                "Formspree",
                "Cloudflare",
              ]}
              screenshot="/screenshots/smartcv.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Workout App"
              description={t("projectWorkoutDesc")}
              href="https://workout.gbakos.hu"
              image="/logos/workout-logo.png"
              tech={[
                "React Native",
                "Prisma backend",
                "Expo Go",
                "Gemini AI",
              ]}
              screenshot="/screenshots/workout.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Configcobra"
              description={t("projectConfigcobraDesc")}
              href="https://configcobra.com/"
              image="/configcobra-logo.webp"
              tech={[
                "React",
                "TypeScript",
                "Vite",
                "SSR (Vite + Express)",
                "React Router",
                "React Helmet Async",
                "MUI",
                "Emotion",
                "Sanity (Portable Text + GROQ)",
                "MSAL (Azure)",
                "Axios",
                "Lucide React",
                "GA4",
                "Google Tag Manager",
                "Google Search Console",
                "Microsoft Clarity",
                "Formspree",
                "EmailOctopus",
              ]}
              screenshot="/screenshots/configcobra.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="ConfigCobra app"
              description={t("projectConfigcobraAppDesc")}
              href="https://app.configcobra.com/"
              image="/kiscobra-rmbg.svg"
              tech={[
                "React",
                "MSAL (Microsoft Entra)",
                "Microsoft Graph API",
                "Create React App",
                "React Bootstrap",
                "Bootstrap",
                "Chart.js",
                "react-chartjs-2",
                "chartjs-plugin-datalabels",
                "react-circular-progressbar",
                "react-icons",
                "MUI (Material UI)",
                "Emotion",
              ]}
              screenshot="/screenshots/configcobra-app.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Digital technologies"
              description={t("projectDigitecholdDesc")}
              href="https://www.digitechold.com/"
              image="/digitechold-logo.webp"
              tech={[
                "Next.js 15 (App Router)",
                "React 19",
                "TypeScript",
                "Tailwind CSS",
                "MUI (Material UI)",
                "GSAP",
                "Framer Motion",
                "Lenis",
                "Sanity CMS (Sanity Studio, @sanity/client, next-sanity)",
                "GROQ",
                "@portabletext/react",
                "GA4",
                "Google Tag Manager",
                "Google Search Console",
                "Formspree",
                "Docker",
                "ESLint",
              ]}
              screenshot="/screenshots/digitechold.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Config As Code"
              description={t("projectConfigAsCodeDesc")}
              href="https://configascode.com/"
              image="/configascode.svg"
              tech={[
                "PostgreSQL",
                "React",
                "TypeScript",
                "Payload CMS",
                "Azure",
                "CI/CD",
                "Docker",
                "GA4",
                "Microsoft Clarity",
                "GTM",
                "Ahrefs",
                "ChatBot",
              ]}
              screenshot="/screenshots/configascode.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="PicParty"
              description={t("projectPicPartyDesc")}
              href="https://picparty.rolandit.hu/"
              image="/logos/picparty.png"
              tech={[
                "React Native",
                "TypeScript",
                "Prisma backend",
                "Keycloak",
                "Docker",
                "Pipeline",
                "CI/CD",
                "Portainer",
                "Nginx reverse proxy",
                "GitLab",
              ]}
              screenshot="/screenshots/picparty.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Klíma"
              description={t("projectKlimaDesc")}
              href="https://klima.gbakos.hu"
              image="/klima-logo.svg"
              tech={[
                "Vite",
                "React",
                "React DOM",
                "Tailwind CSS",
                "PostCSS",
                "Autoprefixer",
                "Framer Motion",
                "Lucide React",
                "jsPDF",
                "jsPDF-Autotable",
                "html2canvas",
                "ESLint",
              ]}
              screenshot="/screenshots/klima.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Weather App"
              description={t("projectWeatherDesc")}
              href="https://weather.gbakos.hu"
              image="/weather-logo-icon.svg"
              tech={["HTML5", "CSS3", "Bootstrap", "JavaScript", "OpenWeather API"]}
              screenshot="/screenshots/weather.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="PlayList"
              description={t("projectPlaylistDesc")}
              href="https://playlist.gbakos.hu"
              image="/playlist.svg"
              tech={[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap 4",
                "SVG",
                "Web Audio API",
                "LocalStorage",
                "IndexedDB",
                "jsmediatags",
                "iTunes API",
                "MusicBrainz API",
                "Wikipedia API",
              ]}
              screenshot="/screenshots/playlist.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Zorka"
              description={t("projectZorkaDesc")}
              href="https://zorka.gbakos.hu"
              image="/doggo.svg"
              tech={[
                "React",
                "TypeScript",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Web Audio API",
                "LocalStorage",
                "Canvas API",
                "Vite",
              ]}
              screenshot="/screenshots/zorka.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Feladatkezelő"
              description={t("projectFeladatDesc")}
              href="https://feladatkezelo.gbakos.hu/"
              image="/feladatkezelo.svg"
              tech={[
                "React",
                "TypeScript",
                "Material UI",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "LocalStorage",
                "Web Notifications API",
                "date-fns",
              ]}
              screenshot="/screenshots/feladatkezelo.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Royal Pláza"
              description={t("projectPlazaDesc")}
              href="https://royal.gbakos.hu"
              image="/plaza.svg"
              tech={[
                "HTML5",
                "CSS3",
                "Bootstrap 5",
                "Bootstrap Icons",
                "SVG",
                "JavaScript",
                "Google Maps iframe",
                "Mapbox GL JS",
              ]}
              screenshot="/screenshots/plaza.png"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="WebShop fordító"
              description={t("projectWebshopDesc")}
              href="/fordito.png"
              targetBlank={false}
              download
              actionLabel={t("downloadLabel")}
              actionAriaLabel={`WebShop fordító ${t("downloadAriaLabel")}`}
              image="/fordito.png"
              tech={[
                "Python",
                "OpenAI ChatGPT API (gpt-4o)",
                "pandas",
                "Tkinter",
                "threading",
                "queue",
                "langdetect",
                "openpyxl",
                "LocalStorage + keyring",
                "Excel (XLSX)",
                "Regularis kifejezesek",
              ]}
              screenshot="/screenshots/fordito.png"
            />
          </Reveal>
        </Box>
      </Container>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
};

export default App;
