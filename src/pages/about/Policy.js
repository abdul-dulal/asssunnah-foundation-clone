import React from "react";
import { useTranslation } from "react-i18next";

const Policy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="py-4 text-[#545454]">{t("policy.title")}</h1>
      <div className="px-2">
        <ol class="relative border-l border-primary ">
          <div class="mb-10 ">
            <div className="ml-7 flex items-center ">
              <div class="absolute w-3 h-3 -mt-2.5 bg-white rounded-full  -left-[7px] border border-primary  "></div>
              <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                {t("policy.desc")}
              </h3>
            </div>
            <div className="ml-7 mt-5">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
              <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
                {t("policy.desc2")}
              </h3>
            </div>
            <div className="ml-7 mt-7 flex items-center">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
              <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                {t("policy.desc3")}
              </h3>
            </div>
            <div className="ml-7 mt-7 flex items-center">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
              <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                {t("policy.desc4")}
              </h3>
            </div>
            <div className="ml-7 mt-7 flex items-center">
              <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
              <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                {t("policy.desc5")}
              </h3>
            </div>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Policy;
