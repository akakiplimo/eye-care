import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../utils/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">

      <Link to={`/product/${product.id}`}>  
        <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
