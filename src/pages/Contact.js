import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
        <Header />
        <div className="bg-white text-gray-800">
        {/* Header */}
        <header className="bg-green-700 py-20 text-center">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
            <p className="text-xl mt-4 text-white">
            We're here to help. Get in touch with our experts.
            </p>
        </header>

        {/* Contact Section */}
        <section className="container mx-auto py-16 px-8">
            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-3xl font-semibold text-green-700">Get in Touch</h2>
                <p className="mt-4 text-gray-600">
                Feel free to contact us using the form below or reach us directly at:
                </p>
                <ul className="mt-6 space-y-4 text-gray-600">
                <li>Email: info@eyecheckup.com</li>
                <li>Phone: +254 (700) 123-456</li>
                <li>Address: 380 Albert St, Nairobi</li>
                </ul>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-green-700">Send Us a Message</h2>
                <form className="mt-6 space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-2 rounded-md focus:border-green-700"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                    type="email"
                    className="w-full border-2 border-gray-200 p-2 rounded-md focus:border-green-700"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea
                    rows="5"
                    className="w-full border-2 border-gray-200 p-2 rounded-md focus:border-green-700"
                    ></textarea>
                </div>
                <button className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800">
                    Submit
                </button>
                </form>
            </div>
            </div>
        </section>
        </div>
        <Footer />
    </>
  );
};

export default Contact;
