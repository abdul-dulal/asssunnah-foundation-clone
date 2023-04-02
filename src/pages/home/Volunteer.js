import React from "react";
import volunteer from "../../../src/assets/img/relief_distribution_gallery_8.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Volunteer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-secodary py-8 my-8">
      <div className="container grid sm:grid-cols-2 gap-10">
        <div className="">
          <img src={volunteer} className="rounded-md" alt="" />
        </div>
        <div>
          <h1> {t("ass_sunnah_fundation.title")}</h1>
          <div className="h-[2px] w-full bg-[#BBBBBB]" />
          <p>{t("ass_sunnah_fundation.desc")}</p>
          <button
            onClick={() => navigate("/volunteer")}
            className="bg-primary py-3 mt-5 w-56 rounded-sm  text-white "
          >
            {t("navbar.volunteer")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
