import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGrid from '../components/ProductsGrid';
import { products } from '../data/products';

const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Shop</h1>
        <ProductsGrid products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
