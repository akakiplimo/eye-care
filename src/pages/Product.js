import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../utils/CartContext';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));
    const { addToCart } = useContext(CartContext);

    console.log('img', product.img)

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div>
                        <img src={require(`../../public/${product.img}`).default} alt={product.name} className="w-full rounded-lg" />
                    </div>
                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-semibold">{product.name}</h1>
                        <p className="text-lg text-gray-700 my-2">{product.description}</p>
                        <div className="text-xl font-bold text-green-600">${product.price}</div>
                        <button 
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Additional Product Details */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Product Details</h2>
                    <ul className="list-disc list-inside">
                        <li>Product ID: {product.id}</li>
                        <li>Category: {product.category}</li>
                        <li>Tags: {product.tags.join(', ')}</li>
                    </ul>
                </div>

                {/* Recommended Products */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Recommended Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        {/* Display recommended products here */}
                        {products
                            .filter(p => p.id !== product.id)
                            .map(p => (
                                <div key={p.id} className="border rounded-lg p-4">
                                    <img src={p.img} alt={p.name} className="w-full rounded-lg" />
                                    <h3 className="text-lg font-semibold">{p.name}</h3>
                                    <p className="text-gray-600">${p.price}</p>
                                    <button 
                                        className="mt-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                        onClick={() => addToCart(p)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProductPage;
