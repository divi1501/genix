import React from 'react'
import Button from 'react-bootstrap/Button';
import Imagediv from '../img/Saly-10.png';
import '../App.css'
export default function Description() {
    return (
        <div className='secLanding'>


            <div className='DescT'>
                <div>
                    <h1 className='title1'>Make <span style={{ color: "#0085FF" }} >Projects</span> that defines the world</h1>
                </div>
                <div>
                    <p className='para1'>Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit interdum mi felis laoreet sagittis.</p></div>
                <div>
                    <button className='bt2'>Explore Projects</button>
                    <button className='bt3'>Learn More</button>
                </div>
            </div>



            <img className='img1' src={Imagediv} />


        </div>



    )
}
