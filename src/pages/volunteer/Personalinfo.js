import { useTranslation } from "react-i18next";

const Personalinfo = ({ ErrorMessage, Field, setShow, show }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" space-y-6">
        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379]  before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc2")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="name"
              placeholder={t("memberFrom.plac2")}
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0]  text-base  focus:outline-none focus:ring-gray-300"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="name" />
            </p>
          </div>
        </div>

        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="text-[#535379]">{t("memberFrom.desc4")} :</label>
          </div>
          <div className="sm:w-4/6 w-full">
            <input
              type="checkbox"
              className="cursor-pointer"
              name=""
              onClick={() => setShow(!show)}
            />
          </div>
        </div>

        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379] before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc5")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="phone"
              placeholder="01xxxxx"
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="phone" />
            </p>
          </div>
        </div>
        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379] before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("volunteer.desc")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="emergency"
              placeholder="01xxxxx"
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="emergency" />
            </p>
          </div>
        </div>
        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="text-[#535379] before:content-['*_']  before:text-red-700 before:text-xl ">
              {t("memberFrom.desc6")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="email"
              name="email"
              placeholder="abdullah@gmail.com"
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="email" />
            </p>
          </div>
        </div>
        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379] before:text-red-700 before:text-xl ">
              {t("volunteer.desc3")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="fb"
              placeholder="https://web.facebook.com/"
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379]  before:text-red-700 before:text-xl ">
              {t("volunteer.desc4")} :
            </label>
          </div>
          <div className="sm:w-4/6 w-full">
            <Field
              type="text"
              name="nid"
              placeholder="12354786875"
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379] before:content-['*_'] before:text-xl before:text-red-700">
              {t("volunteer.desc5")}
            </label>
          </div>
          <div className="sm:sm:w-4/6  w-full">
            <Field
              type="text"
              name="edu"
              placeholder={t("volunteer.plac")}
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="edu" className="text-red-700" />
            </p>
          </div>
        </div>

        <div className="sm:flex  block   relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="text-[#535379]  before:content-['*_'] before:text-xl before:text-red-700">
              {t("memberFrom.desc7")} :
            </label>
          </div>
          <div className=" sm:sm:w-4/6 w-full">
            <Field
              as="select"
              placeholder={t("memberFrom.plac")}
              name="pesa"
              className=" bg-white text-[#BFCDE0] border p-2 rounded block w-full p-2 "
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
            <p className="text-red-700 mt-1">
              <ErrorMessage name="pesa" className=" text-red-700" />
            </p>
          </div>
        </div>

        <div className="sm:flex  block   relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className=" text-[#535379] before:content-['*_']  before:text-xl before:text-red-700">
              {t("volunteer.desc7")} :
            </label>
          </div>
          <div className=" sm:sm:w-4/6 w-full">
            <Field
              as="textarea"
              name="help"
              placeholder={t("volunteer.plac2")}
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
            <p className="text-red-700 mt-1">
              <ErrorMessage name="help" />
            </p>
          </div>
        </div>

        <div className="sm:flex block    relative w-full  gap-10 ">
          <div className="sm:w-2/6 w-full  sm:text-end sm:my-0 my-2">
            <label className="text-[#535379] ">{t("volunteer.desc8")} :</label>
          </div>
          <div className="sm:sm:w-4/6 w-full">
            <Field
              as="textarea"
              name="exprience"
              placeholder={t("volunteer.plac3")}
              className="border border-[#BFBFBF] w-full block rounded-md p-2  placeholder:text-[#BFCDE0] text-base  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
