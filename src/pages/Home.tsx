import "purecss/build/pure.css";
import * as React from "react";
import { useState, useEffect } from "react";
import "../styles.scss";
import { 
  Avatar, Button, CardActionArea, CardActions,
  Chip, Container, Stack, Typography,
  Card, CardContent, CardMedia,
  InputLabel, MenuItem, FormControl, Select,
  CssBaseline
} from '@mui/material';
import PostCard from "../components/PostCard";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { I18nText, getLocaleText } from "../utils/I18n";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Home(props: { lang: keyof I18nText }) {
    const { lang } = props;

  const eStart = new Date('1997-03-06T06:06:06+08:00').getTime();
  const fStart = new Date('1997-10-13T03:06:06+08:00').getTime();
  const loveStart = new Date('2022-03-27T06:06:06+00:00').getTime();
  const [loveDura, setLoveDura] = useState(new Date(Date.now() - loveStart));
  const [eDura, setEDura] = useState(new Date(Date.now() - eStart));
  const [fDura, setFDura] = useState(new Date(Date.now() - fStart));
  const [blogList, setBlogList] = useState<string[]>([]);

  function dayNumberFromLove(date: string) {
    return Math.floor(new Date(new Date(date).getTime() - loveStart).getTime() / (1000*60*60*24));
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

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const text = await (await fetch("https://twaqngu.github.io/public/love" + '/blogs/' + 'blog-list.txt')).text();
      // console.log(process.env.PUBLIC_URL + '/blogs/' + 'blog-list.txt');
      setBlogList(text.split(/\r?\n/));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(blogList);
  }, [blogList]);

  const titles = new Map();
  titles.set("main", {
    "zh-Hant": "我們的愛",
    "zh-Hans": "我们的爱",
    "en": "Our Love",
    "ja": "私たちの愛",
    "de": "Unsere Liebe",
    "ko": "우리의 사랑",
    "ko-Han": "우리의 사랑",
    "eo": "Nia Amo",
    "fr": "Notre amour",
    "vi": "Tình yêu của chúng tôi",
    "vi-Han": "情𢞅𧶮眾碎",
    "es": "Nuestro amor",
    "tto-bro": "Z72VoH DaA Oie3",
    "tto": "ie S vVoH",
  });
  titles.set('0710', {
    "en": "A Photo of Us Taken in the Lift in O'Shea, Jul 10",
    "zh-Hant": "鷗崽電梯合照午灰",
    "zh-Hans": "鸥崽电梯合照午灰",
    "tto-bro": "OFWQae D8aH3mae X8ihTeaF3 Zo2Xoe",
    "tto": "Nomo X vVoH aH SeNm aHN oWaa aH Zo2Xoe",
  });
  titles.set("0605", {
    "en": "First Trip",
    "zh-Hant": "第一次旅遊",
    "zh-Hans": "第一次旅游",
    "tto-bro": "D8ae3Oemce3 Sei2EdF",
    "tto": "Sei2 e Jei",
  });
  titles.set("0131", {
    "en": "The First Time We Met",
    "zh-Hant": "第一次相識",
    "zh-Hans": "第一次相识",
    "tto-bro": "D8ae3Oemce3 CeRZ6eA",
    "tto": "X8FRQ3 e Jei",
  });
  titles.set("f0", {
    "en": "Drama Coming to Edinburgh",
    "zh-Hant": "抓馬即將赴曀",
    "zh-Hans": "抓马即将赴曀",
    "tto-bro": "GQRFVQR2 9eA9eRZ hvo3Oae3",
    "tto": "cs ae S DKRVR",
  });
  titles.set("e0", {
    "en": "Dramo Coming to Edinburgh",
    "zh-Hant": "抓貓即將赴曀",
    "zh-Hans": "抓猫即将赴曀",
    "tto-bro": "GQRFVQeaF 9eA9eRZ hvo3Oae3",
    "tto": "cs ae S DKRVo",
  });

  return (
    <div>
      <Container maxWidth="sm">

      <Stack spacing={2}>
        <Typography  variant="h2">
          {getLocaleText(titles.get("main"), lang)}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip
            avatar={<Avatar alt="avatar e" src="https://twaqngu.github.io/public/love/pic/avatarE.jpg" />}
            label={Math.floor(eDura.getTime() / (1000*60*60*24))}
          />
          <Chip
            avatar={<Avatar alt="avatar f" src="https://twaqngu.github.io/public/love/pic/avatarF.jpg" />}
            label={Math.floor(fDura.getTime() / (1000*60*60*24))}
          />
        </Stack>

        <Stack direction="row" spacing={1}>
          <Chip
              avatar={<Avatar alt="avatar heart" src="https://twaqngu.github.io/public/love/icons8-love.gif" />}
              label={Math.floor(loveDura.getTime()/ (1000*60*60*24)) + ' days and ' 
                    + loveDura.getHours().toString().padStart(2, '0') + ':' 
                    + loveDura.getMinutes().toString().padStart(2, '0') + ':'
                    + loveDura.getSeconds().toString().padStart(2, '0')}
          />
        </Stack>

        {blogList.map(blogName =>
          <Link to={"/" + blogName} key={blogName}>{blogName}</Link>
        )}

        {/* TODO: make PostCard compatible with links*/}
        <Typography variant="h4">
          (Below is the Old Version Website to be Archived)
        </Typography>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://twaqngu.github.io/public/love/pic/2022-0710-1-1.jpeg"
              alt="photo of us taken at elevator"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {getLocaleText(titles.get("0710"), lang)}
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
          image="https://twaqngu.github.io/public/love/pic/2022-0605-1-1.jpg"
          alt="sweet hug in front of Westminster Abbey"
          title={getLocaleText(titles.get("0605"), lang)}
          main={dayNumberFromLove('2022-06-05T18:00+01:00') + 
                " ❤️ 崘屯（lon-don）（英：London）之行，西敏（myinq）寺前的溫馨。"} 
        />

        <PostCard 
          image="https://twaqngu.github.io/public/love/pic/2022-0131-1-1.jpeg"
          alt="happy new year"
          title={getLocaleText(titles.get("0131"), lang)}
          main={dayNumberFromLove('2022-01-31T19:00+00:00') + 
                " ❤️ 年夜飯上第一次相識，一起切土豆，一起包餃子，一起不上桌，一起回家。"}
        />

        <PostCard 
          image="https://twaqngu.github.io/public/love/pic/for-2021-1003-0100.jpeg"
          alt="F before edinburgh"
          title={getLocaleText(titles.get("f0"), lang)}
          main={dayNumberFromLove('2021-10-03T01:00+08:00') + 
                " ❤️ 登上上海（djyangq-heojq）飛往曀田（qejh-den）（英：Edinburgh）（蘇蓋：Dùn Èideann）的飛機，準備迎接我們的愛情。"}
        />

        <PostCard 
          image="https://twaqngu.github.io/public/love/pic/for-2021-0915-1600.jpg"
          alt="E before edinburgh"
          title={getLocaleText(titles.get("e0"), lang)}
          main={dayNumberFromLove('2021-09-15T16:00+08:00') + 
                " ❤️ 登上深圳（sjim-tjwinh）飛往曀田（qejh-den）（英：Edinburgh）（蘇蓋：Dùn Èideann）的飛機，準備迎接我們的愛情。"}
        />

      </Stack>
      </Container>
    </div>
  );
}