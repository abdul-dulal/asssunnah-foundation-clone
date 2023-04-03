import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./Components/footer/Footer";
import Headertop from "./Components/navbar/Headertop";
import { PublicRoute } from "./Components/routes/Publicroute";
import { ToastContainer } from "react-toastify";
import nprogress from "nprogress";
export const Context = createContext();
const App = () => {
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);
  const [islam, setIslam] = useState("reliance");

  return (
    <div className="">
      <Headertop />
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
