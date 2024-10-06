import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        borderTop: '1px solid #ddd',
        padding: '20px 40px',
      }}
    >
      <Typography variant="body2" align="center">
        © 2024 E-Commerce Store. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;