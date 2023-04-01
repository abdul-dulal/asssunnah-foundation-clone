import React from "react";
import { useTranslation } from "react-i18next";

const Sunnah = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("sunnah.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("sunnah.desc")}</p>
      </div>
    </div>
  );
};

export default Sunnah;
