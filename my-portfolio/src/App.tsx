import React from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const App: React.FC = () => {
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
          <Hero />

          <div id="projektek" />
          <ProjectCard
            title="Smurf village"
            description="Egy full-stack miniapp, amely Törpök (Smurfs) adatait jeleníti meg áttekintő statisztikákkal, listákkal és részletes nézetekkel. A frontend React + TypeScript alapú, Material UI-val, MUI X charttal és React Routerrel; reszponzív felület és dark mode kapcsoló is van (Tabs/dropdown, téma-váltás). Backend / API: ASP.NET Core Web API, /stat útvonal alatt végpontokkal adja vissza az entitásokat. Az API projekciókkal adja vissza a kapcsolt azonosítókat, amelyeket a kliens oldali hook összefűz."
            href="https://smurf.gbakos.hu"
            image="/smurf.svg"
            tech={["React", "TypeScript", "MUI", "ASP.NET Core", "REST API"]}
            screenshot="/screenshots/smurf.png"
          />
          <ProjectCard
            title="önlab BME"
            description="BME önálló labor feladatként készítettem el ezt az appot. A Reddit Analyzer feldolgozómagját Python szkriptek adják: a sentiment.py a szentimentelemzést, a rabbitmq.py pedig az üzenetsor-kezelést végzi. 

Az aszinkron kommunikációhoz RabbitMQ-t használsz, a konténerizálást Docker biztosítja, az adatokat MySQL tárolja, admin felületként phpMyAdmin áll rendelkezésre. 

A nyelvi modell lokálisan LM Studio-n fut. 

A backend C#-ban készül (pl. Job.cs, AnalyzedComment.cs), WebSocket-tel és Swaggerrel dokumentált API-kkal. 

A frontend React/TypeScript alapú (pl. App.tsx), kontextus-kezeléssel, bejelentkezés/registráció és főoldal nézetekkel; a fő funkciók a Reddit-posztok kiértékelése és statisztikák."
            href="https://analyzer.gbakos.hu"
            image="/reddit_analyzer.png"
            tech={["React", "TypeScript", "C#", "RabbitMQ", "Docker", "MySQL"]}
            screenshot="/screenshots/analyzer.png"
          />
          <ProjectCard
            title="Weather App"
            description="Ez egy modern, reszponzív időjárás-app, amivel városnév alapján vagy a böngésző geolokációját használva lekérheted az aktuális időjárást. Az OpenWeather adataira épít, üveg-hatású (glass) felületet és dinamikus színátmenetet használ az időjárás típusához igazítva, saját SVG logóval és favikonnal. Technológiák: HTML5 + CSS (modern), Bootstrap 5, Bootstrap Icons, Vanilla JavaScript (fetch + Geolocation API), OpenWeather API, SVG logó és favicon"
            href="https://weather.gbakos.hu"
            image="/weather-logo-icon.svg"
            tech={["HTML5", "CSS3", "Bootstrap", "JavaScript", "OpenWeather API"]}
            screenshot="/screenshots/weather.png"
          />
          <ProjectCard
            title="playlist"
            description="Kódok, demók és issue-k."
            href="https://playlist.gbakos.hu"
            image="/playlist.svg"
            tech={["Demos", "Experiments"]}
            screenshot="/screenshots/playlist.png"
          />
          <ProjectCard
            title="Zorka"
            description="Doggy games"
            href="https://zorka.gbakos.hu"
            image="/doggo.svg"
            tech={["Web", "Games"]}
            screenshot="/screenshots/zorka.png"
          />
          <ProjectCard
            title="Feladatkezelő"
            description="BME Projektmunka a Design a szoftverfejlesztésben című tárgyhoz"
            href="https://feladatkezelo.gbakos.hu/"
            image="/feladatkezelo.svg"
            tech={["BME", "Projektmunka"]}
            screenshot="/screenshots/feladatkezelo.png"
          />
        </Box>
      </Container>
    </div>
  );
};

export default App;
