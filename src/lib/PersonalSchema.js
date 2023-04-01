import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const PersonalSchema = () => {
  const { t } = useTranslation();
  const validation = Yup.object().shape({
    name: Yup.string()
      .required(t("member_from_err.name"))
      .min(5, t("member_from_err.name")),
    phone: Yup.number().required(t("member_from_err.phone")),
    emergency: Yup.number().required(t("volunteer_from_err.emergency")),
    email: Yup.string()
      .required(t("member_from_err.email"))
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email is not valid !"
      ),
    address: Yup.string().required(t("member_from_err.address")),
    pesa: Yup.string().required(t("volunteer_from_err.pesa")),
    edu: Yup.string()
      .required(t("volunteer_from_err.edu"))
      .min(5, t("volunteer_from_err.edu")),
    help: Yup.string().required(t("volunteer_from_err.help")),
    dist: Yup.string().required(t("volunteer_from_err.pesa")),
    pdist: Yup.string().required(t("volunteer_from_err.pesa")),
    pAddress: Yup.string().required(t("volunteer_from_err.pAddress")),
    paraddress: Yup.string().required(t("volunteer_from_err.pAddress")),
  });
  return validation;
};
