import React from "react";
import { useTranslation } from "react-i18next";

const Reliance = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5">
      <h1>{t("reliance.title")}</h1>
      <div className="space-y-7 mt-3">
        <p>{t("reliance.desc")}</p>
        <p>{t("reliance.desc2")}</p>
        <p>{t("reliance.desc3")}</p>
        <p>{t("reliance.desc4")}</p>
        <p>{t("reliance.desc5")}</p>
        <h1>{t("reliance.title2")}</h1>

        <ol class="relative border-l border-primary ">
          <div class="mb-10 ">
            <div className="ml-7 flex items-center ">
              <div class="absolute w-3 h-3 -mt-8 bg-white rounded-full  -left-[7px] border border-primary  "></div>
              <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                {t("reliance.desc6")}
              </h3>
            </div>
            <div className="ml-7 mt-5">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
              <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
                {t("reliance.desc7")}
              </h3>
            </div>
            <div className="ml-7 mt-7 flex items-center">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
              <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                {t("reliance.desc8")}
              </h3>
            </div>
            <div className="ml-7 mt-7 flex items-center">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
              <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                {t("reliance.desc9")}
              </h3>
            </div>
          </div>
        </ol>
        <p>{t("reliance.desc10")}</p>
      </div>
    </div>
  );
};

export default Reliance;
