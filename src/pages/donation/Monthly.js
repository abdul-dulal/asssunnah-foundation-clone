import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";
import WinterAccount from "./WinterAccount";

const price = [
  { amaount: "300", id: 1 },
  { amaount: "500", id: 2 },
  { amaount: "1000", id: 3 },
  { amaount: "2000", id: 4 },
  { amaount: "5000", id: 5 },
  { amaount: "10000", other: 6 },
];

const Monthly = ({ isLoading, details }) => {
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
              <h2>{t("monthly.hadis")}</h2>
              <h2>{t("monthly.hadis2")}</h2>
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

        <div className="grid grid-cols-2 container gap-10">
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("monthly.desc")}</p>
            <p>{t("monthly.desc2")}</p>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("monthly.desc3")}</p>
            <p>{t("monthly.desc4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
