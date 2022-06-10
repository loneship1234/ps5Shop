import React,{useState} from 'react'
import Avatar from './Avatar';
// icon
import {MdVideogameAsset} from 'react-icons/md';
import {RiHome5Fill,RiAccountCircleFill,RiCustomerService2Fill} from 'react-icons/ri';
import {FaNewspaper} from 'react-icons/fa';
import {IoHardwareChip,IoLogIn,IoLogOut} from 'react-icons/io5';
import {HiMenuAlt3} from 'react-icons/hi';
// image
import Logo from '../img/Logo.png';
import ShoppingBag from '../img/shopping-bag.png';
// route
import {Link} from 'react-router-dom';

function NavBar ({children})  {
  const [Opened, setOpened] = useState(false);
  const NavBarClosedAfterClicked=()=>{
    setOpened(false)
 }
    return (
        <div class="drawer  ">
    <input id="my-drawer-3" type="checkbox"  checked={Opened}  class="drawer-toggle" /> 
    {/*  */}
    <div class="drawer-content flex flex-col ">
      <div class="w-full navbar bg-base-100 bg-transparent">
       <Link className=' justify-end mr-auto ml-5 cursor-pointer' to='/'>    <img src={Logo} className='  w-40'  alt="" /></Link>
        <div class="flex-none lg:hidden" onClick={()=>{setOpened(true)}}>
        {/*  */}
          <label for="my-drawer-3" class="">
          <HiMenuAlt3  className='btn btn-square btn-ghost w-'/>
          </label>
        </div> 
        <div class="flex-none hidden lg:block font-semiBold ">
          <ul class="menu menu-horizontal  ">
         <div className='flex justify-center items-center mt-2'> <Link to='/Games' id='a' className='mr-20 a-1'>Games</Link></div>
         {/* <div className='flex justify-center items-center mt-2'>    <Link to='' id='a' className='mr-20 a-2'>Hardware</Link></div> */}
         <div className='flex justify-center items-center mt-2'>  <Link to='/about-us' id='a' className='mr-20 a-3'>Services</Link></div>
         <div className='flex justify-center items-center mt-2'>  <Link to='/news' id='a' className='mr-20 a-4'>News</Link></div>
         <div className='flex justify-center items-center mt-2'>   <Link to='/login' id='a' className='mr-20 a-4'>Login</Link> </div>
         <div className='flex justify-center items-center '>  <img src={ShoppingBag} className='w-8 scale-90 -ml-6 mr-10 cursor-pointer'  alt="shopping-bag" /></div>
         <div className='flex justify-center items-center '> <Link to='/account'><Avatar/></Link>   </div>
          </ul>
        </div>
      </div>
     
    {children}
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay right"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
           <img src={Logo} className=' ml-0 w-28 mb-7 justify-end mr-auto' alt="" />
           
          <Link to='/'  onClick={NavBarClosedAfterClicked} className='flex items-center hover:bg-gray-200 rounded-md mb-2 cursor-pointer'> <RiHome5Fill className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Home</p></Link>
          <Link to='/Games'onClick={NavBarClosedAfterClicked}  className='flex items-center hover:bg-gray-200 rounded-md mb-2 cursor-pointer'> <MdVideogameAsset className='w-7 h-5'/> <p id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Games</p></Link>
          <Link  to='' onClick={NavBarClosedAfterClicked} className='flex items-center hover:bg-gray-200 rounded-md mb-2 cursor-pointer'> <IoHardwareChip className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Hardware</p></Link>
          {/*  */}
          <Link to=''  onClick={NavBarClosedAfterClicked} className='flex items-center hover:bg-gray-200 rounded-md mb-2 cursor-pointer'> <RiCustomerService2Fill className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Services</p></Link>
          <Link to=''onClick={NavBarClosedAfterClicked}  className='flex items-center hover:bg-gray-200 rounded-md mb-2 cursor-pointer'> <FaNewspaper className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>News</p></Link>
          <Link to='/account' onClick={NavBarClosedAfterClicked} className='flex items-center hover:bg-gray-200 rounded-md mb-3 cursor-pointer'> <RiAccountCircleFill className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Account</p></Link>
          <hr />
         <Link to='/login' onClick={NavBarClosedAfterClicked} className='flex items-center mt-3 hover:bg-gray-200 rounded-md cursor-pointer'> <IoLogIn className='w-7 h-5'/> <p id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>login</p></Link>
         <Link to='' onClick={NavBarClosedAfterClicked} className='flex items-center hover:bg-gray-200 rounded-md mt-2 cursor-pointer'> <IoLogOut className='w-7 h-5'/> <p  id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>logout</p></Link>
        
      </ul>
      
    </div>
  </div>
   );
  }

 
export default NavBar;
