import React from "react";
import { useTranslation } from "react-i18next";

const Menu = ({ islam, setIslam }) => {
  const { t } = useTranslation();
  return (
    <div class="sm:hidden flex overflow-x-scroll  scrollbar-hide border-b-2 border-gray-200 ">
      <div class="flex gap-5 flex-nowrap   ">
        <div class="w-32">
          <p
            className={`cursor-pointer py-2  ${
              islam === "reliance" ? " border-b-2 border-primary " : ""
            }`}
            onClickCapture={() => setIslam("reliance")}
          >
            {t("project.reliance")}
          </p>
        </div>
        <div className="w-32">
          <p
            className={`cursor-pointer py-2 ${
              islam === "qurbani" ? "border-b-2 border-primary" : ""
            }`}
            onClickCapture={() => setIslam("qurbani")}
          >
            {t("project.qurbani")}
          </p>
        </div>
        <div className="w-[185px]">
          <p
            className={`cursor-pointer py-2  ${
              islam === "relief" ? "border-b-2  border-primary" : ""
            }`}
            onClickCapture={() => setIslam("relief")}
          >
            {t("project.relief")}
          </p>
        </div>
        <div className="w-32">
          <p
            className={`cursor-pointer py-2  ${
              islam === "sadga" ? " border-b-2 border-primary" : ""
            }`}
            onClickCapture={() => setIslam("sadga")}
          >
            {t("project.sadga")}
          </p>
        </div>
        <div className="w-[100px]">
          <p
            className={`cursor-pointer py-2  ${
              islam === "clothe" ? " border-b-2  border-primary" : ""
            }`}
            onClickCapture={() => setIslam("clothe")}
          >
            {t("project.clothe")}
          </p>
        </div>
        <div className="w-[120px]">
          <p
            className={`cursor-pointer py-2  ${
              islam === "tree" ? "border-b-2  border-primary" : ""
            }`}
            onClickCapture={() => setIslam("tree")}
          >
            {t("project.tree")}
          </p>
        </div>
        <div className="w-48">
          <p
            className={`cursor-pointer py-2  ${
              islam === "iftar" ? "border-b-2  border-primary" : ""
            }`}
            onClickCapture={() => setIslam("iftar")}
          >
            {t("project.iftar")}
          </p>
        </div>
        <div className="w-28">
          <p
            className={`cursor-pointer py-2  ${
              islam === "dars" ? "border-b-2  border-primary" : ""
            }`}
            onClickCapture={() => setIslam("dars")}
          >
            {t("project.dars")}
          </p>
        </div>
        <div className="w-44">
          <p
            className={`cursor-pointer py-2  ${
              islam === "book" ? " border-b-2 border-primary" : ""
            }`}
            onClickCapture={() => setIslam("book")}
          >
            {t("project.book")}
          </p>
        </div>
        <div className="w-28">
          <p
            className={`cursor-pointer py-2  ${
              islam === "sunnah" ? " border-b-2 border-primary" : ""
            }`}
            onClickCapture={() => setIslam("sunnah")}
          >
            {t("project.sunnah")}
          </p>
        </div>
        <div className="w-24">
          <p
            className={`cursor-pointer py-2  ${
              islam === "islam" ? " border-b-2 border-primary" : ""
            }`}
            onClickCapture={() => setIslam("islam")}
          >
            {t("project.islam")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
