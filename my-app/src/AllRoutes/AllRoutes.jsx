import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SuperHeroPage from "../SuperHeroPage/SuperHeroPage";
import SuperVillainsPage from "../SuperVillainsPage/SuperVillainsPage";
import MainComponent from "../MainCompoent/MainComponent";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/heroPage" element={<SuperHeroPage />} />
      <Route path="/villainPage" element={<SuperVillainsPage />} />
    </Routes>
  );
};

export default AllRoutes;
