import React from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Reveal from "./components/Reveal";
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
            <Reveal>
              <Hero />
            </Reveal>

            <div id="projektek" className="section-anchor" />
            <Reveal>
              <ProjectCard
                title="Smurf village"
                description="Egy full-stack miniapp, amely TArpAk (Smurfs) adatait jelenA-ti meg A­ttekint` statisztikA­kkal, listA­kkal Acs rAcszletes nAczetekkel. A frontend React + TypeScript alapA§, Material UI-val, MUI X charttal Acs React Routerrel; reszponzA-v felA¬let Acs dark mode kapcsolA3 is van (Tabs/dropdown, tAcma-vA­ltA­s). Backend / API: ASP.NET Core Web API, /stat A§tvonal alatt vAcgpontokkal adja vissza az entitA­sokat. Az API projekciA3kkal adja vissza a kapcsolt azonosA-tA3kat, amelyeket a kliens oldali hook Asszefñz."
                href="https://smurf.gbakos.hu"
                image="/smurf.svg"
                tech={["React", "TypeScript", "MUI", "ASP.NET Core", "REST API"]}
                screenshot="/screenshots/smurf.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Anlab BME"
                description="BME AnA­llA3 labor feladatkAcnt kAcszA-tettem el ezt az appot. A Reddit Analyzer feldolgozA3magjA­t Python szkriptek adjA­k: a sentiment.py a szentimentelemzAcst, a rabbitmq.py pedig az A¬zenetsor-kezelAcst vAcgzi. 

Az aszinkron kommunikA­ciA3hoz RabbitMQ-t hasznA­lsz, a kontAcnerizA­lA­st Docker biztosA-tja, az adatokat MySQL tA­rolja, admin felA¬letkAcnt phpMyAdmin A­ll rendelkezAcsre. 

A nyelvi modell lokA­lisan LM Studio-n fut. 

A backend C#-ban kAcszA¬l (pl. Job.cs, AnalyzedComment.cs), WebSocket-tel Acs Swaggerrel dokumentA­lt API-kkal. 

A frontend React/TypeScript alapA§ (pl. App.tsx), kontextus-kezelAcssel, bejelentkezAcs/registrA­ciA3 Acs f`oldal nAczetekkel; a f` funkciA3k a Reddit-posztok kiAcrtAckelAcse Acs statisztikA­k."
                href="https://analyzer.gbakos.hu"
                image="/reddit_analyzer.png"
                tech={["React", "TypeScript", "C#", "RabbitMQ", "Docker", "MySQL"]}
                screenshot="/screenshots/analyzer.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Weather App"
                description="Ez egy modern, reszponzA-v id`jA­rA­s-app, amivel vA­rosnAcv alapjA­n vagy a bAngAcsz` geolokA­ciA3jA­t hasznA­lva lekAcrheted az aktuA­lis id`jA­rA­st. Az OpenWeather adataira AcpA-t, A¬veg-hatA­sA§ (glass) felA¬letet Acs dinamikus szA-nA­tmenetet hasznA­l az id`jA­rA­s tA-pusA­hoz igazA-tva, sajA­t SVG logA3val Acs favikonnal. TechnolA3giA­k: HTML5 + CSS (modern), Bootstrap 5, Bootstrap Icons, Vanilla JavaScript (fetch + Geolocation API), OpenWeather API, SVG logA3 Acs favicon"
                href="https://weather.gbakos.hu"
                image="/weather-logo-icon.svg"
                tech={["HTML5", "CSS3", "Bootstrap", "JavaScript", "OpenWeather API"]}
                screenshot="/screenshots/weather.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="playlist"
                description="KA3dok, demA3k Acs issue-k."
                href="https://playlist.gbakos.hu"
                image="/playlist.svg"
                tech={["Demos", "Experiments"]}
                screenshot="/screenshots/playlist.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Zorka"
                description="Doggy games"
                href="https://zorka.gbakos.hu"
                image="/doggo.svg"
                tech={["Web", "Games"]}
                screenshot="/screenshots/zorka.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Feladatkezel`"
                description="BME Projektmunka a Design a szoftverfejlesztAcsben cA-mñ tA­rgyhoz"
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

export default App;
