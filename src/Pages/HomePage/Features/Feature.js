import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
const Feature = ({feature}) => {
    const {name,image} = feature;
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
                    
                </CardContent>
                </Card>
        </div>
    );
};

export default Feature;