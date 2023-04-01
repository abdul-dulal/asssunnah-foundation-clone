import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Updatenews = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://asssunnahfoundation.onrender.com/news//news")
      .then((res) => setNews(res.data));
  }, []);

  return (
    <div className="bg-secodary py-8">
      <div className="container">
        <h3 className="text-center text-[24px] my-6">{t("update.title")}</h3>
        <div className="grid grid-cols-3 gap-6">
          {news.slice(0, 3).map((e) => (
            <div
              className="bg-white rounded-md p-3 cursor-pointer"
              onClick={() => navigate(`/news-details/${e._id}`)}
            >
              <img src={e.img} className="h-60 rounded-lg w-full" alt="" />
              <h2 className="text-base mt-3">{e.title}</h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <button
            onClick={() => navigate("/news")}
            className="bg-primary w-64 h-10 rounded text-white"
          >
            {t("update.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updatenews;
