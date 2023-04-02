import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const url = [
    "https://www.youtube.com/embed/7vRDmjsd6xg",
    "https://www.youtube.com/embed/6w4SCAnPxS8",
    "https://www.youtube.com/embed/T4VIMchyz34",
  ];
  return (
    <div className="bg-secodary">
      <div className="container py-6">
        <div>
          <h3 className="text-center text-[24px] my-6">{t("navbar.video")}</h3>
          <div className=" container mt-7">
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2  justify-center gap-16 py-6">
              {url.map((e, index) => {
                const title = index;
                return (
                  <div key={index}>
                    <iframe
                      className="rounded-lg sm:w-[355px] w-full sm:h-[200px] h-[300px] "
                      src={e}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <p className="mt-2 text-center">
                      {t(`videoTitle.${title}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center my-8">
            <button
              onClick={() => navigate("/video")}
              className="bg-primary w-64 h-10 rounded text-white"
            >
              {t("update.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
