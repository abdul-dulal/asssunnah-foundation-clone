import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";
import Account from "./Account";
const price = [
  { amaount: "2500৳", id: 1 },
  { amaount: "5000৳", id: 2 },
  { amaount: "7500৳", id: 3 },
  { amaount: "10000৳", id: 4 },
  { amaount: "12500৳", id: 5 },
  { amaount: "15000৳", id: 6 },
  { amaount: "17500৳", id: 7 },
  { amaount: "20000৳", id: 8 },
  { amaount: "other", other: 9 },
];

const Complex = ({ details, isLoading }) => {
  const { t } = useTranslation();
  if (isLoading) {
    return <p>loading...</p>;
  }
  const { url, _id, title } = details;
  return (
    <div>
      <Title title={title} id={_id} />
      <div className="bg-secodary">
        <div className="container grid grid-cols-2 gap-10  py-10">
          <div>
            <Video url={url} />
            <div className="bg-white shadow-md rounded-lg text-lg text-primary p-5 w-[560px] mt-8 space-y-3 text-center">
              <h2>{t("complex.hadis")}</h2>
              <h2>{t("complex.hadis2")}</h2>
            </div>
            <div className="bg-white shadow-md rounded-lg  p-5 w-[560px] mt-8 space-y-3">
              <h3 className="text-lg text-center">{t("memberR.title")}</h3>
              <h2>{t("complex.desc")}</h2>
              <p className="text-primary">{t("complex.desc2")}</p>
              <h2>{t("complex.desc3")}</h2>
            </div>
          </div>
          <div>
            <div className=" bg-white shadow-sm rounded-md">
              <div className="p-5 space-y-4">
                <h1 className="text-xl font-medium text-black ">
                  {t(`${_id}.title`)}
                </h1>
                <p className="leading-6 pb-4 ">{t(`${_id}.desc`)}</p>
                <p className="leading-6 pb-4 ">{t("complex.desc4")}</p>
                <Account price={price} isfeet={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complex;
