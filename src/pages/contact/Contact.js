import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Address from "./Address";
const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_bwqmbrj",
        "template_hrs9njg",
        form.current,
        "H3228sqp0_i-c7TfW"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            toast.success("Thank For Messaging👍❤️");
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.subject.value = "";
            event.target.message.value = "";
          }
        },
        (error) => {}
      );
  };

  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container ">
          <h2 className="text-white text-[32px] text-center py-7 ">
            {t("contact.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary">
        <div className=" container grid grid-cols-2 gap-7">
          <div className=" bg-white shadow-lg rounded-lg my-10 p-6">
            <h2 className="text-xl">{t("contact.title2")}</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex items-center  relative w-full   gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" ">{t("contact.name")}</label>
                </div>
                <div className="w-4/6">
                  <input
                    type="text"
                    name="to_name"
                    id="name"
                    className="  w-full shadow-lg   py-3 rounded-md my-3 focus:ring-0  "
                    required
                  />
                </div>
              </div>

              <div className="flex items-center  relative w-full   gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" ">{t("contact.email")}</label>
                </div>
                <div className="w-4/6">
                  <input
                    type="email"
                    email="from_name"
                    id="email"
                    className=" w-full  shadow-lg rounded-md focus:ring-0 py-3 my-3 "
                    required
                  />
                </div>
              </div>

              <div className="flex items-center  relative w-full   gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" ">{t("contact.subject")}</label>
                </div>
                <div className="w-4/6">
                  <input
                    type="text"
                    subject="subject"
                    id="subject"
                    required
                    className=" w-full   py-3 my-2 shadow-lg focus:ring-0 rounded-md"
                  />
                </div>
              </div>

              <div className="flex relative w-full   gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" ">{t("contact.text")}</label>
                </div>
                <div className="w-4/6">
                  <textarea
                    message="message"
                    id="message"
                    rows={15}
                    className=" w-full rounded-md py-3 shadow focus:ring-0 my-3"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end ">
                <input
                  type="submit"
                  value={t("contact.btn")}
                  className="px-5 py-3  bg-primary rounded cursor-pointer text-white font-semibold"
                />
              </div>
            </form>
          </div>
          <div>
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
