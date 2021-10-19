import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Feature from './Feature';
import { featuresInfo } from './FeaturesInfo';

const Features = () => {
    const featuresData = featuresInfo;
    return (
        <div className="text-center">
            <h1 className=" text-danger">Special Features</h1>
            <Container>
                <Row xs={1} md={3}>
                    {
                        featuresData.map(feature=>(<Feature
                        key={feature.id}
                        feature= {feature}
                        ></Feature>))
                    }
            </Row>
            </Container>
        </div>
    );
};

export default Features;