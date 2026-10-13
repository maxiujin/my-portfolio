import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Win98Window from "../components/Win98Window";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import { useLanguage } from "../utils/LanguageContext";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span
      className="h-px w-10"
      style={{ background: "linear-gradient(90deg, var(--accent-1), var(--accent-2))" }}
    ></span>
    <h1 className="text-xs tablet:text-sm tracking-[0.3em] uppercase opacity-50">
      {children}
    </h1>
  </div>
);

export default function Home() {
  const { t } = useLanguage();
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  // Land on the right section when arriving via /#work or /#about (e.g. from the resume page)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash === "#work") {
      handleWorkScroll();
    } else if (hash === "#about") {
      handleAboutScroll();
    }
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="noise-overlay"></div>

      <div className="container relative z-10 mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-24 mt-14">
          <Win98Window title={`${data.name}.exe - About Me`} bodyClassName="flex flex-col laptop:flex-row items-start gap-10">
          <img
            src="/profile.png"
            alt={data.name}
            className="w-full laptop:w-2/5 aspect-[4/5] laptop:aspect-[3/4] object-cover glow-card flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
          <div className="mt-2">
            <h1
              ref={textOne}
              className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {(() => {
                const words = t("hero1").split(" ");
                const last = words.pop();
                return (
                  <>
                    {words.join(" ")}{" "}
                    <span className="wave-emoji">{last}</span>
                  </>
                );
              })()}
            </h1>
            <br></br>
            <h1
              ref={textTwo}
              className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-full laptop:w-4/5 gradient-text"
            >
              {t("hero2")}
            </h1>
            <br></br>
            <h1
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-3xl p-1 tablet:p-2 font-medium w-full laptop:w-3/5 opacity-70"
            >
              {t("hero3")}
            </h1>
            <br></br>
            <h1
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl p-1 tablet:p-2 font-medium w-full laptop:w-3/5 opacity-70"
            >
              {t("hero4")}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 p-1 tablet:p-2">
            <Button type="primary" onClick={handleWorkScroll}>{t("btn_work")}</Button>
            <Button onClick={() => window.open("/resume")}>{t("btn_resume")}</Button>
          </div>

          <Socials className="mt-4 laptop:mt-8" />
          </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="ai-tools.exe">
            <SectionLabel>{t("section_ai_tools")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold mb-8">{t("title_ai_tools")}</h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="bg-white p-6 laptop:p-8 glow-card flex items-center justify-center">
                <img src="/claude-logo.png" alt="Claude" className="h-9 laptop:h-11 w-auto" />
              </div>
              <div className="bg-white p-6 laptop:p-8 glow-card flex items-center justify-center">
                <img src="/chatgpt-logo.png" alt="ChatGPT" className="h-9 laptop:h-11 w-auto" />
              </div>
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="computer-vision.exe">
            <SectionLabel>{t("section_ml")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold mb-2">{t("title_ml")}</h1>
            <span className="chip inline-flex mb-4">{t("badge_pre_ai")}</span>
            <p className="text-base laptop:text-lg opacity-60 mb-6 w-full laptop:w-3/5">
              {t("desc_ml")}
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <div>
                <video
                  className="w-full glow-card"
                  src="/nutrition-detector.mp4"
                  poster="/nutrition-detector-poster.jpg"
                  controls
                  muted
                  loop
                  playsInline
                ></video>
                <h2 className="mt-3 text-lg font-semibold">{t("title_nutrition")}</h2>
                <p className="text-sm opacity-50">{t("desc_nutrition")}</p>
              </div>
              <div>
                <video
                  className="w-full glow-card"
                  src="/currency-exchange.mp4"
                  poster="/currency-exchange-poster.jpg"
                  controls
                  muted
                  loop
                  playsInline
                ></video>
                <h2 className="mt-3 text-lg font-semibold">{t("title_currency")}</h2>
                <p className="text-sm opacity-50">{t("desc_currency")}</p>
              </div>
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="unreal-engine.exe">
            <SectionLabel>{t("section_gaming")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold mb-2">{t("title_unreal")}</h1>
            <p className="text-base laptop:text-lg opacity-60 mb-6 w-full laptop:w-3/5">
              {t("desc_unreal")}
            </p>
            <video
              className="w-full glow-card"
              src="/unreal-demo.mp4"
              poster="/unreal-demo-poster.jpg"
              controls
              muted
              loop
              playsInline
            ></video>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef} style={{ scrollMarginTop: "100px" }}>
          <Win98Window title="shipped-products.exe">
            <SectionLabel>{t("section_shipped")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("section_shipped")}</h1>

            <div className="mt-8 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-6 items-start">
              {data.projects
                .filter((project) => ["soku-trade", "mainu", "2"].includes(project.id))
                .map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    onClick={() => project.url && window.open(project.url)}
                  />
                ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="built-with-claude.exe">
            <SectionLabel>{t("section_ai_products")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("section_ai_products")}</h1>

            <div className="mt-8 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-6 items-start">
              {data.projects
                .filter((project) => ["cliplegit"].includes(project.id))
                .map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    onClick={() => project.url && window.open(project.url)}
                  />
                ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="open-source.exe">
            <SectionLabel>{t("section_opensource")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("section_opensource")}</h1>

            <div className="mt-8 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-6 items-start">
              {data.projects
                .filter((project) => ["anisho"].includes(project.id))
                .map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    onClick={() => project.url && window.open(project.url)}
                  />
                ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="data-projects.exe">
            <SectionLabel>{t("section_data")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("section_data")}</h1>

            <div className="mt-8 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 items-start">
              {data.projects
                .filter((project) => !["soku-trade", "mainu", "2", "cliplegit", "anisho"].includes(project.id))
                .map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    imgAspect="aspect-[11/5]"
                    onClick={() => project.url && window.open(project.url)}
                  />
                ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="data-viz.exe">
            <SectionLabel>{t("section_dataviz")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("title_dataviz")}</h1>

            <div className="mt-8 laptop:mt-10 mosaic-grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-3">
              {data.dataprojects.map((dataproject) => (
                <WorkCard
                  key={dataproject.id}
                  img={dataproject.imageSrc}
                  name={dataproject.title}
                  description={dataproject.description}
                  onClick={() => dataproject.url && window.open(dataproject.url)}
                />
              ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <Win98Window title="skills.exe">
            <SectionLabel>{t("section_skills")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold">{t("title_skills")}</h1>
            <div className="mt-8 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.skills.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </Win98Window>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef} style={{ scrollMarginTop: "100px" }}>
          <Win98Window title="about.exe">
            <SectionLabel>{t("section_about")}</SectionLabel>
            <h1 className="text-3xl laptop:text-4xl font-bold mb-6">{t("title_about")}</h1>
            <p className="text-lg laptop:text-2xl w-full laptop:w-3/5 opacity-70" style={{ lineHeight: "1.6" }}>
              {t("about")}
            </p>
          </Win98Window>
        </div>
        <Footer />
      </div>
    </div>
  );
}
