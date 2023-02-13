import React from 'react'
import HelpImg1 from '../img/helpimg1.png'
const HelpSec = () => {
  return (
    <div><div>
    <div className='BigFeatureC'>


        <div className='BigFeatureImgC1'>
            <img className='BigFeatureImg1' src={HelpImg1} />
        </div>



        <div className='BigFeatureDesc' >
            <div>
                <h2 style={{ color: "#0085FF" }} className='FeaturesHeading'>
                    Our Features and Services
                </h2>
            </div>

            <div className='FeaturesDesc'>
                <p className='StandPara'>
                    Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa pharetra.
                </p>
            </div>
            <div className='HelpBtnC'>
                <button className='HelpBtn' >Contact US</button>
                <button className='HelpBtnl'>FAQs</button>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default HelpSec