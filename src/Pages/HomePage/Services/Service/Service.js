import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {id,name,image,describe} = service;
    return (
        <div>
            
                <Col>
                        <Card>
                            <Card.Img className="mw-100" variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {describe.slice(0, 100)}...
                            </Card.Text>
                            <Button className="p-1" variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default Service;