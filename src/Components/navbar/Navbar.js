import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";

const Navbar = () => {
  const { t } = useTranslation();
  let activeStyle = {
    color: "#008E48",
  };

  return (
    <div className="bg-[#0A3B1E]">
      <div className="container ">
        <navbar>
          <div className=" lg:flex hidden gap-8 text-white py-3 text-base font-normal">
            <li className="  hover:text-primary">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                to="/project"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.project")}
              </NavLink>
            </li>

            <li className="  hover:text-primary">
              <NavLink
                to="/member"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.member")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/gallery"
              >
                {t("navbar.gellary")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/video"
              >
                {t("navbar.video")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/volunteer"
              >
                {t("navbar.volunteer")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/news"
              >
                {t("navbar.news")}
              </NavLink>
            </li>
            <li className="  hover:text-primary">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/contact"
              >
                {t("navbar.contact")}
              </NavLink>
            </li>
          </div>
        </navbar>
      </div>
    </div>
  );
};

export default Navbar;
