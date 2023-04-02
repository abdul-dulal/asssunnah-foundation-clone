import React from "react";
import { useTranslation } from "react-i18next";
import Memberright from "./Memberright";

const Member = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <h2 className="text-white text-3xl text-center py-7 ">
          {t("member.title")}
        </h2>
      </div>
      <div className="bg-secodary">
        <div className="container py-8 grid lg:grid-cols-2 gap-8">
          <div className=" w-full">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/FRAoIxlQBkU"
              title="YouTube video player"
              frameborder="0"
              className="w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="bg-white shadow-sm mt-6 px-5 rounded-sm border">
              <h1 className="text-center text-[#545454] py-5">
                {t("member.title2")}
              </h1>
              <div className="space-y-4">
                <p>{t("member.desc")}</p>
                <p>{t("member.desc2")}</p>
                <p>{t("member.desc3")}</p>

                <ol class="relative border-l border-primary ">
                  <div class="mb-10 ">
                    <div className="ml-7 flex items-center ">
                      <div class="absolute w-3 h-3 -mt-2.5 bg-white rounded-full  -left-[7px] border border-primary  "></div>
                      <h3 class="mb-1 text-[15px] font-normal leading-5 text-[#545454]">
                        {t("member.desc4")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-5">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                      <h3 class="mb-1 text-[15px] font-normal leading-6 text-[#545454]">
                        {t("member.desc5")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc6")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc7")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc8")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc9")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc10")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc11")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc12")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc13")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc14")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc15")}
                      </h3>
                    </div>
                    <div className="ml-7 mt-7 flex items-center">
                      <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                      <h3 class=" text-[15px] font-normal leading-none text-[#545454]">
                        {t("member.desc16")}
                      </h3>
                    </div>
                  </div>
                </ol>
                <p>{t("member.desc17")}</p>
                <p>{t("member.title3")}</p>

                <p className="pl-6">{t("member.desc18")}</p>
                <p>{t("member.title4")}</p>

                <p className="pl-6">{t("member.desc19")}</p>
                <p>{t("member.title5")}</p>

                <p className="pl-6">{t("member.desc20")}</p>
                <p>{t("member.title6")}</p>

                <p className="pl-6">{t("member.desc21")}</p>

                <p>{t("member.title7")}</p>
                <p className="pl-6">{t("member.desc22")}</p>

                <p>{t("member.title8")}</p>
                <p className="pl-6 pb-8">{t("member.desc23")}</p>
              </div>
            </div>
          </div>
          <div>
            <Memberright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
