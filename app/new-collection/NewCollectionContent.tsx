"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import NewCollection from '../../components/NewCollection';
import Footer from '../../components/Footer';

export default function NewCollectionContent() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="pt-24 flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <NewCollection titleTag="h1" />
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
