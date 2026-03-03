"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // Static mock data for products
  const products = [
    {
      id: 1,
      title: "Classic White Shirt",
      category: "MEN",
      image: "/link-block-1.jpg.jpeg",
    },
    {
      id: 2,
      title: "Slim Fit Pant",
      category: "MEN",
      image: "/link-block-2.jpg.jpeg",
    },
    {
      id: 3,
      title: "Premium Hoody",
      category: "MEN",
      image: "/link--block-3.jpg.jpeg",
    },
    {
      id: 4,
      title: "Boxy Fit Shirt",
      category: "MEN",
      image: "/link--block-5.jpg.jpeg",
    },
    {
      id: 5,
      title: "Modern Jacket",
      category: "MEN",
      image: "/link--block-4.jpg (1).jpeg",
    },
    {
      id: 6,
      title: "Oversized Tee",
      category: "MEN",
      image: "/bnr-1-ss.jpg.jpeg",
    },
    {
      id: 7,
      title: "Denim Jacket",
      category: "MEN",
      image: "/Take an Official Look at AMBUSH x Levi's Denim___.jpeg",
    },
    {
      id: 8,
      title: "Winter Coat",
      category: "MEN",
      image: "/men's fashion_old money style_mans style_ mans outfits.jpeg",
    },
  ];

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
