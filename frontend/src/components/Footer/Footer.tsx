"use client";

import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              CitySphere
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Step into the city — explore more than just maps.
              Discover attractions, hidden gems, and guided experiences.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                href="/explore"
                color="inherit"
                underline="hover"
              >
                Explore
              </MuiLink>
              <MuiLink
                component={Link}
                href="/top-spots"
                color="inherit"
                underline="hover"
              >
                Top Spots
              </MuiLink>
              <MuiLink
                component={Link}
                href="/gallery"
                color="inherit"
                underline="hover"
              >
                Gallery
              </MuiLink>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                href="/contact"
                color="inherit"
                underline="hover"
              >
                Contact Us
              </MuiLink>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Email: support@citysphere.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} CitySphere. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
