import React, { useState, useEffect } from "react";
import "./styles.css";
import Container from '@mui/material/Container';
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
        <Typography  variant="h1" gutterBottom>
          Our Love
        </Typography>
        <Typography  variant="body1">
          E: {Math.floor(eDura / (1000*60*60*24))}
        </Typography>
        <Typography  variant="body1">
          F: {Math.floor(fDura / (1000*60*60*24))}
        </Typography>
        <Typography  variant="body1">
          Love: {Math.floor(loveDura/ (1000*60*60*24))} days 
          and {loveDura.getHours().toString().padStart(2, '0')}
            :{loveDura.getMinutes().toString().padStart(2, '0')}
            :{loveDura.getSeconds().toString().padStart(2, '0')}
        </Typography>
      </Container>
    </div>
  );
}
