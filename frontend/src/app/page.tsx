"use client";

import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
  const theme = useTheme();

  return (
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        {/* =========================
          HERO SECTION
      ========================== */}
        <Box
            sx={{
              width: "100%",
              minHeight: "75vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
              backgroundImage: "url('/images/hero-city.jpg')", // replace with your own image later
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
        >
          {/* Overlay */}
          <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(2px)",
              }}
          />

          {/* HERO TEXT */}
          <Box
              sx={{
                position: "relative",
                zIndex: 2,
                maxWidth: "700px",
              }}
          >
            <Typography variant="h2" color="#fff" fontWeight={700} gutterBottom>
              CitySphere
            </Typography>

            <Typography
                variant="h5"
                sx={{ color: "#f1f1f1", mb: 3, px: 1, lineHeight: 1.5 }}
            >
              Step into the city — explore more than just maps.
              Discover attractions, hidden gems, and guided experiences in one place.
            </Typography>

            {/* CTA BUTTONS */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Link href="/login">
                <Button variant="contained" color="primary" sx={{ px: 4, py: 1.2, fontSize: "1rem" }}>
                  Get Started
                </Button>
              </Link>

              <Link href="/signup">
                <Button variant="outlined" color="secondary" sx={{ px: 4, py: 1.2, fontSize: "1rem" }}>
                  Create Account
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* =========================
          FEATURES SECTION
      ========================== */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" textAlign="center" fontWeight={700} mb={5}>
            Why Choose CitySphere?
          </Typography>

          <Grid container spacing={4}>
            {/* Feature 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 2 }}>
                <Typography variant="h5" fontWeight={600} mb={1}>
                  Explore with Ease
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Find curated categories like food, parks, culture, nightlife, and more —
                  all tailored for easy city discovery.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 2 }}>
                <Typography variant="h5" fontWeight={600} mb={1}>
                  Discover Top Spots
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Browse must-visit attractions with clean visuals, descriptions,
                  and guided navigation.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 2 }}>
                <Typography variant="h5" fontWeight={600} mb={1}>
                  Visual City Gallery
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Immerse yourself in the city’s beauty through our modern, responsive photo gallery.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* =========================
          FOOTER SPACING (Footer renders from layout)
      ========================== */}
        <Box sx={{ height: "20px" }} />
      </Box>
  );
}
