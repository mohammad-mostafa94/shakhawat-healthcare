import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const {id,name,image,describe} = service;
    const history = useHistory();

    const handleDetailsButton = () =>{
        history.push(`/service/${id}`)
    }
    return (
 
                <Col>
                        <Card>
                            <Card.Img className="" variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                               <small>{describe.slice(0, 100)}...</small> 
                            </Card.Text>
                            <Button onClick={handleDetailsButton} variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
    );
};

export default Service;