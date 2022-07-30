import React, { useState, useEffect } from "react";
import "./styles.css";
import Typography from '@mui/material/Typography';

export default function App() {
  let birthE = new Date('1997-03-06T06:06:06+08:00')
  let birthF = new Date('1997-10-13T06:06:06+08:00')
  let loveStart = new Date('2022-03-27T06:06:06+00:00')
  let now = new Date();
  let diff = new Date(now - loveStart);


  return (
    <div>
    <Typography  variant="body1">
      E: {Math.floor((now - birthE) / (1000*60*60*24))}
    </Typography>
    <Typography  variant="body1">
      F: {Math.floor((now - birthF) / (1000*60*60*24))}
    </Typography>
    <Typography  variant="body1">
      Love: {Math.floor(diff/ (1000*60*60*24))} days 
      and {diff.getHours().toString().padStart(2, '0')}
         :{diff.getMinutes().toString().padStart(2, '0')}
         :{diff.getSeconds().toString().padStart(2, '0')}
    </Typography>
    </div>
  );
}
