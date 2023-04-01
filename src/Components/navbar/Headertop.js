import React, { useState } from "react";
import { AiFillFacebook, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo-white.7ff767ec.png";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
const Headertop = () => {
  const [active, setActive] = useState("bn");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActive(lang);
  };
  return (
    <div className="">
      <div className="container flex justify-end gap-3 text-2xl  py-4">
        <AiFillFacebook className="text-[#4267B2]" />
        <AiFillYoutube className="text-[#FF0000]" />
        <AiOutlineMail className="text-primary" />
        <BsFillTelephoneFill className="text-primary" />
        <div className="flex">
          <button
            onClick={() => handleLanguage("en")}
            className={`h-6 border text-[12px]  p-2 flex items-center justify-center ${
              active === "en" ? "bg-primary text-white" : ""
            }`}
          >
            En
          </button>
          <button
            onClick={() => handleLanguage("bn")}
            className={`h-6 border text-[12px]  p-2 flex items-center justify-center ${
              active === "bn" ? "bg-primary text-white" : ""
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
      <div className="container flex justify-between items-center my-5">
        <div>
          <Link to="/">
            <img src={logo} className="cursor-pointer" alt="" />
          </Link>
        </div>
        <div className="flex gap-3">
          <button className=" px-3 h-10 rounded bg-primary text-white text-lg">
            {t("account")}
          </button>

          <button
            onClick={() => navigate("/donate")}
            className=" px-3 h-10 rounded bg-primary text-white text-lg"
          >
            {t("donatebtn")}
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Headertop;
