import axios from "axios";
import React, { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    fetch("localhost:3000/init")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Checkout;
