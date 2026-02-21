"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import BestSellers from '../../components/BestSellers';
import Footer from '../../components/Footer';

export default function BestSellersContent() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="pt-24 flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <BestSellers titleTag="h1" />
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
