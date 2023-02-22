import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import HelpImg1 from '../img/helpimg1.png'

const FreeFeatures = () => {
    return (
        <div>
            <div className='FeaturesContainer'>
                <div>
                    <h2 className='FeaturesHeading'>
                    Check out our free Resources
                    </h2>
                </div>
                <div className='CardC'>

                    <div className='Card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ImgCard} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardBlue'>
                                    <p className='CardRate'>RS 1500</p>
                                    <button className='CardButton' variant="primary">Buy Now</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='Card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ImgCard} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardBlue'>
                                    <p className='CardRate'>RS 1500</p>
                                    <button className='CardButton' variant="primary">Buy Now</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='Card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ImgCard} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardBlue'>
                                    <p className='CardRate'>RS 1500</p>
                                    <button className='CardButton' variant="primary">Buy Now</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FreeFeatures
