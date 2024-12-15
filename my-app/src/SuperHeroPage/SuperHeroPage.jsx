import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const SuperHeroPage = () => {
  const heroImage = [
    {
      name: "Deadpool",
      img: "https://wallpapers.com/images/hd/deadpool-3-movie-poster-portals-rp2oz393eex7vrgu.jpg",
    },
    {
      name: "Wolverine",
      img: "https://media.gq.com/photos/66a2d63780462a5d7b1736be/1:1/w_2000,h_2000,c_limit/MCDDEAN_WD040.jpg",
    },
    {
      name: "Superman",
      img: "https://ew.com/thmb/IWTSy6GrKCmZBSIcZwC84oHmNdw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mos-10175c_2-2000-116d947875b84ddcabb01baa1fa1b389.jpg",
    },
    {
      name: "Thor",
      img: "https://cdn.pixabay.com/photo/2024/02/24/15/43/ai-generated-8594264_1280.jpg",
    },
    {
      name: "Iron man",
      img: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
    },
    {
        name: "Bat man",
        img: "https://wallpapers.com/images/hd/dark-knight-hd-kyhwt7kiwonapdy2.jpg",
      },
  ];
  return (
    <div className="">
      <p className="fs-1 fw-bold">Super-heros</p>
      <CardComponent imageArray={heroImage}/>
    </div>
  );
};

export default SuperHeroPage;
