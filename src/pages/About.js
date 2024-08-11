import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
        <Header />
            <div className="bg-white text-gray-800">
            {/* Header */}
            <header className="bg-green-700 py-20 text-center">
                <h1 className="text-5xl font-bold text-white">About Us</h1>
            </header>

            {/* About Section */}
            <section className="container mx-auto py-16 px-8">
                <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-green-700">Our Mission</h2>
                <p className="text-gray-600">
                    At Eye Checkup, our mission is to provide comprehensive eye care services 
                    that cater to the unique needs of every individual. We believe in the importance 
                    of regular eye exams and the role they play in maintaining overall health and well-being.
                </p>

                <h2 className="text-3xl font-semibold text-green-700">Our Vision</h2>
                <p className="text-gray-600">
                    Our vision is to become the leading eye care provider, recognized for our 
                    commitment to excellence, innovation, and compassionate care. We aim to set 
                    the standard in the industry by offering state-of-the-art facilities and 
                    personalized treatment plans for all our patients.
                </p>

                <h2 className="text-3xl font-semibold text-green-700">Why Choose Us?</h2>
                <ul className="space-y-4 text-gray-600">
                    <li>
                    <strong>Experienced Team:</strong> Our team of highly skilled professionals 
                    is dedicated to providing the highest quality of care.
                    </li>
                    <li>
                    <strong>Comprehensive Services:</strong> We offer a wide range of services 
                    from routine eye exams to specialized treatments.
                    </li>
                    <li>
                    <strong>Patient-Centered Care:</strong> Our approach is focused on delivering 
                    personalized care tailored to each patient's needs.
                    </li>
                </ul>
                </div>
            </section>
            </div>
        <Footer />
    </>
  );
};

export default About;
