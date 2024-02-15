import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
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

import {
    useParams,
  } from 'react-router-dom';
  

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';

export default function Blog({ColorModeContext}) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
  
    const [lang, setLang] = React.useState('zh-Hans');

    const { blogName } = useParams();

    const [markdown, setMarkdown] = React.useState('Loading');
  
    const handleChange = (event) => {
      setLang(event.target.value);
    };

    const fetchMarkdown = async () => {
        const text = await (await fetch("https://twaqngu.github.io/public/love" + '/blogs/' + blogName + '/' + lang + '.md')).text();
        setMarkdown(text);
    }

    useEffect(() => {
        console.log(blogName)
        fetchMarkdown();
    }, [])
  
    return (
      <div>
        <Container maxWidth="sm">
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{p: 3}}>
            <Button component={Link} to="/love" color="inherit" startIcon={<HomeIcon/>}>
                
                </Button>
          
          <FormControl >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"zh-Hant"}>繁體中文</MenuItem>
              <MenuItem value={"zh-Hans"}>简体中文</MenuItem>
              <MenuItem value={"tto-bro"}>b8Q7Z2D8FA</MenuItem>
              <MenuItem value={"tto"}>mim</MenuItem>
            </Select>
          </FormControl>
  
          <Button variant="outlined" 
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                  startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
              Theme
          </Button>
        </Stack>
  
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