import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/footer/Footer";
import Headertop from "./Components/navbar/Headertop";
import { PublicRoute } from "./Components/routes/Publicroute";
import NewsDetails from "./pages/news/NewsDetails";
import { ToastContainer } from "react-toastify";

export const Context = createContext();
const App = () => {
  const [islam, setIslam] = useState("reliance");

  return (
    <div className="">
      <Headertop />
      {/* আপনি স্বেচ্ছাসেবক হিসেবে নিবন্ধিত হয়েছেন, জাযাকুমুল্লাহু খাইর। প্রয়োজন সাপেক্ষে আপনার সেবা গ্রহণের জন্য আমরা যোগাযোগ করব ইন শা আল্লাহ। */}
      <Context.Provider value={[islam, setIslam]}>
        <Routes>
          {PublicRoute.map(({ path, Component }) => (
            <Route key={Math.random()} path={path} element={<Component />} />
          ))}
        </Routes>
      </Context.Provider>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
