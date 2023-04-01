import React from "react";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 ">
      <h1>{t("book.title")}</h1>
      <div className="space-y-5 mt-3">
        <p>{t("book.desc")}</p>
      </div>
    </div>
  );
};

export default Book;
