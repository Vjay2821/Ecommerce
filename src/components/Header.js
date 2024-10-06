import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const Header = ({ categories, selectedCategory, onCategoryChange, searchTerm, onSearchChange }) => {
  const headerBackgroundColor = '#3f51b5'; // Replace with your actual header background color

  return (
    <AppBar position="static" sx={{ backgroundColor: headerBackgroundColor, height: '73px' }}>
      <Toolbar sx={{ padding: 5, color: 'white' }}>
        <Typography variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          E-Commerce Store
        </Typography>
        <FormControl variant="outlined" sx={{ m: 0, minWidth: 80, backgroundColor: headerBackgroundColor, padding: '2px 4px' }}>
          <InputLabel id="category-select-label" sx={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            onChange={onCategoryChange}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            {Array.isArray(categories) && categories.map((category) => (
              <MenuItem key={typeof category === 'string' ? category : category.name} value={typeof category === 'string' ? category : category.name}>
                {typeof category === 'string' ? category : category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={onSearchChange}
          sx={{ m: 0, backgroundColor: headerBackgroundColor, width: '100px', padding: '2px 4px' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;