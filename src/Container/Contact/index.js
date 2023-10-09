import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const  ContactContainer = ()=>{
    
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <h1>CONNECT WITH US</h1>
                    
                </Col>
            </Row>
            <br></br>
            <br></br>
        
            <Row>
                <Col className='conectIcon'>
                    <h2> GET IN TOUCH</h2>
                    <br></br>
                    <br></br>
                    
                    <h3>ADDRESS:</h3>
                    <p>LJ UNIVERSITY</p>
                    <p>near sharkheh Ahmedabad</p>
                </Col>
                <Col className='conectIcon'>
                    <h2> CONTACT US</h2>
                    <br></br>
                    <br></br>
                    
            
                    <h3>PH.NO:</h3>
                    <p>+91 85XXXXXX97</p>
                    <p>+91 91XXXXXX85</p>
                </Col>
                <Col className='conectIcon'>
                    <h2> EMAIL</h2>
                    <br></br>
                    <br></br>
                    
            
                    <p>someemail@gmail.com</p>
                    <p>someemail@gmail.com</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;