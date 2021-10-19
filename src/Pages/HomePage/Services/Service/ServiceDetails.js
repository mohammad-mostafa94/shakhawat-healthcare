import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { servicesData } from './ServiceData';

const ServiceDetails = () => {

    const {serviceId} = useParams();
    
    const singleItem =  servicesData.find(sv=>sv.id === parseInt(serviceId));
    console.log(singleItem);
    const {image , name, describe ,id} = singleItem;
    
    console.log("service id=",name,serviceId,id);
     
    return (
        <div >
                <Card className="bg-dark text-white">
                    <Card.Img style = {{height:"70vh"}} src={image} />
                    <Card.ImgOverlay>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {describe}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
        </div>
    );
};

export default ServiceDetails;