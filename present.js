import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import a1 from './j1.jpg';
import a2 from './j2.jpg';
import a3 from './j3.JPG';


class present extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' style={{marginTop:"50px",borderRadius:"20px" , boxShadow:"0px, 0px,15px black" }}>
                    <div className="row">
                        <div>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={a2}
                                        alt="First slide"
                                    />
                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="w-100"
                                        src={a3}
                                        alt="Second slide"
                                    />

                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={a1}
                                        alt="Third slide"
                                    />
                                    
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default present;