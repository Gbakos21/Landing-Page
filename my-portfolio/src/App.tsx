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
                title="Önlab BME"
                description={t("projectAnalyzerDesc")}
                href="https://analyzer.gbakos.hu"
                image="/reddit_analyzer.png"
                tech={["React", "TypeScript", "C#", "RabbitMQ", "Docker", "MySQL"]}
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
                tech={["Demos", "Experiments"]}
                screenshot="/screenshots/playlist.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Zorka"
                description={t("projectZorkaDesc")}
                href="https://zorka.gbakos.hu"
                image="/doggo.svg"
                tech={["Web", "Games"]}
                screenshot="/screenshots/zorka.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Feladatkezelő"
                description={t("projectFeladatDesc")}
                href="https://feladatkezelo.gbakos.hu/"
                image="/feladatkezelo.svg"
                tech={["BME", "Projektmunka"]}
                screenshot="/screenshots/feladatkezelo.png"
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
