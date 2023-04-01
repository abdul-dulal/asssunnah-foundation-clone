import React from "react";
import { useTranslation } from "react-i18next";

const Addres = ({ Field, ErrorMessage }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-5">
      <p className="text-[17px]">{t("volunteer.title2")}</p>
      <div className="flex items-center  relative w-full  gap-10 ">
        <div className="w-2/6 text-end">
          <label className=" before:content-['*']  before:text-red-700 before:text-xl ">
            {t("volunteer.desc9")} :
          </label>
        </div>
        <div className="w-4/6">
          <Field
            type="text"
            name="dist"
            placeholder={t("volunteer.plac4")}
            className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
          />
          <ErrorMessage name="dist" className="" />
        </div>
      </div>
      <div className="flex items-center  relative w-full  gap-10 ">
        <div className="w-2/6 text-end">
          <label className=" before:content-['*']  before:text-red-700 before:text-xl ">
            {t("volunteer.desc10")} :
          </label>
        </div>
        <div className="w-4/6">
          <Field
            as="textarea"
            name="pAddress"
            placeholder={t("volunteer.plac5")}
            className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
          />
          <ErrorMessage name="pAddress" className="" />
        </div>
      </div>

      <p className="text-[17px]">{t("volunteer.title3")}</p>

      <div className="flex items-center  relative w-full  gap-10 ">
        <div className="w-2/6 text-end">
          <label className=" before:content-['*']  before:text-red-700 before:text-xl ">
            {t("volunteer.desc9")} :
          </label>
        </div>
        <div className="w-4/6">
          <Field
            type="text"
            name="pdist"
            placeholder={t("volunteer.plac4")}
            className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
          />
          <ErrorMessage name="pdist" className="" />
        </div>
      </div>
      <div className="flex items-center  relative w-full  gap-10 ">
        <div className="w-2/6 text-end">
          <label className=" before:content-['*']  before:text-red-700 before:text-xl ">
            {t("volunteer.desc10")} :
          </label>
        </div>
        <div className="w-4/6">
          <Field
            as="textarea"
            name="paraddress"
            placeholder={t("volunteer.plac6")}
            className="border border-[#BFBFBF] w-full block rounded-md py-2  placeholder:text-[#54545] text-base  focus:outline-none"
          />
          <ErrorMessage name="paraddress" className="" />
        </div>
      </div>
    </div>
  );
};

export default Addres;
