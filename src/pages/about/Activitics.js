import React from "react";
import { useTranslation } from "react-i18next";

const Activitics = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h1 className="py-5">{t("act.title")}</h1>
        <div className="py-3 space-y-3 ">
          <p className="text-[#545454] ">{t("act.desc")}</p>
          <h1 className="text-[#545454] ">{t("act.title2")}</h1>
        </div>
        <div className="px-2">
          <ol class="relative border-l border-primary ">
            <div class="mb-10 ">
              <div className="ml-7 flex items-center ">
                <div class="absolute w-3 h-3 -mt-7 bg-white rounded-full  -left-[7px] border border-primary  "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                  {t("act.desc1")}
                </h3>
              </div>
              <div className="ml-7 mt-5">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc2")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc3")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc4")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc5")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc6")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("act.desc7")}
                </h3>
              </div>
            </div>
          </ol>
        </div>
      </div>

      <div>
        <h1 className="pb-4 text-[#545454]">{t("help.title")}</h1>
        <div className="px-2">
          <ol class="relative border-l border-primary ">
            <div class="mb-10 ">
              <div className="ml-7 flex items-center ">
                <div class="absolute w-3 h-3 -mt-2.5 bg-white rounded-full  -left-[7px] border border-primary  "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                  {t("help.desc1")}
                </h3>
              </div>
              <div className="ml-7 mt-5">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc2")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc3")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc4")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc5")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc6")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("help.desc7")}
                </h3>
              </div>
            </div>
          </ol>
        </div>
      </div>

      <div>
        <h1 className="pb-4 text-[#545454]">{t("dawa.title")}</h1>
        <div className="px-2">
          <ol class="relative border-l border-primary ">
            <div class="mb-10 ">
              <div className="ml-7 flex items-center ">
                <div class="absolute w-3 h-3 -mt-2.5 bg-white rounded-full  -left-[7px] border border-primary  "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                  {t("dawa.desc1")}
                </h3>
              </div>
              <div className="ml-7 mt-5">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
                  {t("dawa.desc2")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("dawa.desc3")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("dawa.desc4")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("dawa.desc5")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("dawa.desc6")}
                </h3>
              </div>
              <div className="ml-7 mt-7 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                  {t("dawa.desc7")}
                </h3>
              </div>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Activitics;
