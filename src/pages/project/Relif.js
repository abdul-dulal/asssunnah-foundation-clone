import React from "react";
import { useTranslation } from "react-i18next";

const Relif = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("relif.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("relif.desc")}</p>
        <p>{t("relif.desc2")}</p>
        <p>{t("relif.desc3")}</p>
        <p>{t("relif.desc4")}</p>
      </div>
    </div>
  );
};

export default Relif;
