import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function Interests() {
  
  return (
    <>
      <h1 className="text-6xl my-10 text-[#0000FF]">INTERESTS</h1>
      <h1 className="text-4xl my-10 ml-4">Cyber Security</h1>
      <Splide aria-labelledby="My Favorite Images">
    <SplideSlide>
        <img src={require("../../assets/img/khaled.jpeg")} alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
        <img src={require("../../assets/img/khaled.jpeg")}  alt="Image 2"/>
    </SplideSlide>
    </Splide>


    
      

    </>
  );
}
