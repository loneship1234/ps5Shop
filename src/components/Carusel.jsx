import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DualSense from '../img/PS5-Controller-PNG-Image.png';
import img from '../img/cyberpunk.jpg';
import imgTwo from '../img/dark souls 3.jpg';
import imgThree from '../img/elden ring.png';
import imgForth from '../img/ghost of tsushima.jpg';
import imgFifth from '../img/god of war.jpg';
import imgSixth from '../img/horizon-forbiden-west.jpg';
import imgSeventh from '../img/sekiro shadow die twice.jpg';
import imgEight from '../img/spider man.jpg';
import imgNinth from '../img/the last of us part 2.jpg';
import imgTen from '../img/spider man miles morales.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Autoplay, EffectFade, Pagination } from "swiper";

export  function MainCarusel() {
  return (
    <>
      <Swiper
      dir="rtl"
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
pagination={{clickable:true}}
        modules={[Autoplay,EffectFade, Pagination]}
        className="mySwiper w-full flex items-center justify-between"
      >
          <SwiperSlide>
          <img src={DualSense} className='w-20' alt="pic"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={DualSense} className='w-20'alt="pic"/>
        </SwiperSlide>
          <SwiperSlide>
          <img src={DualSense} className='w-20'alt="pic"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
// 
export  function SecondaryCarusel() {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={1}
breakpoints={{
  640:{
    slidesPerView:4
  }
}}
    lazy={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
   
            modules={[Autoplay,EffectFade, Pagination]}
            className='mySwiper w-full  h-80  '
    >
      
          <SwiperSlide>
        <div className=" overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={img} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgTwo} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgThree} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600  w-full h-60">  <img src={imgForth} className='w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600">  <img src={imgFifth} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600  w-full h-60">  <img src={imgSixth} className='  w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgSeventh} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgEight} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide><SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgNinth} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="overflow-hidden  rounded-md bg-red-600 w-full h-60">  <img src={imgTen} className=' w-full h-60 transition-all hover:scale-105' alt="pic"/></div>
        </SwiperSlide>

    </Swiper>
  )
}

