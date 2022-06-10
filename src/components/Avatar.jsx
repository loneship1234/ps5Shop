import React from 'react'
import {Detector} from 'react-detect-offline';

function Avatar() {
    // const [Online, setOnline] = useState('online');

    return (
        <React.Fragment>
            <Detector
  render={({ online }) => (
    <div class={online?'avatar mt-2 mr-6 online before:w-[20%]':'avatar mt-2 mr-6 offline'}>
    <div class="w-8  mask mask-squircle">
      <img src="https://api.lorem.space/image/face?hash=28212" alt='profile pic' />
    </div>
  </div>
  )}
/>
  </React.Fragment>
  )
}

export default Avatar