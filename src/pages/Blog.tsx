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
import MuiMarkdown from 'mui-markdown';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getLocaleText, I18nText } from "../utils/I18n";

import {
    useParams,
  } from 'react-router-dom';
  

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';

export default function Blog(props: { lang: keyof I18nText }) {

  const { lang } = props;
    const { blogName } = useParams();

    const [markdown, setMarkdown] = React.useState('Loading');

    // TODO: 暂时用这种方法，查不到对应语言就改 zh-Hans。以后改更好的 fallback
    const fetchMarkdown = async () => {
        let resp = await fetch("https://pustot.github.io/public/love" + '/blogs/' + blogName + '/' + lang + '.md');
        if (resp.ok == false) {
          resp = await fetch("https://pustot.github.io/public/love" + '/blogs/' + blogName + '/' + 'zh-Hans' + '.md');
        }
        const text = await resp.text();
        setMarkdown(text);
    }

    useEffect(() => {
        console.log(blogName)
        fetchMarkdown();
    }, [])
  
    return (
      <div>
        <Container maxWidth="sm">
  
        <Stack spacing={2}>
          
        <MuiMarkdown overrides={{
          h6: { props: { style: { scrollMarginTop: "50px" }, }, },
          h5: { props: { style: { scrollMarginTop: "50px" }, }, },
          h4: { props: { style: { scrollMarginTop: "50px" }, }, },
          h3: {
            props: {
              style: { fontSize: 38 },
            },
          },
          h2: {
            props: {
              style: { fontSize: 46 },
            },
          },
          h1: {
            props: {
              style: { fontSize: 56, scrollMarginTop: "50px" },
            },
          }
        }}>{markdown}</MuiMarkdown>

        <br/>
        <br/>
        </Stack>
        </Container>
      </div>
    );
  }