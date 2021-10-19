import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { teamInfo } from './TeamInfo';

const TeamMemberDetails = () => {
    
    const {memberId} = useParams();
    
    const singleItem =  teamInfo.find(member=>member.id === parseInt(memberId));
    const {image , name, description ,id} = singleItem;

    return (
        <div>
            <Card className="bg-dark text-white">
                    <Card.Img style = {{height:"70vh"}} src={image} />
                    <Card.ImgOverlay>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
        </div>
    );
};

export default TeamMemberDetails;