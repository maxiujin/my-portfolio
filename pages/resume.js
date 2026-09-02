import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProjectResume from "../components/ProjectResume";
import Cursor from "../components/Cursor";
import Head from "next/head";
import data from "../data/portfolio.json";

const Chip = ({ children }) => <span className="chip mr-2 mb-2">{children}</span>;

const Section = ({ title, children }) => (
  <div className="mt-14 laptop:mt-20">
    <div className="flex items-center gap-3 mb-6">
      <span
        className="h-px w-10"
        style={{ background: "linear-gradient(90deg, var(--accent-1), var(--accent-2))" }}
      ></span>
      <h1 className="text-xs tablet:text-sm tracking-[0.3em] uppercase opacity-50">{title}</h1>
    </div>
    {children}
  </div>
);

const Resume = () => {
  const { resume } = data;

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} — Resume</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="noise-overlay"></div>

      <div className="container relative z-10 mx-auto mb-10">
        <Header isBlog />

        <div className="mt-14 laptop:mt-20 glass glow-card rounded-3xl p-6 tablet:p-10 laptop:p-14">
          <div className="flex flex-col tablet:flex-row tablet:items-end tablet:justify-between gap-6">
            <div>
              <h1 className="text-4xl laptop:text-6xl font-bold">{data.name}</h1>
              <p className="mt-3 text-lg laptop:text-xl gradient-text font-semibold">
                {resume.tagline}
              </p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Button type="primary">Download PDF</Button>
            </a>
          </div>
          <p className="mt-6 text-base laptop:text-lg opacity-70 w-full laptop:w-4/5" style={{ lineHeight: 1.6 }}>
            {resume.description}
          </p>
        </div>

        <Section title="AI workflow">
          <div className="flex flex-wrap">
            {resume.aiWorkflow?.map((item, i) => (
              <Chip key={i}>{item}</Chip>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="glass glow-card rounded-3xl p-6 tablet:p-10">
            {resume.experiences?.map((exp) => (
              <div key={exp.id} className="border-b border-white/10 last:border-none pb-6 mb-6 last:pb-0 last:mb-0">
                <ProjectResume
                  dates={exp.dates}
                  type={exp.type}
                  position={exp.position}
                  bullets={exp.bullets}
                />
              </div>
            ))}
          </div>
        </Section>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 mt-14 laptop:mt-20">
          <div>
            <Section title="Education">
              <div className="glass glow-card rounded-3xl p-6 tablet:p-8 h-full">
                {(Array.isArray(resume.education) ? resume.education : [resume.education]).map((edu, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <h2 className="text-xl font-semibold">{edu.universityName}</h2>
                    <h3 className="text-sm opacity-50">{edu.universityDate}</h3>
                    {edu.universityPara && (
                      <p className="mt-2 text-sm opacity-60">{edu.universityPara}</p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>
          <div>
            <Section title="Languages spoken">
              <div className="glass glow-card rounded-3xl p-6 tablet:p-8 h-full">
                {resume.others?.map((lang, i) => (
                  <p key={i} className="text-lg mb-2">{lang}</p>
                ))}
              </div>
            </Section>
          </div>
        </div>

        <Section title="Core skills">
          <div className="flex flex-wrap">
            {resume.languages?.map((item, i) => (
              <Chip key={`l-${i}`}>{item}</Chip>
            ))}
            {resume.frameworks?.map((item, i) => (
              <Chip key={`f-${i}`}>{item}</Chip>
            ))}
          </div>
        </Section>

        {resume.certifications && (
          <Section title="Certifications & clearance">
            <div className="flex flex-wrap">
              {resume.certifications.map((item, i) => (
                <Chip key={i}>{item}</Chip>
              ))}
            </div>
          </Section>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Resume;
