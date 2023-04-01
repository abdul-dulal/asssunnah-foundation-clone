import React from "react";
import { useTranslation } from "react-i18next";

const Sadga = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("sadga.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("sadga.desc")}</p>
        <p>{t("sadga.desc2")}</p>
        <p>{t("sadga.desc3")}</p>
        <p>{t("sadga.desc4")}</p>
        <p>{t("sadga.desc5")}</p>
      </div>
    </div>
  );
};

export default Sadga;
