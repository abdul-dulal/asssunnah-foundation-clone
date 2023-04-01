import React from "react";
import { useTranslation } from "react-i18next";

const Achive = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="py-5">
        <h1 className="text-[#545454]">{t("achive.title")}</h1>
        <p className="text-[#545454] mt-3">{t("achive.desc")}</p>
      </div>
      <div className="py-5">
        <h1 className="text-[#545454]">{t("achive.title2")}</h1>
        <p className="text-[#545454] mt-3">{t("achive.desc2")}</p>
      </div>
    </div>
  );
};

export default Achive;
