import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const [donates, setDonate] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get("https://asssunnahfoundation.onrender.com/donate/donate")
      .then((res) => setDonate(res.data));
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-[32px] text-center py-7 ">
            {t("change")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary py-8">
        <div className="container grid grid-cols-2 gap-7  ">
          {donates.map((e) => {
            return (
              <div
                className="space-y-4 bg-white shadow-sm rounded-b-lg cursor-pointer"
                onClick={() => navigate(`/donate/${e.category}`)}
              >
                <img src={e.img} className="rounded-t-lg" alt="" />
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
      </div>
    </div>
  );
};

export default Donation;
