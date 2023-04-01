import React from "react";
import { useTranslation } from "react-i18next";

import MemberFrom from "./MemberFrom";

const Memberright = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-white shadow-sm  px-5 rounded-sm border">
        <h1 className="text-center py-5 text-[#545454]">
          {t("memberR.title")}
        </h1>
        <div className="pb-8 space-y-5">
          <p>{t("memberR.desc")}</p>
          <p className="text-center text-base">{t("memberR.title2")}</p>
          <p>{t("memberR.desc3")}</p>
          <p className="text-center text-base">{t("memberR.title3")}</p>
          <p>{t("memberR.desc4")}</p>
          <p>{t("memberR.desc5")}</p>
          <p>{t("memberR.desc6")}</p>

          <ol class="relative border-l border-primary ml-7">
            <div class="mb-10 ">
              <div className="ml-7 flex items-center ">
                <div class="absolute w-3 h-3 -mt-7 bg-white rounded-full  -left-[7px] border border-primary  "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                  {t("memberR.desc7")}
                </h3>
              </div>
              <div className="ml-7 mt-5">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
                  {t("memberR.desc8")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("memberR.desc9")}
                </h3>
              </div>
            </div>
          </ol>
          <p>{t("memberR.desc10")}</p>
          <p>{t("memberR.desc11")}</p>
          <p>{t("memberR.desc12")}</p>
        </div>
      </div>
      <div className="mt-7 bg-white shadow-sm  px-5 rounded-sm border py-8">
        <MemberFrom />
      </div>
    </div>
  );
};

export default Memberright;
