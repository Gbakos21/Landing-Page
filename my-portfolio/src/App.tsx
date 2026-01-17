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
                image="/reddit_analyzer.png"
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
              title="playlist"
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
