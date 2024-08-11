import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../utils/CartContext';

const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 100 ? 20 : 0;
  const total = subtotal - discount;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="bg-white p-6 shadow-md rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Your First Name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Address"
                />
              </div>
              <button className="w-full py-2 bg-teal-500 text-white rounded-lg">
                Place Your Order
              </button>
            </form>
          </div>
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
