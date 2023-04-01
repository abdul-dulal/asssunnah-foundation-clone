import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { title, img, desc, img2, img3, img4, desc2, desc3, desc4 } = news;
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/news/news_details/${id}`)
      .then((res) => setNews(res.data));
  }, []);

  return (
    <div className="bg-secodary py-12 ">
      <div className="container bg-white shadow-md rounded-md py-6 space-y-5">
        <h2 className="text-3xl ">{title} </h2>
        <img src={img} alt="" />
        <p className="text-base">{desc}</p>
        <div className="flex justify-center">
          {img2 && <img src={img2} className=" max-h-[450px] w-3/4" alt="" />}
        </div>
        {desc2 && <p className="text-base">{desc2}</p>}
        <div className="flex justify-center">
          {img3 && <img src={img3} className=" max-h-[450px] w-3/4" alt="" />}
        </div>
        {desc3 && <p className="text-base">{desc3}</p>}
        <div className="flex justify-center">
          {img4 && <img src={img4} className=" max-h-[450px] w-3/4" alt="" />}
        </div>
        {desc3 && <p className="text-base">{desc3}</p>}
      </div>
    </div>
  );
};

export default NewsDetails;
