import React from 'react'
import {Fade} from 'react-awesome-reveal';
function Footer({className,animType}) {
  return (
    // <footer class="footer footer-center p-4 bg-base-300 h-16 relative bottom-0 text-base-content">
  <Fade delay={1100} direction='up' className={' footer-center p-4 bg-base-300 h-16 relative bottom-0 mt-auto  text-base-content'+className}>
  <div>
    <p>Copyright © 2022 - loneShip1234 By Github</p>
  </div>
</Fade>
// </footer>
  )
}

export default Footer