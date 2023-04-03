import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const WinterAccount = ({ price }) => {
  const [value, setValue] = useState();
  const [check, setCheck] = useState(true);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      amaount: value.amaount,
    };

    axios
      .post("https://asssunnahfoundation.onrender.com/checkout/chekcout", data)
      .then((res) => {
        window.location.replace(res.data.url);
      });
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {price?.map((balance) => {
          return (
            <div>
              <h3
                className={`border border-[#545454] h-16 w-36 shadow-sm rounded-md p-5 cursor-pointer ${
                  balance.amaount == value?.amaount
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setValue(balance)}
              >
                {balance.amaount} ৳
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <form className="ml-2 mt-4 space-y-3" onSubmit={handleSubmit}>
          <input
            id="any"
            type="checkbox"
            value=""
            className=" rounded  focus:ring-0  cursor-pointer"
            onClick={() => setCheck(!check)}
          />
          <label htmlFor="any" className="cursor-pointer ml-3">
            {t("accounting.desc")}
          </label>
          <div className="flex items-center  relative w-full  gap-10 ">
            <div className="w-2/6 text-end">
              <label className=" before:content-['*_'] before:text-red-700 before:text-xl ">
                {t("accounting.amaount")}
              </label>
            </div>
            {value?.amaount === "other" ? (
              <div className="w-4/6">
                <input
                  type="text"
                  name="name"
                  disabled={check}
                  onChange={({ target }) =>
                    setValue({ amaount: target?.value })
                  }
                  value="10"
                  className="disabled:bg-gray-200 disabled:cursor-not-allowed border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545]  text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                />
              </div>
            ) : (
              <div className="w-4/6">
                <input
                  type="text"
                  name="name"
                  disabled={check}
                  onChange={({ target }) =>
                    setValue({ amaount: target?.value })
                  }
                  value={value?.amaount}
                  className="disabled:bg-gray-200 disabled:cursor-not-allowed border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545]  text-base px-2 focus:outline-none focus:ring-0 rounded-md"
                />
              </div>
            )}
          </div>

          <div className="flex items-center  relative w-full  gap-10  ">
            <div className="w-2/6 text-end">
              <label className="  ">{t("accounting.name")}</label>
            </div>
            <div className="w-4/6">
              <input
                type="text"
                name="name"
                className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545]  text-base px-2 focus:outline-none focus:ring-0 rounded-md"
              />
            </div>
          </div>

          <div className="flex items-center  relative w-full  gap-10  ">
            <div className="w-2/6 text-end">
              <label className=" before:content-['*_'] before:text-red-700 before:text-xl ">
                {t("accounting.email")}
              </label>
            </div>
            <div className="w-4/6">
              <input
                type="email"
                name="email"
                required
                className="border border-[#BFBFBF] w-full block py-2  placeholder:text-[#54545]  text-base px-2 focus:outline-none focus:ring-0 rounded-md"
              />
            </div>
          </div>
          <input
            type="submit"
            value="দান করুন"
            className="ml-auto block bg-primary text-white py-2 px-3 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default WinterAccount;
