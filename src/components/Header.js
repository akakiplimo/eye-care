import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import { CartContext } from '../utils/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    localStorage.removeItem('cartItems');
    navigate('/auth')
  }
  const handleAppointment = (e) => {
    e.preventDefault();
    navigate('/appointment')
  }

  const {cartItems} = useContext(CartContext)
  const cartItemCount = cartItems.length;

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src="images/logo.png" alt="Logo" className="h-8 inline-block mr-2" />
          Eye Checkup
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="text-2xl md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative bg-gray-800 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto md:left-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center">
            <li className="md:ml-6">
              <Link to="/" className="block py-2 px-4 md:py-0">
                Home
              </Link>
            </li>
            <li className="md:ml-6">
              <Link to="/shop" className="block py-2 px-4 md:py-0">
                Shop
              </Link>
            </li>
            <li className="md:ml-6">
              <Link to="/about" className="block py-2 px-4 md:py-0">
                About
              </Link>
            </li>
            <li className="md:ml-6">
              <Link to="/contact" className="block py-2 px-4 md:py-0">
                Contact
              </Link>
            </li>
            <li className="md:ml-6">
              <Link to="/cart" className="block py-2 px-4 md:py-0">
                <FaShoppingCart className="inline-block mr-1" />
                Cart ({cartItemCount})
              </Link>
            </li>
            <li>
              <button onClick={handleAppointment} className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded">Appointment</button>
            </li>
            <li>
              <button onClick={handleLogout} className="ml-2 bg-transparent hover:bg-green-600 text-white py-1 px-4 rounded">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
