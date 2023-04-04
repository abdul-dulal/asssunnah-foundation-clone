import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";
import Account from "./Account";
const price = [
  { amaount: "100", id: 1 },
  { amaount: "1000", id: 2 },
  { amaount: "5000", id: 3 },
  { amaount: "1000", id: 4 },
  { amaount: "50000", id: 5 },
  { amaount: "other", other: 6 },
];

const General = ({ details, isLoading }) => {
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
              <h2>{t("general.hadis")}</h2>
              <h2>{t("general.hadis2")}</h2>
            </div>
          </div>
          <div>
            <div className=" bg-white shadow-sm rounded-md">
              <div className="p-5 ">
                <h1 className="text-xl font-medium text-black">
                  {t(`${_id}.title`)}
                </h1>

                <p className="leading-6 pb-4 mt-5">{t(`${_id}.desc`)}</p>

                <Account price={price} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 container gap-10 py-5">
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("general.desc")}</p>
            <p>{t("general.desc2")}</p>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6 space-y-4">
            <p>{t("general.desc3")}</p>
            <p>{t("general.desc4")}</p>
            <p>{t("general.desc5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
