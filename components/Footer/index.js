import React from "react";
import Socials from "../Socials";
import Button from "../Button";
import Win98Window from "../Win98Window";
import data from "../../data/portfolio.json";
import { useLanguage } from "../../utils/LanguageContext";

const Footer = ({}) => {
  const { t } = useLanguage();
  return (
    <>
      <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
        <Win98Window title={`contact.exe - ${t("nav_contact")}`} bodyClassName="text-center !my-6">
          <h1 className="text-xs tracking-[0.3em] uppercase opacity-50">{t("nav_contact")}</h1>
          <h1 className="mt-4 text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold gradient-text leading-none">
            {t("footer_line1")}
          </h1>
          <h1 className="text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold gradient-text leading-none">
            {t("footer_line2")}
          </h1>
          <div className="mt-8 flex justify-center">
            <Button type="primary" onClick={() => window.open(`mailto:${data.socials?.find(s => s.title === "Email")?.link?.replace("mailto:", "") || "alkeccg@gmail.com"}`)}>
              {t("footer_btn")}
            </Button>
          </div>
          <div className="mt-8 flex justify-center">
            <Socials />
          </div>
        </Win98Window>
      </div>
      <h1 className="text-sm mt-8 p-2 laptop:p-0 text-center opacity-40">
        {t("built_by")} {data.name}
      </h1>
    </>
  );
};

export default Footer;
