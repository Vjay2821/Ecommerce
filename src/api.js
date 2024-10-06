import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
};

export const fetchProducts = async (category, search = '', pageNum = 0) => {
  const limit = 10;
  const skip = pageNum * limit;
  let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  // Check if category is a non-empty string
  if (category && typeof category === 'string') {
    url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  if (search) {
    url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};