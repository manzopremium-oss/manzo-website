"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const handleEnquire = () => {
    const phoneNumber = "919645675565";
    const message = encodeURIComponent(
      `Hi Manzo, I am interested in ${product.title}. Please share more details.`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Product Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#f0f0f0] shadow-2xl"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Product Info Section */}
            <div className="flex flex-col justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-4 block">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-black mb-6 leading-tight">
                  {product.title}
                </h1>

                <div className="w-20 h-1 bg-black mb-8" />

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                  {product.description ||
                    "Premium wholesale mens clothing from Manzo. Redefining modern fashion with Egyptian craftsmanship and timeless aesthetics."}
                </p>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={handleEnquire}
                      className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl text-center"
                    >
                      Enquire via WhatsApp
                    </button>

                    <Link
                      href="/contact"
                      className="w-full md:w-auto border border-black/10 text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center"
                    >
                      Request a Quote
                    </Link>
                  </div>

                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    Direct wholesale inquiry • Ships nationwide
                  </p>
                </div>
              </motion.div>

              {/* Mini Features */}
              <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-100">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                    Material
                  </h4>
                  <p className="text-sm text-gray-500">Premium Grade Fabric</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                    Availability
                  </h4>
                  <p className="text-sm text-gray-500">Wholesale Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="bg-white" />
    </main>
  );
}
