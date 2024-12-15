import React from 'react'
import CardComponent from '../CardComponent/CardComponent';

const SuperVillainsPage = () => {
    const villainImage = [
        {
          name: "Black Adam",
          img: "https://media.newyorker.com/photos/635abdb1b120c5ac7a42baea/4:3/w_1700,h_1275,c_limit/brody-black-adam.jpg",
        },
        {
          name: "Darkseid",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHphDB_VRAY65X5VQ6hEg_c0aOBijxe_CSKw&s",
        },
        {
          name: "Thanos",
          img: "https://s.yimg.com/ny/api/res/1.2/UwHAHLFMWeEBqh8ghblr1Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en_US/News/TheWrap/Here8217s_What_Happened_to_Thanos-ee76234a8272b969a6c3d61fb159b163",
        },
        {
          name: "Kang the conqueror",
          img: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/f65fa2f7-769f-4de2-93dc-b04a4610f1ce/marvel-studios-reportedly-moving-away-from-kang-the-conqueror-story-arc.jpg",
        },
        {
          name: "Loki",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJftmTCNn_XBghXhQHutIpaSDbP2GAqtXBIg&s",
        },
        {
            name: "Joker",
            img: "https://faroutmagazine.co.uk/static/uploads/1/2022/11/heath-ledger-joker-1140x855.jpg",
          },
      ];
  return (
    <div>
      <p className='fs-1 fw-bold'>Super Villains</p>
      <CardComponent imageArray={villainImage}/>
    </div>
  )
}

export default SuperVillainsPage
