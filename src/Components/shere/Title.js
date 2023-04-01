import React from "react";
import { useTranslation } from "react-i18next";

const Title = ({ title, id }) => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
      <div className="container ">
        <h2 className="text-white text-[32px] text-center py-7 ">
          {t(`${id}.title`)}
        </h2>
      </div>
    </div>
  );
};

export default Title;
