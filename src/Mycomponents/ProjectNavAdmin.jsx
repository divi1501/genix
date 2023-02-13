import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import '../App.css'
export default function ProjectNAv() {
    return (
        <>
        <div className='ProjectListC'>
        <div className='CardSearch'>
        <h2 className='CardHeading'>
                Our Courses
            </h2>

            <div className='SearchC'>
                <input type="text" className='CourseSearchBar'  id="" />
                <input type="button" className='CourseSearchBtn' value="Search" />
            </div>
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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                

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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
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
                                <Button className='CardButton' variant="primary">Buy Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                

            </div>
            <div className='CardButtonlightC'>
                <Button className='CardButtonlight'>Explore More</Button>
            </div>
        </div>
        
        
        
        </>


    )
}


// check git