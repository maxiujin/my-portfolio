import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {resume && (
                  <Button onClick={() => router.push("/resume")}>
                    Resume
                  </Button>
                )}
                <Button onClick={() => window.open(email)}>Contact</Button>
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
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          {resume && (
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              Resume
            </Button>
          )}
          <Button type="primary" classes="!m-0 !ml-2" onClick={() => window.open(email)}>
            Contact
          </Button>
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
