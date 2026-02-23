"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import BestSellers from '../components/BestSellers';
import ShopSize from '../components/ShopSize';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Safety timer to ensure the site always shows even if the loader takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="flex flex-col min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <Hero />

          <main className="flex-grow bg-white pb-16">
            <NewCollection />
            <BestSellers />
            <ShopSize />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
