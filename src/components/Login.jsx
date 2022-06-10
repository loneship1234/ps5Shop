import React,{useState} from 'react'
import {IoMdFingerPrint,IoLogoApple,IoLogoGoogle} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
// import { RiFlowChart } from 'react-icons/ri';
function Login() {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const EmailFunc=(e)=>{

setEmail('hello')
  
  }
  const PassFunc=()=>{
setPass('error')
  }
  return (
      <React.Fragment>
  
    <div className='flex items-center  justify-center h-full '>
<div className=' bg-slate-900 w-full mx-2 lg:mx-0 lg:w-[30em]  h-[42em] rounded-xl py-12 px-5 lg:px-10  text-white '>
        <div class="flex flex-col w-full border-opacity-50">
  
        <div class="flex w-full">
  {/* <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center mr-2"><MdEmail/></div> */}
  {/* <div class="divider divider-horizontal"></div> */}
  <div class=" h-24 flex-grow card hover:bg-slate-600 transition-all  cursor-pointer rounded-box border-2 border-slate-700 place-items-center mr-2 capitalize flex items-center justify-center"><IoLogoGoogle className='w-20 h-8'/>google</div>
  {/* <div class="divider divider-horizontal"></div> */}
  <div class=" h-24 flex-grow card hover:bg-slate-600 transition-all cursor-pointer border-2 border-slate-700 rounded-box place-items-center capitalize flex items-center  justify-center"><IoLogoApple className='w-20 h-8'/>apple</div>
</div>
  <div class="divider before:bg-white after:bg-white before:rounded-sm after:rounded-sm mt-10">OR</div>
<div class="form-control">
  
<label class="label">
    <span class="label-text  text-white">What is your name ?</span>
  </label>
<input type="text" placeholder="Name . . ." class="input w-full  input-ghost bg-slate-900  border-white border-b-2 outline-hidden focus:input-ghost placeholder:select-none" />
<p className='text-red-600 text-xs mt-2 ml-1 select-none' value='eree'></p>
{/*  */}
<label class="label mt-3">
    <span class="label-text  capitalize text-white">what is your email address ?</span>
  </label>
<input type="email" placeholder="Email . . ." class="input w-full  bg-gray-200 input-ghost placeholder:select-none" onChange={EmailFunc}/>
<span className='text-red-600 text-xs mt-2 select-none'  >{email}</span>
{/*  */}
<label class="label mt-3">
    <span class="label-text   capitalize text-white">what is your new password ?</span>
  </label>
<input type="text" placeholder="Password . . ." class="input w-full bg-gray-200 input-ghost placeholder:select-none" onChange={PassFunc}/>
<p className='text-red-600 text-xs mt-2  select-none'  >{pass}</p>
{/*  */}

{/*  */}
</div>
</div>
    </div>
</div>

    </React.Fragment>
  )
}


function FingerPrintLogin() {
  return (
    <div className='flex items-center justify-center h-full text-white select-none'>
    <div className='bg-gray-800  w-[30em] lg:w-[32em]  h-[39em] rounded-xl px-6 lg:px-10 '>
    <IoMdFingerPrint className=' text-7xl ml-auto mr-auto mt-12'/>
    <p className='text-center text-xl mt-8 uppercase'>use your fingerprint for registeration</p>
    <div class="flex flex-col w-full mt-12">
    <div class=" h-20  bg-gray-600 rounded-box place-items-center hover:bg-gray-700 hover:text-gray-300 capitalize flex items-center cursor-pointer "> <MdEmail className='ml-28 mr-3 text-3xl'/><p className='text-center mr-auto'> sign up with google</p></div>
      <div class="divider before:bg-white after:bg-white my-4">or</div> 
      <div class=" h-20  bg-gray-600 rounded-box place-items-center hover:bg-gray-700 hover:text-gray-300 capitalize flex items-center cursor-pointer "> <IoLogoGoogle className='ml-28 mr-3 text-3xl'/><p className='text-center mr-auto'> sign up with google</p></div>
      <div class="divider before:bg-white after:bg-white my-4">or</div> 
      <div class=" h-20  bg-gray-600 rounded-box place-items-center hover:bg-gray-700 hover:text-gray-300 capitalize flex items-center cursor-pointer "> <IoLogoApple className='ml-28 mr-3 text-3xl'/><p className='text-center mr-auto'> sign up with apple ID</p></div>
    </div>
    </div>
     </div>
  )
}

export  {Login,FingerPrintLogin}