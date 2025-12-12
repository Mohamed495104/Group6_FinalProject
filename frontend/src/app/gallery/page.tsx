"use client";

/**
 * Gallery Page - City Photo Collection
 * Displays curated high-quality city images in a responsive masonry grid
 * Features category filtering and lightbox viewer for immersive viewing
 * Implements accessibility standards with keyboard navigation
 */

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip,
  Stack,
} from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

/**
 * Gallery Image Collection
 * Curated selection of 12 high-quality city photographs
 * Each image includes title, category, and masonry grid positioning
 */
const galleryImages = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    title: "CN Tower at Sunset",
    category: "Landmarks",
    rows: 2,
    cols: 2,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    title: "Modern Skyline",
    category: "Architecture",
    rows: 1,
    cols: 1,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    title: "City Lights at Night",
    category: "Night",
    rows: 1,
    cols: 1,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
    title: "Downtown Intersection",
    category: "Streets",
    rows: 1,
    cols: 2,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    title: "Urban Park",
    category: "Nature",
    rows: 2,
    cols: 1,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    title: "Architectural Marvel",
    category: "Architecture",
    rows: 1,
    cols: 1,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    title: "Evening Traffic Flow",
    category: "Night",
    rows: 1,
    cols: 1,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80",
    title: "City Center Plaza",
    category: "Streets",
    rows: 1,
    cols: 2,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    title: "Golden Hour Cityscape",
    category: "Night",
    rows: 1,
    cols: 1,
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80",
    title: "Peaceful Park Path",
    category: "Nature",
    rows: 1,
    cols: 1,
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80",
    title: "Waterfront Vista",
    category: "Landmarks",
    rows: 2,
    cols: 1,
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    title: "Glass Tower Reflection",
    category: "Architecture",
    rows: 1,
    cols: 1,
  },
];

function GalleryPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Landmarks", "Architecture", "Night", "Streets", "Nature"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const currentImage = filteredImages.find((img) => img.id === selectedImage);

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
            City Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Immerse yourself in the beauty of the city through stunning photography
          </Typography>
        </Container>
      </Box>

      <Box sx={{ flex: 1, backgroundColor: "#f8f9fa", py: 6 }}>
        <Container maxWidth="lg">
          {/* Category Filters */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  backgroundColor:
                    selectedCategory === category
                      ? theme.palette.primary.main
                      : "white",
                  color:
                    selectedCategory === category
                      ? "white"
                      : theme.palette.text.primary,
                  fontWeight: selectedCategory === category ? 700 : 500,
                  "&:hover": {
                    backgroundColor:
                      selectedCategory === category
                        ? theme.palette.primary.dark
                        : theme.palette.grey[200],
                  },
                }}
              />
            ))}
          </Stack>

          {/* Image Grid */}
          <ImageList
            variant="quilted"
            cols={isMobile ? 1 : isTablet ? 2 : 4}
            gap={16}
          >
            {filteredImages.map((item) => (
              <ImageListItem
                key={item.id}
                cols={isMobile ? 1 : item.cols || 1}
                rows={isMobile ? 1 : item.rows || 1}
                sx={{
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => handleImageClick(item.id)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: "white",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption">{item.category}</Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={selectedImage !== null}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            boxShadow: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", minHeight: "80vh" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <NavigateNextIcon fontSize="large" />
          </IconButton>

          {currentImage && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                p: 4,
              }}
            >
              <img
                src={currentImage.img}
                alt={currentImage.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                }}
              />
              <Box sx={{ mt: 3, textAlign: "center", color: "white" }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {currentImage.title}
                </Typography>
                <Chip
                  label={currentImage.category}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Dialog>

      <Footer />
    </Box>
  );
}

export default function GalleryPageWrapper() {
  return (
    <ProtectedRoute>
      <GalleryPage />
    </ProtectedRoute>
  );
}
