"use client";

import { Box, Container, Typography } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <Container sx={{ py: 8, flex: 1 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Home
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to your personalized home page. Coming soon...
        </Typography>
      </Container>

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
