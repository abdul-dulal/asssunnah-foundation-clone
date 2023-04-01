import React from "react";
import { useTranslation } from "react-i18next";

const Iftar = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("iftar.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("iftar.desc")}</p>
        <p>{t("iftar.desc2")}</p>
        <p>{t("iftar.desc3")}</p>
        <p>{t("iftar.desc4")}</p>
      </div>
    </div>
  );
};

export default Iftar;
