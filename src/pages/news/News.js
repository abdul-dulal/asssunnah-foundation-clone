import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/news/news")
      .then((res) => setNews(res.data));
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-3xl text-center py-7 ">
            {t("navbar.news")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary py-7">
        <div className="container grid grid-cols-3 gap-8 ">
          {news.map((data) => (
            <div
              key={data._id}
              onClick={() => navigate(`/news-details/${data._id}`)}
              className="bg-white shadow-md rounded p-3 cursor-pointer"
            >
              <h2 className="text-[18px] pb-2">{data.title}</h2>
              <img src={data.img} className="rounded-md" alt="" />
              <div className="h-24 overflow-y-auto mt-3">
                <h3 className="text-sm leading-6">{data.desc}</h3>
                <h3 className="text-sm leading-6">{data.desc2}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
