"use client";

import { Box, Container, Typography } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function ContactPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <Container sx={{ py: 8, flex: 1 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Get in touch with us. Coming soon...
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
}

export default function ContactPageWrapper() {
  return (
    <ProtectedRoute>
      <ContactPage />
    </ProtectedRoute>
  );
}
