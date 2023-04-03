import React from "react";
import { useTranslation } from "react-i18next";

const Addres = ({ Field, ErrorMessage, show, setShow }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-5">
      <p className="text-[17px]">{t("volunteer.title2")}</p>
      <div className="sm:flex block   relative w-full  gap-10 ">
        <div className="sm:w-2/6 w-full sm:text-end my-2">
          <label className=" before:content-['*_']  before:text-red-700 mt-1 before:text-xl ">
            {t("volunteer.desc9")} :
          </label>
        </div>
        <div className="sm:w-4/6 w-full">
          <Field
            type="text"
            name="dist"
            disabled={show}
            placeholder={t("volunteer.plac4")}
            className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none disabled:bg-gray-100"
          />
          <p className=" text-red-700 mt-1">
            <ErrorMessage name="dist" />
          </p>
        </div>
      </div>
      <div className="sm:flex block   relative w-full  gap-10 my-2">
        <div className="sm:w-2/6 w-full sm:text-end my-2">
          <label className=" before:content-['*_']  before:text-red-700 mt-1 before:text-xl ">
            {t("volunteer.desc10")} :
          </label>
        </div>
        <div className="sm:w-4/6 w-full">
          <Field
            as="textarea"
            name="pAddress"
            disabled={show}
            placeholder={t("volunteer.plac5")}
            className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none disabled:bg-gray-100"
          />
          <p className="text-red-700 mt-1">
            <ErrorMessage name="pAddress" className="" />
          </p>
        </div>
      </div>

      <p className="text-[17px]">{t("volunteer.title3")}</p>

      {show ? (
        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full sm:text-end my-2">
            <label className=" before:content-['*_']  before:text-red-700 mt-1 before:text-xl ">
              {t("volunteer.country2")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="paraddress"
              placeholder={t("volunteer.country")}
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none "
            />
            <p className="text-red-700 mt-1 ">
              <ErrorMessage name="paraddress" className="" />
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="sm:flex block   relative w-full  gap-10 my-2 ">
            <div className="sm:w-2/6 w-full sm:text-end my-2">
              <label className=" before:content-['*_']  before:text-red-700 mt-1 before:text-xl ">
                {t("volunteer.desc9")} :
              </label>
            </div>
            <div className="sm:w-4/6 w-full">
              <Field
                type="text"
                name="pdist"
                placeholder={t("volunteer.plac4")}
                className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none "
              />
              <p className="text-red-700 mt-1">
                <ErrorMessage name="pdist" className="" />
              </p>
            </div>
          </div>
          <div className="sm:flex block    relative w-full  gap-10 ">
            <div className="sm:w-2/6 w-full sm:text-end my-2">
              <label className=" before:content-['*_']  before:text-red-700 mt-1 before:text-xl ">
                {t("volunteer.desc10")} :
              </label>
            </div>
            <div className="sm:w-4/6 w-full">
              <Field
                as="textarea"
                name="paraddress"
                placeholder={t("volunteer.plac6")}
                className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none "
              />
              <p className="text-red-700 mt-1 ">
                <ErrorMessage name="paraddress" className="" />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addres;
