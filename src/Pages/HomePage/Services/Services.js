import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import { servicesData } from './Service/ServiceData';

const Services = () => {

  const services = servicesData;
    
    return (
        <div className="text-center my-5">
            <h1 className="text-danger my-3">Our Services</h1>
            <Container>
            <Row xs={1} md={3} className="g-4 ">
                {
                    services.map(service=>(<Service
                        key = {service.id}
                        service = {service}
                    ></Service>))
                }
                </Row>
            </Container>
           
        </div>
    );
};

export default Services;