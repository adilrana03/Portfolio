import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light1.svg';
import helloDark from '../media/hello-dark1.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className='display-3 hello' align='center'>
                            HELLO!<code> I'm Adil Rana</code>
                        </h1>
                        <h2 className='lead' align='center'>
                            I
                            <span
                                class='txt-rotate'
                                data-period='1000'
                                data-rotate='[ " am a Full-Stack Developer at Masai.", " love designing Web Apps.", " am also working on Problem Solving."]'
                            ></span>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Container align='center'>
                        <Col lg={15} xs={15}>
                            <img
                                src={darkMode ? helloDark : helloLight}
                                alt='hello'
                                className='hello-img'
                            />
                        </Col>
                    </Container>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    );
};

export default Home;
