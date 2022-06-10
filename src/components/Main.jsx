import React from 'react'
import {RiShoppingCart2Line} from 'react-icons/ri';
import ToTopButton from './ToTopButton';
import PS5Logo from '../img/ps5 logo.png';
import Dots from './Dots';
import {MainCarusel} from './Carusel'
// import img from '../img/PS5-Controller-PNG-Image.png';
// 
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
function Main() {
  return (
    <React.Fragment>
     <div className=' flex row items-center w-full pl-2 h-[94vh] pr-4 '>
   <Dots className=''/>
   <div className='w-[99%]'>
   <img src={PS5Logo} className='w-custom mb-3  mt-[4.7em]' alt="" />
     <p className='text-custom font-semiBold spacing my-12 mr-12'>Incredible Games Come To Life On PS5.</p>
     <button className='  text-white bg-gray-900 py-4 px-8 rounded-custom mr-full capitalize text-sm  font-regular shadow '>
       <RiShoppingCart2Line className='text-white text-sm inline mr-2 mb-1'/> pre order now
       </button>
   </div>
   {/* <div className=' h-full w-full flex items-center justify-center '> */}
     {/* <img src={img} className='w-11/12 h-3/6 ' alt="" /> */}
   <MainCarusel/>
   
     {/* </div> */}
     </div>
     <ToTopButton/>
     
  
    </React.Fragment>
  )
}

export default Main