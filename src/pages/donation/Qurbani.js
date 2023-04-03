import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";

import QurbaniAccount from "./QurbaniAccount";

const Qurbani = ({ details, isLoading }) => {
  const { t } = useTranslation();
  if (isLoading) return <p></p>;
  const { url, _id, title } = details;
  return (
    <div>
      <Title title={title} id={_id} />
      <div className="bg-secodary">
        <div className="container grid grid-cols-2 gap-10  py-10">
          <div>
            <Video url={url} />
            <div className="bg-white shadow-md rounded-lg text-lg text-primary p-5 w-[560px] mt-8 space-y-3 text-center">
              <h2>{t("iftarf.hadis")}</h2>
            </div>
          </div>
          <div>
            <div className=" bg-white shadow-sm rounded-md">
              <div className="p-5 ">
                <h1 className="text-xl font-medium text-black">
                  {t(`${_id}.title`)}
                </h1>

                <p className="leading-6 pb-4 mt-5">{t(`${_id}.desc`)}</p>
                <p className="leading-6 pb-4 mt-5">{t("qurbani.title")}</p>
                <QurbaniAccount />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 container gap-10">
          <div className="bg-white shadow-sm rounded-md p-6">
            <p>{t("qurbani.desc3")}</p>
            <p>{t("qurbani.desc4")}</p>

            <div className="pt-6">
              <ol class="relative border-l border-primary">
                <div class="mb-10 ">
                  <div className="ml-8 flex items-center ">
                    <div class="absolute w-3 h-3 -mt-[5px] bg-white rounded-full  -left-[7px] border border-primary  "></div>
                    <h3 class="mb-1 text-base font-normal leading-none text-primary cursor-pointer">
                      {t("qurbani.desc5")}
                    </h3>
                  </div>
                  <div className="ml-8 mt-4">
                    <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                    <h3 class="mb-1 text-base font-normal leading-none text-primary cursor-pointer">
                      {t("qurbani.desc6")}
                    </h3>
                  </div>
                  <div className="ml-8 mt-5 flex items-center">
                    <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                    <h3 class=" text-base font-normal leading-none text-primary cursor-pointer">
                      {t("qurbani.desc6")}
                    </h3>
                  </div>
                </div>
              </ol>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("qurbani.desc")}</p>
            <p>{t("qurbani.desc2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qurbani;
