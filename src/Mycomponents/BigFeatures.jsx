import React from 'react'
import Featureimg1 from '../img/feature1.png'
import Featureimg2 from '../img/feature2.png'

const BigFeatures = () => {
    return (
        <div className='BigFeatures'>
            <div className='BigFeatureC'>


                <div className='BigFeatureImgC1'>
                    <img className='BigFeatureImg1' src={Featureimg1} />
                </div>



                <div className='BigFeatureDesc' >
                    <div>
                        <h2 className='FeaturesHeading'>
                            Our Features and Services
                        </h2>
                    </div>

                    <div className='FeaturesDesc'>
                        <p className='StandPara'>
                            Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa pharetra.
                        </p>
                    </div>
                </div>
            </div>

            <div className='BigFeatureC'>


                <div className='BigFeatureDesc' >
                    <div>
                        <h2 className='FeaturesHeading'>
                            Our Features and Services
                        </h2>
                    </div>

                    <div className='FeaturesDesc'>
                        <p className='StandPara'>
                            Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa pharetra.
                        </p>
                    </div>
                </div>

                <div className='BigFeatureImgC2'>
                    <img className='BigFeatureImg2' src={Featureimg2} />
                </div>
            </div>

        </div>
    )
}

export default BigFeatures
