import React, { useState, useEffect } from "react";
import "./styles.css";
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PostCard from "./components/PostCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';

export default function App() {
  const eStart = new Date('1997-03-06T06:06:06+08:00')
  const fStart = new Date('1997-10-13T03:06:06+08:00')
  const loveStart = new Date('2022-03-27T06:06:06+00:00')
  const [loveDura, setLoveDura] = useState(new Date(Date.now() - loveStart));
  const [eDura, setEDura] = useState(new Date(Date.now() - eStart));
  const [fDura, setFDura] = useState(new Date(Date.now() - fStart));

  function dayNumberFromLove(date) {
    return Math.floor(new Date(new Date(date) - loveStart) / (1000*60*60*24));
  }

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
        <Typography  variant="h1">
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

        {/* TODO: make PostCard compatible with links*/}
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://ethanyangcx.github.io/love/pic/2022-0710-1-1.jpeg"
              alt="photo of us taken at elevator"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                鷗崽電梯合照午灰
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dayNumberFromLove('2022-07-10T17:03+01:00')} ❤️ 鷗崽（qou-sreej）（英：O'Shea）（愛：Ó Séaghdha）電梯見證了我們數不清的合照。
                也是在這一天，我們在鷗崽負一樓鋼琴房即興合奏《神祕園之歌》並即興上傳視頻，見下方按鈕：
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://v.douyin.com/23VEsxg/">
              Video
            </Button>
          </CardActions>
        </Card>

        <PostCard 
          image="https://ethanyangcx.github.io/love/pic/2022-0605-1-1.jpg"
          alt="sweet hug in front of Westminster Abbey"
          title="第一次旅遊"
          main={dayNumberFromLove('2022-06-05T18:00+01:00') + 
                " ❤️ 倫敦之行，西敏寺前的溫馨。"} 
        />

        <PostCard 
          image="https://ethanyangcx.github.io/love/pic/2022-0131-1-1.jpeg"
          alt="happy new year"
          title="第一次相識"
          main={dayNumberFromLove('2022-01-31T19:00+00:00') + 
                " ❤️ 年夜飯上第一次相識，一起切土豆，一起包餃子，一起不上桌，一起回家。"}
        />

        <PostCard 
          image="https://ethanyangcx.github.io/love/pic/for-2021-1003-0100.jpeg"
          alt="F before edinburgh"
          title="抓馬即將赴曀"
          main={dayNumberFromLove('2021-10-03T01:00+08:00') + 
                " ❤️ 登上上海（djyangq-heojq）飛往曀田（qejh-den）（英：Edinburgh）（蘇蓋：Dùn Èideann）的飛機，準備迎接我們的愛情。"}
        />

        <PostCard 
          image="https://ethanyangcx.github.io/love/pic/for-2021-0915-1600.jpg"
          alt="E before edinburgh"
          title="抓貓即將赴曀"
          main={dayNumberFromLove('2021-09-15T16:00+08:00') + 
                " ❤️ 登上深圳（sjim-tjwinh）飛往曀田（qejh-den）（英：Edinburgh）（蘇蓋：Dùn Èideann）的飛機，準備迎接我們的愛情。"}
        />

      </Stack>
      </Container>
    </div>
  );
}
