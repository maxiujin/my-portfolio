import { useRef } from "react";
import Header from "../components/Header";
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
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
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
        <div className="laptop:mt-24 mt-14 flex flex-col laptop:flex-row items-start gap-10">
          <img
            src="/profile.png"
            alt={data.name}
            className="w-full laptop:w-2/5 aspect-[4/5] laptop:aspect-[3/4] rounded-2xl object-cover glow-card flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
          <div className="chip inline-flex mb-6 mob:ml-1">
            <span className="h-2 w-2 rounded-full mr-2" style={{ background: "var(--accent-2)" }}></span>
            Full stack &amp; indie game developer
          </div>
          <div className="mt-2">
            <h1
              ref={textOne}
              className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {(() => {
                const words = data.headerTaglineOne.split(" ");
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
              {data.headerTaglineTwo}
            </h1>
            <br></br>
            <h1
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-3xl p-1 tablet:p-2 font-medium w-full laptop:w-3/5 opacity-70"
            >
              {data.headerTaglineThree}
            </h1>
            <br></br>
            <h1
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl p-1 tablet:p-2 font-medium w-full laptop:w-3/5 opacity-70"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 p-1 tablet:p-2">
            <Button type="primary" onClick={handleWorkScroll}>See my work</Button>
            <Button onClick={() => window.open("/resume")}>View resume</Button>
          </div>

          <Socials className="mt-4 laptop:mt-8" />
          </div>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <SectionLabel>Machine learning &amp; computer vision</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold mb-2">Object detection, CNN networks</h1>
          <p className="text-base laptop:text-lg opacity-60 mb-6 w-full laptop:w-3/5">
            AI work applying convolutional neural networks to real-time detection tasks.
          </p>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            <div>
              <video
                className="w-full rounded-xl glow-card"
                src="/nutrition-detector.mp4"
                poster="/nutrition-detector-poster.jpg"
                controls
                muted
                loop
                playsInline
              ></video>
              <h2 className="mt-3 text-lg font-semibold">Nutrition detector</h2>
              <p className="text-sm opacity-50">CNN-based object detection identifying food items and nutrition info in real time.</p>
            </div>
            <div>
              <video
                className="w-full rounded-xl glow-card"
                src="/currency-exchange.mp4"
                poster="/currency-exchange-poster.jpg"
                controls
                muted
                loop
                playsInline
              ></video>
              <h2 className="mt-3 text-lg font-semibold">Real-time currency exchange</h2>
              <p className="text-sm opacity-50">Real-time object detection and recognition for currency exchange rates.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <SectionLabel>Gaming</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold mb-2">Unreal Engine gameplay</h1>
          <p className="text-base laptop:text-lg opacity-60 mb-6 w-full laptop:w-3/5">
            Modeled and textured the vehicle in Blender, imported it into Unreal Engine, and coded the driving logic in C++.
          </p>
          <video
            className="w-full rounded-xl glow-card"
            src="/unreal-demo.mp4"
            poster="/unreal-demo-poster.jpg"
            controls
            muted
            loop
            playsInline
          ></video>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <SectionLabel>Shipped products</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold">Shipped products</h1>

          <div className="mt-8 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-6">
            {data.projects
              .filter((project) => ["soku-trade", "mainu", "2"].includes(project.id))
              .map((project) => (
                <div key={project.id} className="h-72 laptop:h-96">
                  <WorkCard
                    img={project.imageSrc}
                    name={project.title}
                    description={project.description}
                    onClick={() => project.url && window.open(project.url)}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <SectionLabel>Data intensive projects</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold">Data intensive projects</h1>

          <div className="mt-8 laptop:mt-10 mosaic-grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-3">
            {data.projects
              .filter((project) => !["soku-trade", "mainu", "2"].includes(project.id))
              .map((project) => (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  onClick={() => project.url && window.open(project.url)}
                />
              ))}
          </div>
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <SectionLabel>Data &amp; analytics</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold">Data visualization</h1>

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
        </div>

        <div className="mt-20 laptop:mt-32 p-2 laptop:p-0">
          <SectionLabel>Capabilities</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold">Skills</h1>
          <div className="mt-8 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.skills.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <SectionLabel>About</SectionLabel>
          <h1 className="text-3xl laptop:text-4xl font-bold mb-6">About me</h1>
          <p className="text-lg laptop:text-2xl w-full laptop:w-3/5 opacity-70" style={{ lineHeight: "1.6" }}>
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
