import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../App";
import Book from "./Book";
import Choath from "./Choath";
import Dars from "./Dars";
import Education from "./Education";
import Iftar from "./Iftar";
import Islam from "./Islam";
import Menu from "./Menu";
import Quarbani from "./Quarbani";
import Reliance from "./Reliance";
import Relif from "./Relif";
import Sadga from "./Sadga";
import Sunnah from "./Sunnah";
import Tree from "./Tree";

const Project = () => {
  const { t } = useTranslation();
  const [islam, setIslam] = useContext(Context);

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-[32px] text-center py-7 ">
            {t("project.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary">
        <div className="container sm:flex py-5 gap-5">
          <div className="lg:w-1/4 sm:w-2/4 w-full  border-r-2  border-gray-200">
            <div className="space-y-3 sm:block hidden">
              <p
                className={`cursor-pointer py-2  ${
                  islam === "reliance"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("reliance")}
              >
                {t("project.reliance")}
              </p>
              <p
                className={`cursor-pointer py-2 ${
                  islam === "qurbani"
                    ? "border-r-2 border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("qurbani")}
              >
                {t("project.qurbani")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "relief"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("relief")}
              >
                {t("project.relief")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "education"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("education")}
              >
                {t("project.orphans")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "sadga"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("sadga")}
              >
                {t("project.sadga")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "clothe"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("clothe")}
              >
                {t("project.clothe")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "tree"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("tree")}
              >
                {t("project.tree")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "iftar"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("iftar")}
              >
                {t("project.iftar")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "dars"
                    ? "border-r-2  border-primary text-primary "
                    : ""
                }`}
                onClickCapture={() => setIslam("dars")}
              >
                {t("project.dars")}
              </p>

              <p
                className={`cursor-pointer py-2  ${
                  islam === "book"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("book")}
              >
                {t("project.book")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "sunnah"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("sunnah")}
              >
                {t("project.sunnah")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  islam === "islam"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setIslam("islam")}
              >
                {t("project.islam")}
              </p>
            </div>
            <Menu islam={islam} setIslam={setIslam} />
          </div>
          <div className="lg:w-3/4 sm:w-2/4 w-full sm:mt-0 mt-6">
            <div className="bg-white shadow-lg w-full pb-8 px-6 rounded">
              {islam === "reliance" ? (
                <Reliance />
              ) : "" || islam === "qurbani" ? (
                <Quarbani />
              ) : "" || islam === "relief" ? (
                <Relif />
              ) : "" || islam === "education" ? (
                <Education />
              ) : "" || islam === "sadga" ? (
                <Sadga />
              ) : "" || islam === "clothe" ? (
                <Choath />
              ) : "" || islam === "tree" ? (
                <Tree />
              ) : "" || islam === "iftar" ? (
                <Iftar />
              ) : "" || islam === "dars" ? (
                <Dars />
              ) : "" || islam === "book" ? (
                <Book />
              ) : "" || islam === "sunnah" ? (
                <Sunnah />
              ) : "" || islam === "islam" ? (
                <Islam />
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

export default Project;
