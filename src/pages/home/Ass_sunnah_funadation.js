import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import golden from "../../assets/img/golden-gate (1).jpg";

const Funadation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="container sm:flex block  lg:px-0 sm:gap-3    my-5">
      <div className="sm:w-5/12 w-full mt-7 sm:block  flex justify-center">
        <img src={golden} className="rounded-full" alt="" />
      </div>
      <div className=" sm:w-7/12 w-full  space-y-5 mt-5">
        <h1> {t("ass_sunnah_fundation.title")}</h1>
        <div className="h-[2px] w-full bg-[#BBBBBB]" />
        <p>{t("ass_sunnah_fundation.desc")}</p>

        <div className="pt-6">
          <ol class="relative border-l border-primary">
            <div class="mb-10 ">
              <div className="ml-10 flex items-center ">
                <div class="absolute w-3 h-3 -mt-[5px] bg-white rounded-full  -left-[7px] border border-primary  "></div>
                <h3
                  class="mb-1 text-base font-normal leading-none text-primary cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  {t("ass_sunnah_fundation.education")}
                </h3>
              </div>
              <div className="ml-10 mt-4">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary "></div>
                <h3
                  class="mb-1 text-base font-normal leading-none text-primary cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  {t("ass_sunnah_fundation.help")}
                </h3>
              </div>
              <div className="ml-10 mt-5 flex items-center">
                <div class="absolute w-3 h-3 bg-white rounded-full mt-1  -left-1.5 border border-primary  "></div>
                <h3
                  class=" text-base font-normal leading-none text-primary cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  {t("ass_sunnah_fundation.dawa")}
                </h3>
              </div>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Funadation;
