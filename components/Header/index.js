import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";
import { useLanguage } from "../../utils/LanguageContext";
import { locales } from "../../utils/i18n";

const GlobeIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
  </svg>
);

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="m-1 laptop:m-1.5 flex items-center gap-1 link"
        aria-label="Change language"
      >
        <GlobeIcon />
      </button>
      {open && (
        <div className="window absolute right-0 mt-1 z-30 min-w-[110px]">
          <div className="window-body !my-1">
            {locales.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`w-full !min-w-0 !block text-left text-sm my-0.5 ${
                  locale === l.code ? "default" : ""
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();
  const goToWork = () => {
    if (handleWorkScroll) {
      handleWorkScroll();
    } else {
      router.push("/#work");
    }
  };
  const goToAbout = () => {
    if (handleAboutScroll) {
      handleAboutScroll();
    } else {
      router.push("/#about");
    }
  };
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const { name, resume } = data;
  const email = data.socials?.find((s) => s.title === "Email")?.link || "mailto:alkeccg@gmail.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="window block tablet:hidden mt-5 relative z-20">
        <Popover>
          {({ open }) => (
            <>
              <div className="title-bar">
                <div
                  className="title-bar-text"
                  onClick={() => router.push("/")}
                  style={{ cursor: "pointer" }}
                >
                  {name}.exe
                </div>
                <div className="title-bar-controls">
                  <LanguageSwitcher />
                  {data.darkMode && (
                    <button
                      aria-label="Help"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    ></button>
                  )}
                  <Popover.Button aria-label={open ? "Close" : "Maximize"}></Popover.Button>
                </div>
              </div>
              <Popover.Panel className="window-body">
                <div className="grid grid-cols-1 gap-1">
                  <Button onClick={goToWork}>{t("nav_work")}</Button>
                  <Button onClick={goToAbout}>{t("nav_about")}</Button>
                  {resume && (
                    <Button onClick={() => router.push("/resume")}>
                      {t("nav_resume")}
                    </Button>
                  )}
                  <Button onClick={() => window.open(email)}>{t("nav_contact")}</Button>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>

      <div className="window mt-10 hidden tablet:block sticky top-5 z-20">
        <div className="title-bar">
          <div
            className="title-bar-text"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            {name}.exe - Portfolio
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body !my-2 flex flex-row items-center justify-between flex-wrap">
          <div className="flex items-center flex-wrap">
            <Button onClick={goToWork}>{t("nav_work")}</Button>
            <Button onClick={goToAbout}>{t("nav_about")}</Button>
            {resume && (
              <Button onClick={() => router.push("/resume")}>
                {t("nav_resume")}
              </Button>
            )}
            <Button type="primary" onClick={() => window.open(email)}>
              {t("nav_contact")}
            </Button>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
            {mounted && theme && data.darkMode && (
              <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? "☀" : "🖥"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
