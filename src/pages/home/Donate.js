import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Slider from "./Slider";

import axios from "axios";

const initialValues = { fund: "", email: "", amaount: "" };

const Donate = () => {
  const { t } = useTranslation();

  const onSubmit = (values) => {
    axios
      .post(
        "https://asssunnahfoundation.onrender.com/checkout/chekcout",
        values
      )
      .then((res) => {
        window.location.replace(res.data.url);
      });
  };

  const donateSchema = Yup.object().shape({
    fund: Yup.string().required(t("donate_from_err.fund")),
    email: Yup.string().required(t("donate_from_err.email")),
    amaount: Yup.number().required(t("donate_from_err.amaount")),
  });

  return (
    <div className=" bg-[#F5F5F5] py-10  ">
      <div className="container">
        <div className=" bg-white shadow py-7   rounded">
          <Formik
            initialValues={initialValues}
            validationSchema={donateSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="grid lg:grid-cols-4 md:grid-cols-2  lg:px-5 md:px-6 px-12 lg:gap-10 md:gap-x-10 gap-y-5">
                  <div className=" w-full">
                    <Field
                      as="select"
                      name="fund"
                      className="border border-[#BFBFBF] py-2 w-full rounded bg-white placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none"
                    >
                      <option value="hello" className="hidden text-[#BFBFBF]">
                        {t("project.title2")}
                      </option>
                      <option value={t("project.qurbani")}>
                        {t("project.qurbani")}
                      </option>
                      <option value={t("project.relif")}>
                        {t("project.relief")}
                      </option>
                      <option value={t("project.orphans")}>
                        {t("project.orphans")}
                      </option>
                      <option value={t("project.sadga")}>
                        {t("project.sadga")}
                      </option>
                      <option value={t("project.clothe")}>
                        {t("project.clothe")}
                      </option>
                      <option value={t("project.tree")}>
                        {t("project.tree")}
                      </option>
                      <option value={t("project.iftar")}>
                        {t("project.iftar")}
                      </option>
                    </Field>
                    <div className="block text-sm text-red-700">
                      <ErrorMessage name="fund" />
                    </div>
                  </div>

                  <div className=" w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t("donate_from.email")}
                      className="border border-[#BFBFBF] py-2  w-full rounded placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none focus:ring-0"
                    />
                    <div className="block text-red-700 text-sm">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className=" w-full">
                    <Field
                      type="number"
                      name="amaount"
                      placeholder={t("donate_from.amaount")}
                      className="border border-[#BFBFBF] py-2  w-full  rounded  placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none focus:ring-0 "
                    />
                    <div className="block text-red-700 text-sm">
                      <ErrorMessage name="amaount" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" px-8 rounded h-[45px]  w-full  bg-primary text-white"
                  >
                    {t("donate_from.button")}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Donate;
