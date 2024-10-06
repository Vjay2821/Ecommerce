import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const Pagination = ({ totalProducts, pageSize = 10, currentPage, onPaginationChange }) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const newPageCount = Math.ceil(totalProducts / pageSize);
    setPageCount(newPageCount);
  }, [totalProducts, pageSize]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageCount) {
      onPaginationChange(newPage);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'contained' : 'outlined'}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
      <Typography variant="body2" color="text.secondary">
        Page {currentPage} of {pageCount}
      </Typography>
      <Button variant="outlined" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </Button>
      {renderPaginationButtons()}
      <Button variant="outlined" disabled={currentPage === pageCount} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;