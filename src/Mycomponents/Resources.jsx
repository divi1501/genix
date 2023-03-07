import React from 'react';
import ResourcesImg from '../img/resources.png';
import GridImg from '../img/grid.png'

const resources = () => {
  return (
    <>
    <div className='resourceCard'>
        <div>
        <img src={ResourcesImg} alt="" />
        </div> 


        <div>
            <span><img src={GridImg} alt="" /> </span> Web Development
        </div>

        <div>
            <p>Google Flutter From Scatch</p>
        </div>
        
        <div>
        <div>
            date
        </div>
        <div>
            readmore
        </div>
        </div>    

</div>

    </>
  )
}

export default resources