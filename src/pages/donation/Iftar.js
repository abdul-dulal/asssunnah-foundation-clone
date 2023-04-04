import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../Components/shere/Title";
import Video from "../../Components/shere/Video";
import Account from "./Account";

const price = [
  { amaount: "1200", id: 1 },
  { amaount: "2400", id: 2 },
  { amaount: "3600", id: 3 },
  { amaount: "4800", id: 4 },
  { amaount: "6000", id: 5 },
  { amaount: "other", other: 6 },
];

const Iftar = ({ details, isLoading }) => {
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
            <div className="bg-white shadow-md rounded-lg text-lg text-primary p-5 w-full mt-8 space-y-3 text-center">
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

                <Account price={price} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 container gap-10 py-5">
          <div className="bg-white shadow-sm rounded-md p-6">
            <p>{t("iftarf.desc2")}</p>
          </div>
          <div className="bg-white shadow-sm rounded-md p-6">
            <p>{t("iftarf.desc3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iftar;
