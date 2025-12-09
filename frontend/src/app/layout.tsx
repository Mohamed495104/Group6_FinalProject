import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import "@/services/firebase";

export const metadata: Metadata = {
    title: "CitySphere - Explore Your City",
    description:
        "Step into the city — explore more than just maps. Discover attractions, hidden gems, and guided experiences.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
