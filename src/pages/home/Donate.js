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
      <div className="container bg-white shadow py-7 max-w-[1140px]   rounded">
        <Formik
          initialValues={initialValues}
          validationSchema={donateSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-wrap  lg:px-4 px-4 lg:gap-10 gap-4">
                <div>
                  <Field
                    as="select"
                    name="fund"
                    className="border border-[#BFBFBF] py-2 w-52 rounded  placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none"
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

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder={t("donate_from.email")}
                    className="border border-[#BFBFBF] py-2 w-52 rounded placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none"
                  />
                  <div className="block text-red-700 text-sm">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div>
                  <Field
                    type="number"
                    name="amaount"
                    placeholder={t("donate_from.amaount")}
                    className="border border-[#BFBFBF] py-2 w-52 rounded  placeholder:text-[#BFBFBF] text-base px-3 focus:outline-none "
                  />
                  <div className="block text-red-700 text-sm">
                    <ErrorMessage name="amaount" />
                  </div>
                </div>
                <button
                  type="submit"
                  className=" px-8 rounded h-[45px] w-56 bg-primary text-white"
                >
                  {t("donate_from.button")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Slider />
    </div>
  );
};

export default Donate;
