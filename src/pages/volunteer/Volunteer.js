import React from "react";
import { useTranslation } from "react-i18next";
import { PersonalSchema } from "../../lib/PersonalSchema";
import Addres from "./Addres";
import Personalinfo from "./Personalinfo";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Volunteer = () => {
  const { t } = useTranslation();
  const validationSchema = PersonalSchema();
  const initialValues = {
    name: "",
    phone: "",
    emergency: "",
    email: "",
    edu: "",
    pesa: "",
    address: "",
    help: "",
    pAddress: "",
    dist: "",
    paraddress: "",
    pdist: "",
  };

  const onSubmit = (values) => {
    if (values.phone === values.emergency) return null;
    console.log(values);
  };
  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 142, 72)" }}>
        <div className="container  ">
          <h2 className="text-white text-3xl text-center py-7 ">
            {t("volunteer.title")}
          </h2>
        </div>
      </div>
      <div className="bg-secodary py-8 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="container">
                <div className=" bg-white shadow-md rounded-md sm:px-4 px-6  py-6">
                  <div className=" grid lg:grid-cols-2 gap-8 ">
                    <div>
                      <p className="text-[17px] sm:ml-10">
                        {t("volunteer.title5")}
                      </p>
                      <Personalinfo Field={Field} ErrorMessage={ErrorMessage} />
                    </div>
                    <div>
                      <Addres Field={Field} ErrorMessage={ErrorMessage} />
                    </div>
                  </div>
                  <p className="text-center py-3 text-red-600">
                    {t("memberFrom.desc10")}
                  </p>

                  <button
                    type="submit"
                    className=" block  rounded h-10 w-full bg-primary text-white mt-5"
                  >
                    {t("memberFrom.button")}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Volunteer;
