import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function PostCard(props: {image: string, alt: string, title: string, main: string}) {
    const { image, alt, title, main } = props;
    return (
        <Card sx={{}}> 
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
                alt={alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {main}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    );
};