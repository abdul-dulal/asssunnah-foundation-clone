import React from "react";
import { useTranslation } from "react-i18next";

const Tree = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("tree.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("tree.desc")}</p>
        <p>{t("tree.desc2")}</p>
        <p>{t("tree.desc3")}</p>
      </div>

      <ol class="relative border-l border-primary ">
        <div class="mb-10 ">
          <div className="ml-7 flex items-center ">
            <div class="absolute w-3 h-3 -mt-2.5 bg-white rounded-full  -left-[7px] border border-primary  "></div>
            <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
              {t("tree.desc4")}
            </h3>
          </div>
          <div className="ml-7 mt-5">
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
              {t("tree.desc5")}
            </h3>
          </div>
          <div className="ml-7 mt-7 flex items-center">
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
            <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
              {t("tree.desc6")}
            </h3>
          </div>
          <div className="ml-7 mt-7 flex items-center">
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
            <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
              {t("tree.desc7")}
            </h3>
          </div>
          <div className="ml-7 mt-7 flex items-center">
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
            <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
              {t("tree.desc8")}
            </h3>
          </div>
        </div>
      </ol>
      <p>{t("tree.desc9")}</p>
    </div>
  );
};

export default Tree;
