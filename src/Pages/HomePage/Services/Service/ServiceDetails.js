import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { servicesData } from './ServiceData';

const ServiceDetails = () => {

    const {serviceId} = useParams();
    // const serviceItem = servicesData;
    // const [id,image,name] = serviceItem;
    // console.log("service id=",id,name,serviceId);

    const singleItem =  servicesData.find(sv=>sv.id == serviceId);
    console.log(singleItem);
    const {image , name, describe} = singleItem;
    return (
        <div className="mh-100">
                <Card className="bg-dark text-white">
                <Card.Img src={image} />
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