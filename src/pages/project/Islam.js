import React from "react";
import { useTranslation } from "react-i18next";

const Islam = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("islam.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("islam.desc")}</p>
        <p>{t("islam.desc2")}</p>
        <p>{t("islam.desc3")}</p>
      </div>
    </div>
  );
};

export default Islam;
