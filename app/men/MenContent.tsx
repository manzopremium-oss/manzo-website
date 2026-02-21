"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import MenSection from '../../components/MenSection';
import Footer from '../../components/Footer';

export default function MenContent() {
    return (
        <main className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <div className="flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <MenSection />
                </motion.div>
            </div>
            <Footer className="bg-black pt-4 md:pt-8" />
        </main>
    );
}
