import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from './redux/categoriesSlice';
import { setProducts, appendProducts, setLoading, setError, setPage } from './redux/productsSlice';
import { fetchCategories, fetchProducts } from './api';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Pagination from './components/Pagination'; // Import the Pagination component
import { Container, Snackbar, Alert, Button, Box } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const { items: products, loading, error, page } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [totalProducts, setTotalProducts] = useState(0); // Store total products count

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const data = await fetchCategories();
        dispatch(setCategories(['All Categories', ...data]));
      } catch (error) {
        dispatch(setError('Failed to fetch categories'));
      }
    };
    fetchCategoriesData();
  }, [dispatch]);

  const fetchProductsData = useCallback(
    async (category, search, pageNum, append = false) => {
      dispatch(setLoading(true));
      try {
        const data = await fetchProducts(category === 'All Categories' ? '' : category, search, pageNum);
        if (append) {
          dispatch(appendProducts(data.products));
        } else {
          dispatch(setProducts(data.products));
        }
        dispatch(setPage(pageNum));
        setTotalProducts(data.total); // Update total products count
      } catch (error) {
        dispatch(setError('Failed to fetch products'));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchProductsData(selectedCategory, searchTerm, 0);
  }, [selectedCategory, searchTerm, fetchProductsData]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    dispatch(setPage(0));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(setPage(0));
  };

  const handlePaginationChange = (newPage) => {
    fetchProductsData(selectedCategory, searchTerm, newPage - 1); // Adjust index for 0-based array
  };

  return (
    <div>
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <Container>
        <ProductGrid products={products} loading={loading} />
        {!loading && products.length > 0 && (
          <Pagination
            totalProducts={totalProducts}
            pageSize={10} // Set the desired page size
            currentPage={page}
            onPaginationChange={handlePaginationChange}
          />
        )}
        {error && (
          <Snackbar open={!!error} autoHideDuration={6000}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default App;