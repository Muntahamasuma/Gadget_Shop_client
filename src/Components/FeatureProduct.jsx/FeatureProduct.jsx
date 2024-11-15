import React from 'react';
import ProductCard from './ProductCard';

const FeatureProduct = () => {
  return (
    <div className='lg:flex justify-between items-center gap-6'>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default FeatureProduct;