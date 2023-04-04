import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";
import WinterAccount from "./WinterAccount";
import payment from "../../../src/assets/img/payment.png";

const price = [
  { amaount: "1200", id: 1 },
  { amaount: "2400", id: 2 },
  { amaount: "3600", id: 3 },
  { amaount: "4800", id: 4 },
  { amaount: "6000", id: 5 },
  { amaount: "other", other: 6 },
];

const Flood = ({ isLoading, details }) => {
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
            <div className="bg-white shadow-md rounded-lg text-lg text-primary p-5 mt-8 space-y-3 text-center">
              <h2>{t("flood.hadis")}</h2>
            </div>
          </div>
          <div>
            <div className=" bg-white shadow-sm rounded-md">
              <div className="p-5 ">
                <h1 className="text-xl font-medium text-black">
                  {t(`${_id}.title`)}
                </h1>

                <p className="leading-6 pb-4 mt-5">{t(`${_id}.desc`)}</p>

                <WinterAccount price={price} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 container gap-10 py-5">
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("flood.desc")}</p>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("winter.desc2")}</p>
            <p>{t("winter.desc3")}</p>
          </div>
        </div>
        <div className="container py-10">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Flood;
