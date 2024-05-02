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
      <h1 className="text-6xl my-10 ">INTERESTS</h1>
      <h1 className="text-4xl mt-4 ml-4">Cyber Security</h1>
      <Splide aria-labelledby="My Favorite Images" options={ {
    rewind: true,
    height : 400,
  } }
>
    <SplideSlide>
        <h1>Enit Got the Flag 1.0 (ENIT)</h1>
        <img src={require("../../assets/img/ctf1-fe5e0b6e.jpg")}  alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
      <h1>HackFest 8.0 (SUP'COM)</h1>
        <img src={require("../../assets/img/hackfest8.jpg")}  alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
        <h1>HackFest 7.0 (SUP'COM)</h1>
        <img src={require("../../assets/img/ctf4-925536ad.jpg")}  alt="Image 2"/>
    </SplideSlide>
    </Splide>



    <h1 className="text-4xl mt-4 ml-4">Competetive programming</h1>
    <Splide aria-labelledby="My Favorite Images" options={ {
    rewind: true,
    height : 400,
  } }
>
    <SplideSlide>
      <h1>EPC 3.0 (ENSI)</h1>
        <img src={require("../../assets/img/cpc2-6220cb0d.jpg")}  alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
        <h1>EPC 2.0 (ENSI)</h1>
        <img src={require("../../assets/img/epc2.0.jpg")}  alt="Image 2"/>
    </SplideSlide>
    </Splide>



    <h1 className="text-4xl mt-4 ml-4">Hackathon</h1>
    <Splide aria-labelledby="My Favorite Images" options={ {
    rewind: true,
    height : 500,
  } }
>
    <SplideSlide>
      <h1>Conding Universe (ISAMM)</h1>
        <img src={require("../../assets/img/isamm.jpg")}  alt="Image 2"/>
    </SplideSlide>
    </Splide>
      

    </>
  );
}
