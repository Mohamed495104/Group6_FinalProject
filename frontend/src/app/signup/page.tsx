"use client";
/*- Created by Mohamed Ijas */
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/services/firebase";
import { userAPI } from "@/services/api";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExploreIcon from "@mui/icons-material/Explore";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase profile with name
      await updateProfile(user, { displayName: name });

      // Save user to MongoDB
      try {
        await userAPI.createOrUpdate({
          firebaseUid: user.uid,
          email: user.email!,
          name: name,
        });
      } catch (dbError) {
        console.error("Failed to save user to database:", dbError);
        // Continue even if DB save fails - user is created in Firebase
      }

      router.push("/home");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please sign in instead.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError(err.message || "Failed to create account. Please try again.");
      }
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
                Join CitySphere
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Start your journey of city exploration today
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
                      Unlimited Exploration
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get full access to all city features, categories, and personalized recommendations tailored to your interests.
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
                    <SecurityIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Secure & Private
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your data is protected with industry-standard encryption and Firebase security. We never share your information.
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
                    <GroupsIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Join Our Community
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Connect with thousands of explorers discovering amazing places and sharing their experiences every day.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right Side - Signup Form */}
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
                  <PersonAddIcon sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    Create Account
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Join CitySphere and start exploring
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
                    label="Full Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    margin="normal"
                    autoFocus
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    margin="normal"
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
                    sx={{ mb: 2 }}
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

                  <TextField
                    fullWidth
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    margin="normal"
                    sx={{ mb: 3 }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ py: 1.5, mb: 2 }}
                  >
                    {loading ? "Creating account..." : "Sign Up"}
                  </Button>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                      Already have an account?{" "}
                      <MuiLink
                        component={Link}
                        href="/login"
                        underline="hover"
                        sx={{ fontWeight: 600 }}
                      >
                        Sign in
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
