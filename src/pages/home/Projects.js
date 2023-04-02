import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

const Projects = () => {
  const [islam, setIslam] = useContext(Context);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <h3 className="text-center text-[24px] my-6">{t("navbar.project")}</h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2   gap-7">
          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(51, 153, 102), rgb(0, 153, 153",
            }}
            className="h-[500px] px-6 rounded-lg grid grid-flow-row"
          >
            <h2 className="text-3xl text-white text-center pt-16">
              {t("project.reliance")}
            </h2>
            <p className="text-white text-center text-[17px] leading-6">
              {t("reliance.desc7")}
            </p>
            <div className="flex  justify-center">
              <button
                onClick={() => navigate("/project")}
                className="bg-primary text-white h-[44px] w-36 rounded py-2"
              >
                {t("project.button")}
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(0, 153, 204), rgb(0, 153, 153))",
            }}
            className="h-[500px] px-6 rounded-lg grid grid-flow-row"
          >
            <h2 className="text-3xl text-white text-center pt-16">
              {t("project.sadga")}
            </h2>
            <p className="text-white text-center text-[17px] leading-6">
              {t("reliance.desc3")}
            </p>
            <div className="flex  justify-center">
              <button
                className="bg-primary text-white h-[44px] w-36 rounded py-2 mt-8"
                onClick={() => [navigate("/project"), setIslam("sadga")]}
              >
                {t("project.button")}
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(0, 153, 204), rgb(0, 153, 153))",
            }}
            className="h-[500px] px-6 rounded-lg grid grid-flow-row "
          >
            <div>
              <h2 className="text-3xl text-white text-center pt-16">
                {t("project.tree")}
              </h2>
              <p className="text-white text-center text-[17px] leading-6">
                {t("tree.desc9")}
              </p>
            </div>
            <div className="flex  justify-center">
              <button
                className="bg-primary text-white h-[44px] w-36 rounded py-2 mt-8"
                onClick={() => [navigate("/project"), setIslam("tree")]}
              >
                {t("project.button")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button
            onClick={() => navigate("/project")}
            className="bg-primary w-64 h-10 rounded text-white"
          >
            {t("update.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
