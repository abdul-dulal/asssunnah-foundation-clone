import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AiFillEye } from "react-icons/ai";
const Gallery = () => {
  const [img, setImg] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get("https://asssunnahfoundation.onrender.com/img/image")
      .then((res) => setImg(res.data));
  }, []);

  return (
    <div className="container">
      <h3 className="text-center text-[24px] my-8">{t("navbar.gellary")}</h3>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-7 ">
        {img.map((e) => (
          <div className="relative">
            <PhotoProvider speed={() => 800}>
              <PhotoView src={e.img}>
                <div>
                  <img
                    src={e.img}
                    className="cursor-pointer sm:h-48 h-60  w-full rounded-md"
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
  );
};

export default Gallery;
