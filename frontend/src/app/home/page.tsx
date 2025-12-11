"use client";

import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, useTheme } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function HomePage() {
  const { user } = useAuth();
  const theme = useTheme();

  const featureCards = [
    {
      title: "Explore City",
      description: "Discover places by categories",
      icon: ExploreIcon,
      href: "/explore",
      color: theme.palette.primary.main,
    },
    {
      title: "View Top Spots",
      description: "Browse must-visit attractions",
      icon: LocationOnIcon,
      href: "/top-spots",
      color: theme.palette.secondary.main,
    },
    {
      title: "Open Gallery",
      description: "View city through photos",
      icon: PhotoLibraryIcon,
      href: "/gallery",
      color: theme.palette.primary.main,
    },
    {
      title: "Contact Support",
      description: "Get help and assistance",
      icon: ContactSupportIcon,
      href: "/contact",
      color: theme.palette.secondary.main,
    },
  ];

  const cityFacts = [
    "🌆 Over 1,000+ places to explore",
    "⭐ Top rated destinations curated for you",
    "📸 Beautiful city photography gallery",
    "🗺️ Easy navigation to all attractions",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <Box sx={{ flex: 1, backgroundColor: "#f8f9fa" }}>
        {/* Welcome Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: "white",
            py: 6,
            px: 2,
            mb: 4,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              Welcome back, {user?.displayName || "Explorer"}!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.95,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Ready to continue your journey through the city?
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Quick Feature Navigation */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
              Quick Access
            </Typography>
            <Grid container spacing={3}>
              {featureCards.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                        },
                      }}
                    >
                      <CardActionArea
                        component={Link}
                        href={feature.href}
                        sx={{ height: "100%", p: 2 }}
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              display: "inline-flex",
                              p: 2,
                              borderRadius: "50%",
                              backgroundColor: feature.color,
                              color: "white",
                              mb: 2,
                            }}
                          >
                            <IconComponent sx={{ fontSize: 40 }} />
                          </Box>
                          <Typography variant="h6" fontWeight={600} gutterBottom>
                            {feature.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* Recommended Section */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
              Recommended for You
            </Typography>
            <Card sx={{ p: 3, backgroundColor: "#fff" }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Based on your interests and location, we recommend exploring:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "#f8f9fa" }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Food & Dining
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      150+ restaurants and cafes nearby
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "#f8f9fa" }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Parks & Nature
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      85+ outdoor spaces to relax
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "#f8f9fa" }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Arts & Culture
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      120+ museums and galleries
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>

          {/* City Insights */}
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
              <TipsAndUpdatesIcon sx={{ mr: 1, verticalAlign: "middle" }} />
              City Insights
            </Typography>
            <Grid container spacing={2}>
              {cityFacts.map((fact, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      p: 2,
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <Typography variant="body1" fontWeight={500}>
                      {fact}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default function HomePageWrapper() {
  return (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  );
}
