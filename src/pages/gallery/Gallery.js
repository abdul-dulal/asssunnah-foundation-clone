import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillEye } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState("iftar");
  const [img, setImg] = useState();

  useEffect(() => {
    axios
      .get(
        `https://asssunnahfoundation.onrender.com/img/getImg?type=${gallery}`
      )
      .then((res) => setImg(res.data));
  }, [gallery]);

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-3xl text-center py-7 ">
            {t("gallery.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary">
        <div className="container sm:flex flex py-7 gap-5">
          <div className="lg:w-[20%] sm:w-2/4 w-[45%]  border-r-2  border-gray-200">
            <div className="space-y-3 ">
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "iftar"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("iftar")}
              >
                {t("gallery.iftar")}
              </p>
              <p
                className={`cursor-pointer py-2 ${
                  gallery === "orphans"
                    ? "border-r-2 border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("orphans")}
              >
                {t("gallery.orphans")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "qurbani"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("qurbani")}
              >
                {t("gallery.qurbani")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "food"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("food")}
              >
                {t("gallery.food")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "tubeWell"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("tubeWell")}
              >
                {t("gallery.tubewell")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "relif"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("relif")}
              >
                {t("gallery.relif")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "van"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("van")}
              >
                {t("gallery.van")}
              </p>
              <p
                className={`cursor-pointer py-2  ${
                  gallery === "winter"
                    ? "border-r-2  border-primary text-primary"
                    : ""
                }`}
                onClickCapture={() => setGallery("winter")}
              >
                {t("gallery.winter")}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6 ">
              {img?.map((e) => (
                <div className="relative">
                  <PhotoProvider speed={() => 800}>
                    <PhotoView src={e.img}>
                      <div>
                        <img
                          src={e.img}
                          className="cursor-pointer h-48  w-full rounded-md"
                          alt=""
                        />
                        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-0 hover:opacity-60  cursor-pointer  text-white flex items-center justify-center gap-2 text-xl translate duration-700 ">
                          <span>
                            <AiFillEye />
                          </span>
                          <h3>Preview</h3>
                        </div>
                      </div>
                    </PhotoView>
                  </PhotoProvider>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
