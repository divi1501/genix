import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgCard from './123.png';
import Add from '../img/add.png';
import Popup from './Popup';
import { useState } from 'react';

import '../App.css'
export default function ProjectNAvAdmin() {
    const [ButtonPopup, SetButtonPopup] = useState(false);
    return (
        <>
            <div className='ProjectListC'>
                <div className='CardSearch'>
                    <h2 className='CardHeading'>
                        Our Courses
                    </h2>

                    <div className='SearchC'>
                        <input type="text" className='CourseSearchBar' id="" />
                        <input type="button" className='CourseSearchBtn' value="Search" />
                        <button className='AddProjectBtn' onClick={() => SetButtonPopup(true)}><img className='Add' src={Add} />
                            <span>Add Project</span></button>

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
            <Popup trigger={ButtonPopup}>
                
                <h3>Upload Project</h3>
                <form action="">
                <div className="innerc">
                    <h5>Title</h5>
                    <input className='TitleInput' type="text" />
                </div>

                <div className="innerc">
                    <h5>Description</h5>
                    <textarea className='DescriptionInput' name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="innerc">
                    <h5>Video</h5>
                    <input className='FileInput' type="file" class="form-control" id="customFile" />
                </div>

                <div className="innerc">
                    <h5>Add Files</h5>
                    <input type="file" class="form-control" id="customFile" />
                </div>

                <div className='BtnC'>
                    <button onClick={() => SetButtonPopup(false)} className='CancelBtn'>Cancel</button>
                    
                    <input className='DoneBtn' type="submit" value="Done" />
                </div>
                </form>

                
                
             </Popup>


        </>


    )
}


// check git