import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./MainCompoent/MainComponent";
import SuperHeroPage from "./SuperHeroPage/SuperHeroPage";
import SuperVillainsPage from "./SuperVillainsPage/SuperVillainsPage";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App p-3">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
