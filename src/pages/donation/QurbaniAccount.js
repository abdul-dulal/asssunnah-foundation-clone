import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const QurbaniAccount = () => {
  const [quantity, setQuantity] = useState(0);
  const [newQuan, setNewquan] = useState(0);
  const [value, setValue] = useState();
  const [check, setCheck] = useState(true);
  const price = quantity * 7000;
  const price2 = newQuan * 10000;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  const { t } = useTranslation();
  return (
    <div>
      <div className="text-[#545454] text-[15px]">
        <h3>
          {t("bnak.account")} :
          <span className="ml-2"> As sunnah Foundation</span>
        </h3>
        <h3>
          {t("bnak.accountN")} :<span className="ml-2"> 20503100201496517</span>
        </h3>
        <h3>
          {t("bnak.bank")} :
          <span className="ml-2"> Islami Bank Bangladesh ltd</span>
        </h3>
        <h3>
          {t("bnak.branch")} : <span className="ml-2"> Badda, Dhaka.</span>
        </h3>
        <h3>
          {t("bnak.rnumber")} : <span className="ml-2"> 125260341</span>
        </h3>
        <h3>
          {t("bnak.code")} : <span className="ml-2"> IBBLBDDH</span>
        </h3>
        <h3 className=" mt-5">{t("iftarf.account")}: 01756400541</h3>
      </div>
      <div className=" mt-3">
        <div className="grid grid-cols-4 gap-6 items-center">
          <p>{t("cow.title")}</p>
          <p>7000 ৳</p>
          <div className="flex gap-4">
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
              className="border border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed hover:border-black bg-white shadow rounded-md h-8 w-9"
            >
              -
            </button>
            <h3>{quantity}</h3>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border border-gray-400  hover:border-black bg-white shadow rounded-md h-8 w-9"
            >
              +
            </button>
          </div>
          <p>{price} ৳</p>
        </div>
        {quantity > 0 && (
          <p className="text-[13px] mt-2">
            আপনি {quantity} টি গরু কুরবানির জন্য নিয়্যত করায় সর্বোচ্চ
            {quantity * 7} টি নাম অন্তর্ভুক্ত করতে পারবেন
          </p>
        )}
      </div>
      <div className=" mt-6">
        <div className="grid grid-cols-4 gap-6 items-center ">
          <p>{t("cow.title2")}</p>
          <p>7000 ৳</p>
          <div className="flex gap-4">
            <button
              onClick={() => setNewquan(newQuan - 1)}
              disabled={newQuan === 0}
              className="border border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed hover:border-black bg-white shadow rounded-md h-8 w-9"
            >
              -
            </button>
            <h3>{newQuan}</h3>
            <button
              onClick={() => setNewquan(newQuan + 1)}
              className="border border-gray-400  hover:border-black bg-white shadow rounded-md h-8 w-9"
            >
              +
            </button>
          </div>
          <p>{price2} ৳</p>
        </div>
        {newQuan > 0 && (
          <p className="text-[13px] mt-2">
            আপনি {newQuan} টি গরু কুরবানির জন্য নিয়্যত করায় সর্বোচ্চ
            {newQuan * 1} টি নাম অন্তর্ভুক্ত করতে পারবেন
          </p>
        )}
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
                  onChange={({ target }) => setValue(target?.value)}
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
                  onChange={({ target }) => setValue(target?.value)}
                  value={price + price2}
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

export default QurbaniAccount;
