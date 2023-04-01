import React from "react";
import { useTranslation } from "react-i18next";

const Quarbani = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("qurbni.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("qurbni.desc")}</p>
        <p>{t("qurbni.desc2")}</p>
        <p>{t("qurbni.desc3")}</p>
        <p>{t("qurbni.desc4")}</p>
      </div>
    </div>
  );
};

export default Quarbani;
