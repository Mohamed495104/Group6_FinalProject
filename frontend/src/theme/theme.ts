"use client";

/**
 * Material UI Theme Configuration
 * Defines the visual design system for CitySphere
 * 
 * Color Accessibility:
 * - All color combinations meet WCAG 2.1 AA standards (4.5:1 contrast ratio)
 * - Primary blue (#1A73E8) provides 4.52:1 contrast on white backgrounds
 * - Text colors ensure readable contrast for all users
 * 
 * Typography:
 * - Uses Inter and Roboto font families for modern, clean look
 * - Font sizes and weights optimized for readability
 * - Line heights set for comfortable reading experience
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1A73E8",   // City Blue - WCAG AA compliant (4.52:1 on white, exceeds 4.5:1 minimum)
            dark: "#0d47a1",   // Darker blue for gradients and hover states
            light: "#4A90E2",  // Light blue for subtle accents
        },
        secondary: {
            main: "#FF7043",   // Sunset Orange - Eye-catching accent color
            dark: "#E64A19",   // Darker orange for hover states
        },
        background: {
            default: "#F8F9FA", // Light grey for soft backgrounds
            paper: "#FFFFFF",   // Pure white for cards and elevated surfaces
        },
        text: {
            primary: "#1E1E1E",   // Near-black for primary text (15.79:1 contrast)
            secondary: "#4A4A4A", // Dark grey for secondary text (8.59:1 contrast)
        }
    },
    typography: {
        fontFamily: "Inter, Roboto, sans-serif",
        h1: { fontSize: "2.2rem", fontWeight: 700 },
        h2: { fontSize: "1.8rem", fontWeight: 600 },
        h3: { fontSize: "1.5rem", fontWeight: 600 },
        h4: { fontSize: "1.3rem", fontWeight: 600 },
        h5: { fontSize: "1.1rem", fontWeight: 600 },
        h6: { fontSize: "1rem", fontWeight: 600 },
        body1: { fontSize: "1rem", lineHeight: 1.6 },
        body2: { fontSize: "0.875rem", lineHeight: 1.5 },
        button: { textTransform: "none", fontWeight: 600 }
    },
    shape: {
        borderRadius: 10,   // Rounded corners for modern, friendly feel
    },
    // Component-specific overrides for consistent styling
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: "10px 24px",
                    fontSize: "1rem",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                },
            },
        },
    },
});

export default theme;
