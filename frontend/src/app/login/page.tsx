"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Link as MuiLink,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (err: any) {
      setError(err.message || "Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", py: 4 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {/* Left Side - Information */}
            <Box sx={{ flex: 1, pr: { md: 4 } }}>
              <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main">
                Welcome to CitySphere
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Step into the city — explore more than just maps
              </Typography>
              
              <Box sx={{ mt: 4, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "start", mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      color: "white",
                      mr: 2,
                    }}
                  >
                    <ExploreIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Discover Amazing Places
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Explore curated categories like food, parks, culture, nightlife, and shopping spots tailored for your city adventure.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "start", mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "50%",
                      backgroundColor: "secondary.main",
                      color: "white",
                      mr: 2,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Navigate Top Spots
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Browse must-visit attractions with detailed descriptions and guided navigation to enhance your experience.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "start" }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      color: "white",
                      mr: 2,
                    }}
                  >
                    <PhotoLibraryIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Visual Gallery
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Immerse yourself in beautiful city photography through our modern, responsive gallery.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right Side - Login Form */}
            <Box sx={{ flex: 1, maxWidth: { md: 500 }, width: "100%" }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "background.paper",
                }}
              >
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <LoginIcon sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    Welcome Back
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Sign in to continue exploring
                  </Typography>
                </Box>

                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    margin="normal"
                    autoFocus
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    margin="normal"
                    sx={{ mb: 3 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ py: 1.5, mb: 2 }}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                      Don't have an account?{" "}
                      <MuiLink
                        component={Link}
                        href="/signup"
                        underline="hover"
                        sx={{ fontWeight: 600 }}
                      >
                        Sign up
                      </MuiLink>
                    </Typography>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
