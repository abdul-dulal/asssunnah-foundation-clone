import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Account from "./Account";
import Video from "../../Components/shere/Video";
const price = [
  { amaount: "1200", id: 1 },
  { amaount: "2400", id: 2 },
  { amaount: "3600", id: 3 },
  { amaount: "4800", id: 4 },
  { amaount: "6000", id: 5 },
  { amaount: "other", other: 6 },
];
const Zakat = ({ details, isLoading }) => {
  const { t } = useTranslation();
  if (isLoading) return <p></p>;
  const { url, _id, title } = details;
  return (
    <div>
      <Title title={title} id={_id} />
      <div className="bg-secodary">
        <div className="container grid md:grid-cols-2 gap-10  py-10">
          <div className="w-full">
            <Video url={url} />
            <div className="bg-white shadow-md rounded-lg text-lg text-primary p-5  mt-8 space-y-3 text-center">
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
                <p className="text-black font-bold my-4">
                  {t("iftarf.account")} :
                  <span className="font-semibold">01408506070</span>
                </p>
                <p className="text-base my-2 font-bold">{t("iftarf.desc")}</p>
                <p>{t("bnak.account")}: As sunnah Foundation Zakat Fund</p>
                <p>{t("bnak.accountN")}: 07511100103026 </p>
                <p>{t("bnak.bank")}: Exim Bank Ltd. </p>
                <p>{t("bnak.branch")}: Shatarkul Branch, Dhaka. </p>
                <p className="my-4">{t("iftarf.or")}</p>

                <Account price={price} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 container gap-10 py-4">
          <div className="bg-white shadow-sm rounded-md p-7 space-y-4">
            <p>{t("zakat.desc")}</p>
            <p>{t("zakat.desc2")}</p>
            <p className="text-primary">{t("zakat.desc3")}</p>
            <p>{t("zakat.desc4")}</p>
            <p>{t("zakat.desc5")}</p>
            <p>{t("zakat.desc6")}</p>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("zakat.desc7")}</p>
            <p>{t("zakat.desc8")}</p>

            <div className="pt-6">
              <ol class="relative border-l border-primary">
                <div class="mb-10 ">
                  <div className="ml-10 flex items-center ">
                    <div class="absolute w-3 h-3 -mt-[5px] bg-white rounded-full  -left-[7px] border border-primary  "></div>
                    <h3 class="mb-1 text-base font-normal leading-none text-primary cursor-pointer">
                      {t("zakat.desc9")}
                    </h3>
                  </div>
                  <div className="ml-10 mt-4">
                    <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                    <h3 class="mb-1 text-base font-normal leading-none text-primary cursor-pointer">
                      {t("zakat.desc10")}
                    </h3>
                  </div>
                  <div className="ml-10 mt-5 flex items-center">
                    <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                    <h3 class=" text-base font-normal leading-none text-primary cursor-pointer">
                      {t("zakat.desc11")}
                    </h3>
                  </div>
                </div>
              </ol>
            </div>
            <p>{t("zakat.desc12")}</p>
            <p className="text-primary">{t("zakat.desc13")}</p>
            <p>{t("zakat.desc14")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zakat;
