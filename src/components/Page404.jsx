import React from 'react'
import {Fade} from 'react-awesome-reveal';
function Page404() {
  return (
  <React.Fragment>
      <Fade direction='left'  >
     <div className='px-24 pt-24 pb-auto  '  >
       <div className=" w-full h-96 lg:h-[60wh]  flex flex-col items-center  pb-auto  ">
      <Fade direction='left'  delay={500}>
         <p className='uppercase font-bold text-8xl text-center  pt-28 '>error 404</p>
        </Fade>
        <Fade direction='left'  delay={1500}>
         <p className='capitalize font-semibold text-5xl  text-center  mt-10 ml-1 '>page not found</p>
        </Fade>
        <Fade direction='left'  delay={2000}>
         <div className='text-center font-semibold  text-sm mt-10 overflow-y-hidden prose' >
           <a href="https://www.google.com/" className='mx-2 b inline-block'>home page</a>
           <a href="#https://www.google.com/" className='mx-2 b inline-block'>product page</a>
           <a href="https://www.google.com/" className='mx-2 b inline-block'>about us</a>
           </div>
        </Fade>
         </div>
       </div>
       </Fade>
  </React.Fragment>
  )
}

export default Page404