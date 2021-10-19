import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({member}) => {
    const {name, image, description,id} = member;

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 100)}...<Link to ={`/member/${id}`} >more</Link>
                    </Typography>
                </CardContent>
                </Card>
        </div>
    );
};

export default TeamMember;
