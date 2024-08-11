import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../utils/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext)
    const navigate = useNavigate();
    // Calculate the subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Example discount (could be based on a condition)
    const discount = subtotal > 100 ? 20 : 0;

    // Calculate the total after applying the discount
    const total = subtotal - discount;

    const handleCheckout = () => {
        navigate('/checkout');
    }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
          <div className="col-span-2">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Quantity</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {
                    cartItems.map(item => (
                      <React.Fragment key={item.id}>
                        <tr>
                            <td>{item.name}</td>
                            <td>
                              <button
                                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="mx-2">
                                {item.quantity}
                              </span>
                              <button
                                className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </td>
                            <td>${item.price}</td>
                            <td>${item.price * item.quantity}</td>
                            <button onClick={() => removeFromCart(item.id)} className="btn bg-red-600 text-white px-4 py-2 rounded">
                              <FaTrash className="text-white-500" />
                            </button>
                        </tr>
                        <br/>
                      </React.Fragment>
                    ))
                }
              </tbody>
            </table>
          </div>
                )
            }
          <div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Total Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Total</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="w-full mt-4 py-2 bg-teal-500 text-white rounded-lg">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
