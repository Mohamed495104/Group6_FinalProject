"use client";

import { Box, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>
          Home
        </Typography>
        <Typography variant="body1">
          Coming soon...
        </Typography>
      </Box>
    </Container>
  );
}
