"use client";

import { Box, Container, Typography, Button, Alert } from "@mui/material";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/context/AuthContext";
import LockIcon from "@mui/icons-material/Lock";

export default function ExplorePage() {
  const { user } = useAuth();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <Container sx={{ py: 8, flex: 1 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Explore Your City
        </Typography>
        
        {!user && (
          <Alert severity="info" sx={{ mb: 4 }}>
            <Typography variant="body1" gutterBottom>
              You're viewing as a guest. Some features are limited.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                component={Link}
                href="/login"
                variant="contained"
                size="small"
                sx={{ mr: 1 }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="outlined"
                size="small"
              >
                Sign Up
              </Button>
            </Box>
          </Alert>
        )}

        <Typography variant="body1" color="text.secondary" paragraph>
          {user 
            ? `Welcome back, ${user.displayName || 'Explorer'}! Discover amazing places in your city.`
            : "Sign in to unlock full access to city exploration features."}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mt: 4,
          }}
        >
          {["Food", "Parks", "Culture", "Nightlife", "Shopping"].map((category) => (
            <Box
              key={category}
              sx={{
                flex: 1,
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                textAlign: "center",
                position: "relative",
                opacity: user ? 1 : 0.6,
              }}
            >
              <Typography variant="h5" fontWeight={600} mb={1}>
                {category}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Explore {category.toLowerCase()} spots
              </Typography>
              {!user && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    color: "text.secondary",
                  }}
                >
                  <LockIcon fontSize="small" />
                  <Typography variant="caption">Sign in to explore</Typography>
                </Box>
              )}
              {user && (
                <Button variant="outlined" size="small">
                  Coming Soon
                </Button>
              )}
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
