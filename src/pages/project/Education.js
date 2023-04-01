import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("education.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("education.desc")}</p>
        <p>{t("education.desc2")}</p>
        <p>{t("education.desc3")}</p>
      </div>
    </div>
  );
};

export default Education;
