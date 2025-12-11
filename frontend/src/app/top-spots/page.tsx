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

/**
 * Top Spots Page - Featured City Attractions
 * Displays iconic landmarks and must-visit destinations
 * Each spot includes ratings, pricing, hours, and location information
 */

// Static data for top city attractions
// Features real iconic locations with high-quality images
const topSpots = [
  {
    id: 1,
    name: "CN Tower",
    category: "Landmarks",
    description: "Iconic 553-meter tower offering breathtaking 360-degree views of the city and Lake Ontario from observation decks.",
    rating: 4.9,
    reviews: 3250,
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
    price: "$42",
    hours: "9:00 AM - 10:30 PM",
    distance: "1.2 km",
  },
  {
    id: 2,
    name: "Ripley's Aquarium",
    category: "Entertainment",
    description: "World-class aquarium featuring over 20,000 marine animals including sharks, rays, and colorful tropical fish.",
    rating: 4.8,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=300&fit=crop",
    price: "$44",
    hours: "9:00 AM - 9:00 PM",
    distance: "1.5 km",
  },
  {
    id: 3,
    name: "Harbourfront Centre",
    category: "Arts & Culture",
    description: "Vibrant waterfront destination with galleries, performances, festivals, and stunning lake views year-round.",
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&h=300&fit=crop",
    price: "Free",
    hours: "10:00 AM - 9:00 PM",
    distance: "2.0 km",
  },
  {
    id: 4,
    name: "St. Lawrence Market",
    category: "Food & Shopping",
    description: "Historic market offering fresh produce, artisan foods, antiques, and international cuisine since 1803.",
    rating: 4.9,
    reviews: 1840,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    price: "$-$$",
    hours: "8:00 AM - 6:00 PM",
    distance: "1.8 km",
  },
  {
    id: 5,
    name: "Art Gallery of Ontario",
    category: "Arts & Culture",
    description: "One of North America's premier art museums featuring Canadian, Indigenous, European, and contemporary works.",
    rating: 4.8,
    reviews: 1620,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
    price: "$25",
    hours: "10:30 AM - 5:00 PM",
    distance: "2.8 km",
  },
  {
    id: 6,
    name: "Entertainment District",
    category: "Nightlife",
    description: "Bustling downtown area packed with theaters, restaurants, bars, clubs, and world-class entertainment venues.",
    rating: 4.6,
    reviews: 1450,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    price: "$$$",
    hours: "Varies by venue",
    distance: "1.5 km",
  },
  {
    id: 7,
    name: "High Park",
    category: "Parks & Nature",
    description: "Beautiful 161-hectare urban park with gardens, playgrounds, trails, and stunning cherry blossoms in spring.",
    rating: 4.8,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=300&fit=crop",
    price: "Free",
    hours: "Open 24 hours",
    distance: "5.2 km",
  },
  {
    id: 8,
    name: "Casa Loma",
    category: "Landmarks",
    description: "Majestic Gothic Revival castle and gardens offering a glimpse into Toronto's architectural and cultural heritage.",
    rating: 4.7,
    reviews: 1980,
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop",
    price: "$35",
    hours: "9:30 AM - 5:00 PM",
    distance: "4.5 km",
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
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={spot.id}>
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
