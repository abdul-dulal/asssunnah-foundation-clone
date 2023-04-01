import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0A3B1E]">
      <div className="container ">
        <navbar>
          <div className=" flex gap-8 text-white py-3 text-base font-normal">
            <li className="  hover:text-primary">
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/about">{t("navbar.about")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/project">{t("navbar.project")}</Link>
            </li>

            <li className="  hover:text-primary">
              <Link to="/member">{t("navbar.member")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/gallery">{t("navbar.gellary")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/video">{t("navbar.video")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/volunteer">{t("navbar.volunteer")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/news">{t("navbar.news")}</Link>
            </li>
            <li className="  hover:text-primary">
              <Link to="/contact">{t("navbar.contact")}</Link>
            </li>
          </div>
        </navbar>
      </div>
    </div>
  );
};

export default Navbar;
