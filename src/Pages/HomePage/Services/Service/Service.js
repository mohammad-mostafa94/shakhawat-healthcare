import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {id,name,image,describe} = service;
    return (
        <>
            
                <Col>
                        <Card>
                            <Card.Img className="" variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                               <small>{describe.slice(0, 100)}...</small> 
                            </Card.Text>
                            <Button  variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
        </>
    );
};

export default Service;