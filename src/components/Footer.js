import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">We're Hiring</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sun Glasses</a></li>
              <li><a href="#" className="hover:underline">Eye Glasses</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Clearance Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Keep Yourself Up to Date</h3>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-2 border-gray-600 p-2 rounded-md focus:border-green-700"
              />
              <button className="bg-green-700 py-2 px-4 rounded-md text-white hover:bg-green-800">
                Subscribe
              </button>
            </div>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-white hover:text-green-700"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-green-700"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-green-700"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-green-700"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p>© Eye Checkup 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
