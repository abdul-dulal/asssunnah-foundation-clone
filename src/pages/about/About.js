import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Achive from "./Achive";
import Activitics from "./Activitics";
import Goal from "./Goal";
import Intro from "./Intro";
import Norms from "./Norms";
import Policy from "./Policy";
import Source from "./Source";

const About = () => {
  const [intro, setIntro] = useState("intro");
  const { t } = useTranslation();
  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-3xl text-center py-7 ">
            {t("about.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary  py-6 ">
        <div className="sm:flex container gap-6">
          <div className="lg:w-1/6 sm:w-2/6 w-full  border-r-2  border-gray-200">
            <div className="space-y-3">
              <p
                className={`cursor-pointer py-2  ${
                  intro === "intro" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("intro")}
              >
                {t("about.intro")}
              </p>
              <p
                className={`cursor-pointer py-2 ${
                  intro === "norms" ? "border-r-2 border-primary" : ""
                }`}
                onClickCapture={() => setIntro("norms")}
              >
                {t("about.norms")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  intro === "goal" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("goal")}
              >
                {t("about.goal")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  intro === "activitis" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("activitis")}
              >
                {t("about.activitis")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  intro === "source" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("source")}
              >
                {t("about.source")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  intro === "policy" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("policy")}
              >
                {t("about.policy")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  intro === "achive" ? "border-r-2  border-primary" : ""
                }`}
                onClickCapture={() => setIntro("achive")}
              >
                {t("about.achive")}
              </p>
            </div>
          </div>
          <div className="lg:w-5/6 sm:w-4/6 w-full">
            <div className="bg-white shadow-lg w-full pb-8 px-6 rounded">
              {intro === "intro" ? (
                <Intro />
              ) : "" || intro === "norms" ? (
                <Norms />
              ) : "" || intro === "goal" ? (
                <Goal />
              ) : "" || intro === "source" ? (
                <Source />
              ) : "" || intro === "policy" ? (
                <Policy />
              ) : "" || intro === "achive" ? (
                <Achive />
              ) : "" || intro === "activitis" ? (
                <Activitics />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
