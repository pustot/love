// 为统一风格，此组件来自 index repo，在 App.tsx 给本组件传递自定义信息
import { Divider, Theme, Typography } from "@mui/material";
import * as React from "react";

export default function Footer(props: { repoLink: string; theme: Theme }) {
    const { repoLink, theme } = props;
    return (
        <div>
            <Divider />
            <br />
            <footer>
                <Typography align="center">
                    Pusto T <br />
                    <a href={repoLink}>
                        <img
                            src={
                                "https://img.shields.io/badge/-@pustot-" +
                                (theme.palette.mode === "dark" ? "000000" : "ffffff") +
                                "?style=flat-square&logo=github&logoColor=" +
                                (theme.palette.mode === "dark" ? "white" : "black")
                            }
                        />
                    </a>
                </Typography>
            </footer>
            <br />
        </div>
    );
}