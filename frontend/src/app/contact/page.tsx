"use client";

/**
 * Contact & Support Page
 * Public page for user communication and support
 * Features:
 * - Contact form with validation
 * - Contact information display
 * - Office hours
 * - Frequently Asked Questions (FAQ)
 */

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Alert,
  useTheme,
} from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  const theme = useTheme();
  
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Have questions? We'd love to hear from you.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Send us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you for contacting us! We'll get back to you soon.
                  </Alert>
                )}

                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ px: 4 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ p: 4, mb: 3, backgroundColor: theme.palette.primary.main, color: "white" }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, opacity: 0.95 }}>
                  Reach out to us through any of these channels.
                </Typography>

                <Box sx={{ display: "flex", alignItems: "start", mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                      support@citysphere.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "start", mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "start" }}>
                  <LocationOnIcon sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Address
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                      123 City Street<br />
                      Downtown, ST 12345
                    </Typography>
                  </Box>
                </Box>
              </Card>

              <Card sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Office Hours
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday:
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    9:00 AM - 6:00 PM
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Saturday:
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    10:00 AM - 4:00 PM
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">
                    Sunday:
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Closed
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* FAQ Section */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
              Find answers to common questions about CitySphere
            </Typography>

            <Grid container spacing={3}>
              {/* FAQ Item 1 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom color="primary.main">
                    How do I create an account?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    Click on "Sign Up" in the top navigation bar. Fill in your name, email, and password, 
                    then click "Create Account". You'll be redirected to your personalized dashboard where 
                    you can start exploring all the features.
                  </Typography>
                </Card>
              </Grid>

              {/* FAQ Item 2 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom color="primary.main">
                    Is CitySphere free to use?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    Yes! CitySphere is completely free to use. You can explore categories, view top spots, 
                    browse the gallery, and save your favorite places without any subscription or payment 
                    required.
                  </Typography>
                </Card>
              </Grid>

              {/* FAQ Item 3 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom color="primary.main">
                    Can I save my favorite places?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    This feature is coming soon! We're working on allowing users to save and organize 
                    their favorite spots into custom collections. Stay tuned for updates by subscribing 
                    to our newsletter.
                  </Typography>
                </Card>
              </Grid>

              {/* FAQ Item 4 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom color="primary.main">
                    How can I report an issue or suggest a feature?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    We'd love to hear from you! Use the contact form above to send us your feedback, 
                    report issues, or suggest new features. You can also email us directly at 
                    support@citysphere.com.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
