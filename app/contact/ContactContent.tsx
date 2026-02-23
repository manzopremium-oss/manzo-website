"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactContent() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="pt-28 md:pt-40 pb-24 flex-grow container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-serif text-black mb-12">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="glass-card p-10 bg-gray-50/50">
                            <h3 className="text-2xl font-serif text-black mb-6">Wholesale Inquiries</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Interested in carrying Manzo in your store? Reach out to our wholesale team for catalogs and pricing.
                            </p>
                            <p className="font-bold text-black">wholesale@manzo.com</p>
                        </div>
                        <div className="glass-card p-10 bg-gray-50/50">
                            <h3 className="text-2xl font-serif text-black mb-6">General Support</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Questions about your order or our collections? We&apos;re here to help.
                            </p>
                            <p className="font-bold text-black">support@manzo.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
