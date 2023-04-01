import React from "react";
import { useTranslation } from "react-i18next";

const Video = () => {
  const { t } = useTranslation();
  const url = [
    "https://www.youtube.com/embed/7vRDmjsd6xg",
    "https://www.youtube.com/embed/6w4SCAnPxS8",
    "https://www.youtube.com/embed/T4VIMchyz34",
    "https://www.youtube.com/embed/8YMNH2zM1SE",
    "https://www.youtube.com/embed/K2eXoxL-5og",
    "https://www.youtube.com/embed/zx0TWzkd524",
    "https://www.youtube.com/embed/m0SrsVcFykw",
    "https://www.youtube.com/embed/B3pif_kyJoY",
    "https://www.youtube.com/embed/pokrKG0d5Wc",
    "https://www.youtube.com/embed/xnKpHk1ESkw",
    "https://www.youtube.com/embed/T_qg3QFcmIc",
    "https://www.youtube.com/embed/56cBlOKUkyc",
    "https://www.youtube.com/embed/7vRDmjsd6xg",
  ];

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-3xl text-center py-7 ">
            {t("video.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary py-10">
        <div className=" bg-white shadow-lg rounded-md container py-7">
          <div className=" grid grid-cols-3 gap-6 py-6">
            {url.map((e, index) => {
              const title = index;
              return (
                <div key={index}>
                  <iframe
                    width="355"
                    height="200"
                    className="rounded-lg "
                    src={e}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p className="mt-2 text-center">{t(`videoTitle.${title}`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
