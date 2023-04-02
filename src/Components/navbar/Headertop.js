import React, { useState } from "react";
import { AiFillFacebook, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo-white.7ff767ec.png";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import small from "../../../src/assets/img/smalllogo.png";
import Submenu from "./Submenu";
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
          <Link to="/" className="lg:flex hidden">
            <img src={logo} className="cursor-pointer" alt="" />
          </Link>
          <div className="flex items-center gap-3">
            <Submenu />
            <Link to="/" className="lg:hidden flex">
              <img src={small} className="h-10" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <button className=" sm:px-3 px-1 h-10 rounded bg-primary text-white text-lg">
            {t("account")}
          </button>

          <button
            onClick={() => navigate("/donate")}
            className=" sm:px-3 px-1 h-10 rounded bg-primary text-white text-lg"
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
