import React from 'react';

import Title from '@/components/Title';
import { Box, Button } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <Box p={4}>
        <Button variant="contained">Hello gatsby-theme-material-ui</Button>
      </Box>
    </main>
  );
}
