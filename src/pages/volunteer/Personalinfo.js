import React from "react";
import { useTranslation } from "react-i18next";

const Personalinfo = ({ ErrorMessage, Field }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" space-y-6">
        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="  before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc2")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="name"
              placeholder={t("memberFrom.plac2")}
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545]  text-base  focus:outline-none focus:ring-gray-300"
            />
            <ErrorMessage name="name" className="" />
          </div>
        </div>

        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="">{t("memberFrom.desc4")} :</label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field type="radio" name="" />
          </div>
        </div>

        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc5")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="phone"
              placeholder="01xxxxx"
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
            <ErrorMessage name="phone" className="" />
          </div>
        </div>
        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("volunteer.desc")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="emergency"
              placeholder="01xxxxx"
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
            <ErrorMessage name="emergency" className="" />
          </div>
        </div>
        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc6")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="email"
              name="email"
              placeholder="abdullah@gmail.com"
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
            <ErrorMessage name="email" className="" />
          </div>
        </div>
        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="  before:text-red-700 before:text-xl ">
              {t("volunteer.desc3")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="fb"
              placeholder="https://web.facebook.com/"
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:flex block  sm:items-center  relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="   before:text-red-700 before:text-xl ">
              {t("volunteer.desc4")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="nid"
              placeholder="12354786875"
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:flex block   sm:items-center relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="  before:content-['*_'] before:text-xl">
              {t("volunteer.desc5")}
            </label>
          </div>
          <div className="sm:sm:w-4/6 w-full w-full">
            <Field
              type="text"
              name="edu"
              placeholder={t("volunteer.plac")}
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
            <ErrorMessage name="edu" className="" />
          </div>
        </div>

        <div className="sm:flex  block  sm:items-center relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="  before:content-['*_'] before:text-xl">
              {t("memberFrom.desc7")} :
            </label>
          </div>
          <div className=" sm:sm:w-4/6 w-full w-full">
            <Field
              as="select"
              placeholder={t("memberFrom.plac")}
              name="pesa"
              className=" rounded block w-full p-2 "
            >
              <option value="" className="hidden">
                {t("memberFrom.plac4")}
              </option>
              <option value={t("memberFrom.plac")}>
                {t("memberFrom.type")}
              </option>
              <option value={t("memberFrom.type2")}>
                {t("memberFrom.type2")}
              </option>
            </Field>
            <ErrorMessage name="pesa" className="" />
          </div>
        </div>

        <div className="sm:flex  block  sm:items-center relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" before:content-['*_']  before:text-xl ">
              {t("volunteer.desc7")} :
            </label>
          </div>
          <div className=" sm:sm:w-4/6 w-full w-full">
            <Field
              as="textarea"
              name="help"
              placeholder={t("volunteer.plac2")}
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
            <ErrorMessage name="help" className="" />
          </div>
        </div>

        <div className="sm:flex block   sm:items-center relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" ">{t("volunteer.desc8")} :</label>
          </div>
          <div className="sm:sm:w-4/6 w-full w-full">
            <Field
              as="textarea"
              name="exprience"
              placeholder={t("volunteer.plac3")}
              className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
