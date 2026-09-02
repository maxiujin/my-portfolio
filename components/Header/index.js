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
    className="h-5 w-5"
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
        className="text-sm p-2 laptop:p-2 m-1 laptop:m-2 rounded-full flex items-center gap-1 transition-all ease-out duration-300 hover:bg-black/5 dark:hover:bg-white/10 link"
        aria-label="Change language"
      >
        <GlobeIcon />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 glass rounded-xl overflow-hidden shadow-md z-30 min-w-[110px]">
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`w-full text-left text-sm px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${
                locale === l.code ? "font-semibold" : "opacity-70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();
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
      <Popover className="glass rounded-2xl block tablet:hidden mt-5 relative z-20">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-semibold text-lg p-2 laptop:p-0 link gradient-text"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <LanguageSwitcher />
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 glass shadow-md rounded-2xl`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>{t("nav_work")}</Button>
                <Button onClick={handleAboutScroll}>{t("nav_about")}</Button>
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
      <div
        className={`mt-10 hidden glass rounded-full px-4 flex-row items-center justify-between sticky top-5 z-20 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-semibold text-lg cursor-pointer mob:p-2 laptop:p-0 gradient-text"
        >
          {name}.
        </h1>
        <div className="flex items-center">
          <Button onClick={handleWorkScroll}>{t("nav_work")}</Button>
          <Button onClick={handleAboutScroll}>{t("nav_about")}</Button>
          {resume && (
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              {t("nav_resume")}
            </Button>
          )}
          <Button type="primary" classes="!m-0 !ml-2" onClick={() => window.open(email)}>
            {t("nav_contact")}
          </Button>
          <LanguageSwitcher />
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
