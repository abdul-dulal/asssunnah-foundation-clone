import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Change = () => {
  const [donates, setDonate] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get("https://asssunnahfoundation.onrender.com/donate/donate")
      .then((res) => setDonate(res.data.slice(0, 6)));
  }, []);

  return (
    <div className="bg-secodary my-12">
      <div className="text-center text-3xl py-9">
        <h2>{t("change")}</h2>
      </div>
      <div className="container grid lg:grid-cols-3 sm:grid-cols-2  gap-7 rounded-md ">
        {donates.map((e) => {
          return (
            <div
              className="space-y-4 bg-white shadow-sm rounded-md cursor-pointer"
              onClick={() => navigate(`/donate/${e.category}`)}
            >
              <img src={e.img} className="rounded-md" alt="" />
              {
                <h1 className="text-xl font-medium text-center">
                  {t(`${e._id}.title`)}
                </h1>
              }
              <div className="overflow-y-auto h-[135px] px-3">
                {
                  <p className="leading-6 pb-4 text-black">
                    {t(`${e._id}.desc`)}
                  </p>
                }
              </div>
              <div className="px-3 pb-5">
                <button
                  type="submit"
                  className="  rounded h-[45px] w-full bg-primary text-white"
                >
                  {t("donate_from.button")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex  justify-center pb-8">
        <button
          className="bg-primary text-white h-10 w-64 rounded py-2 mt-8"
          onClick={() => [navigate("/donate")]}
        >
          {t("update.button")}
        </button>
      </div>
    </div>
  );
};

export default Change;
