import React from 'react'

function ToTopButton() {
  const toTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }
  return (
<span className='flex w-[25px] h-[50px] rounded-3xl border-2 shadow-2xl border-black fixed top-[55em] left-[50%] cursor-pointer z-50' onClick={toTop}>
  <span className='block w-4 h-4 bg-black rounded-full m-auto animation'></span>
</span>
  )
}

export default ToTopButton