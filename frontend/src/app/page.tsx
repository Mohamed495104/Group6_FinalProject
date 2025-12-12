"use client";

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useAuth } from "@/context/AuthContext";

export default function LandingPage() {
  const theme = useTheme();
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect authenticated users to home page
  useEffect(() => {
    if (!loading && user) {
      router.push("/home");
    }
  }, [user, loading, router]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.main} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(80px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* HERO TEXT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
          }}
        >
          <Typography
            variant="h2"
            color="#fff"
            fontWeight={700}
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            CitySphere
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#f1f1f1",
              mb: 4,
              px: { xs: 2, md: 4 },
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
            }}
          >
            Step into the city — explore more than just maps.
            Discover attractions, hidden gems, and guided experiences in one place.
          </Typography>

          {/* CTA BUTTONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              component={Link}
              href="/login"
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              href="/signup"
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                color: "white",
                borderColor: "white",
                borderWidth: 2,
                "&:hover": {
                  borderColor: "white",
                  borderWidth: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>

      {/* FEATURES SECTION */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={2}
          color="text.primary"
        >
          Why Choose CitySphere?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={6}
          sx={{ maxWidth: "700px", mx: "auto" }}
        >
          Experience the city like never before with our comprehensive platform
          designed for explorers, travelers, and locals alike.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Feature 1 */}
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              px: 3,
              py: 5,
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "2px solid #f8f8f8",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                p: 2,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "white",
                mb: 2,
              }}
            >
              <ExploreIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} mb={2} color="text.primary">
              Explore with Ease
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              Find curated categories like food, parks, culture, nightlife, and more —
              all tailored for easy city discovery.
            </Typography>
          </Box>

          {/* Feature 2 */}
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              px: 3,
              py: 5,
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "2px solid #f8f8f8",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                borderColor: theme.palette.secondary.main,
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                p: 2,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
                color: "white",
                mb: 2,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} mb={2} color="text.primary">
              Discover Top Spots
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              Browse must-visit attractions with clean visuals, descriptions,
              and guided navigation.
            </Typography>
          </Box>

          {/* Feature 3 */}
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              px: 3,
              py: 5,
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "2px solid #f8f8f8",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                p: 2,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "white",
                mb: 2,
              }}
            >
              <PhotoLibraryIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} mb={2} color="text.primary">
              Visual City Gallery
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              Immerse yourself in the city's beauty through our modern, responsive photo gallery.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* CTA SECTION */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Ready to Explore Your City?
          </Typography>
          <Typography variant="body1" mb={4} sx={{ opacity: 0.95, fontSize: "1.1rem" }}>
            Join thousands of explorers discovering amazing places every day.
          </Typography>
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              backgroundColor: "white",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
