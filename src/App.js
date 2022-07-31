import React, { useState, useEffect } from "react";
import "./styles.css";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function App() {
  const eStart = new Date('1997-03-06T06:06:06+08:00')
  const fStart = new Date('1997-10-13T03:06:06+08:00')
  const loveStart = new Date('2022-03-27T06:06:06+00:00')
  const [loveDura, setLoveDura] = useState(new Date(Date.now() - loveStart));
  const [eDura, setEDura] = useState(new Date(Date.now() - eStart));
  const [fDura, setFDura] = useState(new Date(Date.now() - fStart));

  useEffect(() => {
    const interval = setInterval(() => {
      setLoveDura(new Date(Date.now() - loveStart));
      setEDura(new Date(Date.now() - eStart));
      setFDura(new Date(Date.now() - fStart));
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography  variant="h1" gutterBottom>
          Our Love
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            avatar={<Avatar alt="avatar e" src="https://ethanyangcx.github.io/love/pic/avatarE.jpg" />}
            label={Math.floor(eDura / (1000*60*60*24))}
          />
          <Chip
            avatar={<Avatar alt="avatar f" src="https://ethanyangcx.github.io/love/pic/avatarF.jpg" />}
            label={Math.floor(fDura / (1000*60*60*24))}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
        <Chip
            avatar={<Avatar alt="avatar heart" src="https://ethanyangcx.github.io/love/icons8-love.gif" />}
            label={Math.floor(loveDura/ (1000*60*60*24)) + ' days and ' 
                  + loveDura.getHours().toString().padStart(2, '0') + ':' 
                  + loveDura.getMinutes().toString().padStart(2, '0') + ':'
                  + loveDura.getSeconds().toString().padStart(2, '0')}
        />
        </Stack>

          <Card sx={{}}> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://ethanyangcx.github.io/love/pic/2022-0605-1-1.jpg"
                alt="happy new year"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  第一次旅遊
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  倫敦之行，西敏寺前的溫馨。
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{}}> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://ethanyangcx.github.io/love/pic/2022-0131-1-1.jpeg"
                alt="happy new year"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  第一次相識
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  年夜飯上第一次相識，一起切土豆，一起包餃子，一起不上桌，一起回家。
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

      </Stack>
      </Container>
    </div>
  );
}
