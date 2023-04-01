import React from "react";
import { useTranslation } from "react-i18next";

const Choath = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("clothes.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("clothes.desc")}</p>
        <p>{t("clothes.desc2")}</p>
        <p>{t("clothes.desc3")}</p>
      </div>
    </div>
  );
};

export default Choath;
