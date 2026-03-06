"use client";

import React from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // Use global products data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-7xl font-serif text-black mb-4 uppercase tracking-tighter">
            <span className="sr-only">Manzo Clothing - </span>
            Our Collection
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4" />
          <p className="text-gray-500 mt-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed uppercase tracking-widest font-bold opacity-40">
            Curated premium wholesale male clothing for the modern retailer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
