import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MemberFrom = () => {
  const { t } = useTranslation();
  const initialValues = {
    member: "",
    name: "",
    fname: "",
    phone: "",
    email: "",
    address: "",
  };
  const donateSchema = Yup.object().shape({
    member: Yup.string().required(t("member_from_err.member")),
    name: Yup.string()
      .required(t("member_from_err.name"))
      .min(5, t("member_from_err.name")),
    fname: Yup.string()
      .required(t("member_from_err.fname"))
      .min(5, t("member_from_err.fname")),
    phone: Yup.number().required(t("member_from_err.phone")),
    email: Yup.string()
      .required(t("member_from_err.email"))
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email is not valid !"
      ),
    address: Yup.string().required(t("member_from_err.address")),
  });
  const onSubmit = (values) => {
    console.log(values, "click");
  };
  return (
    <div>
      <h1 className="text-center mb-5">{t("memberFrom.title")}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={donateSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className=" space-y-6">
              <div className="flex items-center  relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    as="select"
                    name="member"
                    className="bg-white border border-[#BFBFBF]  text-base text-[#54545]  block w-full  focus:outline-none focus:ring-0 rounded-md"
                  >
                    <option value="">{t("memberFrom.plac")}</option>
                    <onpointerdown value={t("memberFrom.plac")}>
                      {t("memberFrom.type")}
                    </onpointerdown>
                    <option value={t("memberFrom.type2")}>
                      {t("memberFrom.type2")}
                    </option>
                  </Field>
                  <ErrorMessage name="member" className="" />
                </div>
              </div>

              <div className="flex items-center  relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc2")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="name"
                    placeholder={t("memberFrom.plac2")}
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545]  text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                  <ErrorMessage name="name" className="" />
                </div>
              </div>

              <div className="flex items-center  relative w-full   gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc3")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="fname"
                    placeholder={t("memberFrom.plac3")}
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                  <ErrorMessage name="fname" className="" />
                </div>
              </div>

              <div className="flex items-center  relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className="">{t("memberFrom.desc4")}</label>
                </div>
                <div className="w-4/6">
                  <Field type="radio" name="" />
                </div>
              </div>

              <div className="flex items-center  relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc5")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="01xxxxx"
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                  <ErrorMessage name="phone" className="" />
                </div>
              </div>

              <div className="flex items-center  relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc6")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="email"
                    name="email"
                    placeholder="abdullah@gmail.com"
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                  <ErrorMessage name="email" className="" />
                </div>
              </div>

              <div className="flex   items-center relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className="  ">{t("memberFrom.desc7")}</label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="pesa"
                    placeholder={t("memberFrom.plac4")}
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                </div>
              </div>

              <div className="flex   items-center relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className="  ">{t("memberFrom.desc8")}</label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="reference"
                    placeholder={t("memberFrom.plac5")}
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                </div>
              </div>

              <div className="flex   items-center relative w-full  gap-10 ">
                <div className="w-2/6 text-end">
                  <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
                    {t("memberFrom.desc9")}
                  </label>
                </div>
                <div className="w-4/6">
                  <Field
                    type="text"
                    name="address"
                    placeholder={t("memberFrom.plac6")}
                    className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545] text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                  />
                  <ErrorMessage name="address" className="" />
                </div>
              </div>
              <p className="text-center">{t("memberFrom.desc10")}</p>
              <p className="text-center">{t("memberFrom.desc11")}</p>
              <button
                type="submit"
                className="block px-8 rounded h-[45px] w-full bg-primary text-white"
              >
                {t("memberFrom.button")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MemberFrom;
