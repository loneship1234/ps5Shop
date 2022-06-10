import React from 'react'

import Main from './Main';
import {SecondaryCarusel} from './Carusel';
function HomePage() {
  return (
   <React.Fragment>
     <div className='w-[] h-full'>
      <Main/>
      <div className='mx-3'><SecondaryCarusel/></div>
      </div>
   </React.Fragment>
  )
}

export default HomePage