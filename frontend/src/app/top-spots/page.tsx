"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
  Rating,
  Button,
} from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsIcon from "@mui/icons-material/Directions";

// Static data for top spots
const topSpots = [
  {
    id: 1,
    name: "Central Park",
    category: "Parks & Nature",
    description: "A beautiful urban park perfect for walks, picnics, and outdoor activities.",
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=300&fit=crop",
    price: "Free",
    hours: "6:00 AM - 10:00 PM",
    distance: "2.5 km",
  },
  {
    id: 2,
    name: "City Museum",
    category: "Arts & Culture",
    description: "Explore fascinating exhibitions showcasing local history and contemporary art.",
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop",
    price: "$15",
    hours: "10:00 AM - 6:00 PM",
    distance: "3.2 km",
  },
  {
    id: 3,
    name: "The Great Market",
    category: "Food & Restaurants",
    description: "A vibrant food market featuring local cuisine and international flavors.",
    rating: 4.9,
    reviews: 1840,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    price: "$$",
    hours: "8:00 AM - 11:00 PM",
    distance: "1.8 km",
  },
  {
    id: 4,
    name: "Harbor View",
    category: "Landmarks",
    description: "Stunning waterfront views with walking trails and observation decks.",
    rating: 4.6,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
    price: "Free",
    hours: "Open 24 hours",
    distance: "4.5 km",
  },
  {
    id: 5,
    name: "Downtown Gallery",
    category: "Arts & Culture",
    description: "Contemporary art gallery featuring works from emerging and established artists.",
    rating: 4.5,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1577083553790-9d40b2afc7e0?w=400&h=300&fit=crop",
    price: "$10",
    hours: "11:00 AM - 7:00 PM",
    distance: "2.8 km",
  },
  {
    id: 6,
    name: "Skyline Lounge",
    category: "Nightlife",
    description: "Rooftop bar with panoramic city views and signature cocktails.",
    rating: 4.7,
    reviews: 1450,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    price: "$$$",
    hours: "5:00 PM - 2:00 AM",
    distance: "3.5 km",
  },
  {
    id: 7,
    name: "Botanical Gardens",
    category: "Parks & Nature",
    description: "Serene gardens with diverse plant collections and peaceful walking paths.",
    rating: 4.8,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
    price: "$8",
    hours: "9:00 AM - 6:00 PM",
    distance: "5.2 km",
  },
  {
    id: 8,
    name: "Historic Theater",
    category: "Entertainment",
    description: "Beautifully restored theater hosting plays, concerts, and special events.",
    rating: 4.6,
    reviews: 1120,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
    price: "$$",
    hours: "Box Office: 12:00 PM - 8:00 PM",
    distance: "2.1 km",
  },
  {
    id: 9,
    name: "Riverside Cafe",
    category: "Food & Restaurants",
    description: "Charming riverside cafe known for its brunch and artisanal coffee.",
    rating: 4.7,
    reviews: 1680,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    price: "$$",
    hours: "7:00 AM - 6:00 PM",
    distance: "3.8 km",
  },
];

function TopSpotsPage() {
  const theme = useTheme();

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
            Top Spots in the City
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Discover must-visit attractions with detailed information and navigation
          </Typography>
        </Container>
      </Box>

      <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", py: 6 }}>
        <Container maxWidth="lg">
          {/* Spots Grid */}
          <Grid container spacing={4}>
            {topSpots.map((spot) => (
              <Grid item xs={12} sm={6} md={4} key={spot.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={spot.image}
                    alt={spot.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={spot.category}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          fontWeight: 600,
                          mb: 1,
                        }}
                      />
                    </Box>

                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {spot.name}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Rating value={spot.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {spot.rating} ({spot.reviews} reviews)
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {spot.description}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                      <AttachMoneyIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {spot.price}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {spot.hours}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 2 }}>
                      <LocationOnIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {spot.distance} away
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<DirectionsIcon />}
                      sx={{ mt: "auto" }}
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default function TopSpotsPageWrapper() {
  return (
    <ProtectedRoute>
      <TopSpotsPage />
    </ProtectedRoute>
  );
}
