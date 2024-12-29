import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SuperHeroPage from "../SuperHeroPage/SuperHeroPage";
import SuperVillainsPage from "../SuperVillainsPage/SuperVillainsPage";
import MainComponent from "../MainCompoent/MainComponent";
import PageNotFound from "../PageNotFound/PageNotFound";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../SignUp/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/heroPage" element={<SuperHeroPage />} />
      <Route path="/villainPage" element={<SuperVillainsPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
};

export default AllRoutes;
