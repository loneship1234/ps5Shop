import React from 'react'


export function Card(props) {
    const isNew=()=>{ 
        if (props.isNew===true) {
            return (<div className={"badge select-none text-xs pb-1 pt-1 border-0 "+props.badgeColor}>NEW</div>)
    } }
// 
  return (
   
<div data-theme={props.theme} className="card transition-all hover:shadow-2xl w-96 scale-[0.97] bg-base-100 shadow-lg">
  <figure>
      <img src={require('../img/'+props.game+'.jpg')} alt="poster" className='w-full pic transition-all' />
</figure>
  <div className="card-body">
    <h2 className="card-title capitalize">{props.game}
    {isNew()}
     </h2>
    <p>{props.text}</p>
    <div className="card-actions justify-end items-center">
    <div className="card-actions justify-start  mr-auto">
      <div className="badge badge-outline select-none">{props.category_1}</div>
      <div className="badge badge-outline select-none">{props.category_2}</div>
    </div>
      <button className={"btn border-0 bg-gray-850 hover:text-gray-200 text-white hover:bg-black  "+props.btnColor} onClick={()=>{console.log('click')}}>Buy Now</button>
    </div>
  </div>
</div>

  )
}
export function CardSecondary({name}) {
return (
  <div className='w-72  rounded-md overflow-hidden '>
 <img src={require('../img/'+name+'.jpg')} className='w-72  rounded-md hover:scale-105 transition-all' alt={name} />
 </div>
)
}

