"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1A73E8",   // City Blue
        },
        secondary: {
            main: "#FF7043",   // Sunset Orange
        },
        background: {
            default: "#F8F9FA",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#1E1E1E",
            secondary: "#4A4A4A",
        }
    },
    typography: {
        fontFamily: "Inter, Roboto, sans-serif",
        h1: { fontSize: "2.2rem", fontWeight: 700 },
        h2: { fontSize: "1.8rem", fontWeight: 600 },
        h3: { fontSize: "1.5rem", fontWeight: 600 },
        body1: { fontSize: "1rem", lineHeight: 1.6 },
        button: { textTransform: "none", fontWeight: 600 }
    },
    shape: {
        borderRadius: 10,   // clean card feeling
    }
});

export default theme;
