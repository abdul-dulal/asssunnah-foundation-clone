import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import textlogo from "../../assets/img/logo-text.545b0ef3.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Submenu = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  let activeStyle = {
    color: "#008E48",
  };
  return (
    <div className="lg:hidden block -mt-7 ">
      <section class="">
        <nav
          id="sidenav-3"
          class="fixed top-0 left-0 z-[1035] shadow-2xl  overflow-hidden bg-white  "
          data-te-sidenav-hidden="true"
          data-te-sidenav-color="white"
        >
          <div class="relative m-0 list-none px-[0.2rem]">
            <div class={`relative ${hide ? "visible" : "hidden"}`}>
              <div className="bg-white shadow-lg  flex justify-center">
                <img src={textlogo} className="w-40 my-5" alt="" />
              </div>

              <navbar className="">
                <div className=" w-full space-y-1 mt-5  -z-50 text-base font-normal">
                  <div className=" py-2  px-10">
                    <NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {t("navbar.home")}
                    </NavLink>
                  </div>

                  <div className="  py-2  px-10 hover:text-primary">
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {t("navbar.about")}
                    </NavLink>
                  </div>
                  <div className=" py-2  px-10 hover:text-primary">
                    <NavLink
                      to="/project"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {t("navbar.project")}
                    </NavLink>
                  </div>

                  <div className=" py-2  px-10  hover:text-primary">
                    <NavLink
                      to="/member"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {t("navbar.member")}
                    </NavLink>
                  </div>
                  <div className=" py-2  px-10 hover:text-primary">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/gallery"
                    >
                      {t("navbar.gellary")}
                    </NavLink>
                  </div>
                  <div className=" py-2  px-10 hover:text-primary">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/video"
                    >
                      {t("navbar.video")}
                    </NavLink>
                  </div>
                  <div className="py-2  px-10  hover:text-primary">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/volunteer"
                    >
                      {t("navbar.volunteer")}
                    </NavLink>
                  </div>
                  <div className="py-2  px-10  hover:text-primary">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/news"
                    >
                      {t("navbar.news")}
                    </NavLink>
                  </div>
                  <div className="py-2  px-10  hover:text-primary">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/contact"
                    >
                      {t("navbar.contact")}
                    </NavLink>
                  </div>
                </div>
              </navbar>
            </div>
          </div>
        </nav>

        <button
          class="mt-10 inline-block text-2xl leading-tight transition hover:bg-gray-200 p-2 hover:rounded-md "
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-3"
          onClick={() => setHide(true)}
        >
          <FcMenu />
        </button>
      </section>
    </div>
  );
};

export default Submenu;
