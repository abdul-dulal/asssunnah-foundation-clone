import React from "react";
import { useTranslation } from "react-i18next";

const Dars = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("dars.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("dars.desc")}</p>
      </div>
    </div>
  );
};

export default Dars;
