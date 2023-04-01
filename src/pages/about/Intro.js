import React from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="py-5">{t("intro.title")}</h1>
      <p className="text-[#545454]">{t("intro.desc")}</p>
    </div>
  );
};

export default Intro;
