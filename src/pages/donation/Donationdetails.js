import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Complex from "./Complex";
import Flood from "./Flood";
import General from "./General";
import Iftar from "./Iftar";
import Monthly from "./Monthly";
import Qurbani from "./Qurbani";
import Reliant from "./Reliant";
import Tree from "./Tree";
import Winter from "./Winter";
import Zakat from "./Zakat";
import nprogress from "nprogress";

const Donationdetails = () => {
  const [details, setDetails] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    nprogress.start();
    axios
      .get(`https://asssunnahfoundation.onrender.com/donate/${category}`)
      .then((res) => {
        setDetails(res.data);
        setIsloading(false);
        nprogress.done();
      });
  }, [category]);

  return (
    <div>
      {(category === "assunnah-complex" && (
        <Complex details={details} isLoading={isLoading} />
      )) ||
        (category === "iftar" && (
          <Iftar details={details} isLoading={isLoading} />
        )) ||
        (category === "qurbani" && (
          <Qurbani details={details} isLoading={isLoading} />
        )) ||
        (category === "zakat" && (
          <Zakat details={details} isLoading={isLoading} />
        )) ||
        (category === "general" && (
          <General details={details} isLoading={isLoading} />
        )) ||
        (category === "winter" && (
          <Winter details={details} isLoading={isLoading} />
        )) ||
        (category === "monthly" && (
          <Monthly details={details} isLoading={isLoading} />
        )) ||
        (category === "self-reliant" && (
          <Reliant details={details} isLoading={isLoading} />
        )) ||
        (category === "self-reliant" && (
          <Reliant details={details} isLoading={isLoading} />
        )) ||
        (category === "flood" && (
          <Flood details={details} isLoading={isLoading} />
        )) ||
        (category === "tree-plantation" && (
          <Tree details={details} isLoading={isLoading} />
        ))}
    </div>
  );
};

export default Donationdetails;
