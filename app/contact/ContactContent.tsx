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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
                        <div className="glass-card p-10 bg-gray-50/50">
                            <h3 className="text-2xl font-serif text-black mb-6">Wholesale Inquiries</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Interested in carrying Manzo in your store? Reach out to our wholesale team for catalogs and pricing.
                            </p>
                            <p className="font-bold text-black hover:text-[#d4af37] transition-colors"><a href="mailto:manzopremium@gmail.com">manzopremium@gmail.com</a></p>
                        </div>
                        <div className="glass-card p-10 bg-gray-50/50">
                            <h3 className="text-2xl font-serif text-black mb-6">General Support</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Questions about your order or our collections? We&apos;re here to help.
                            </p>
                            <p className="font-bold text-black hover:text-[#d4af37] transition-colors"><a href="mailto:manzopremium@gmail.com">manzopremium@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="glass-card p-10 bg-[#1a1a1a] text-white">
                        <h3 className="text-2xl font-serif mb-6">Direct Contact</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                            For immediate assistance, reach out via WhatsApp or give us a call. Our team is available 24/7.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <a href="https://wa.me/919645675565" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.125 1.378 4.77 1.379 5.437 0 9.862-4.425 9.865-9.863.002-2.635-1.023-5.111-2.884-6.974-1.862-1.863-4.337-2.887-6.971-2.888-5.438 0-9.863 4.426-9.865 9.864-.001 1.738.455 3.431 1.32 4.909l-1.085 3.963 4.049-1.062z" /></svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">WhatsApp</p>
                                    <p className="font-bold text-lg">+91 9645675565</p>
                                </div>
                            </a>
                            <a href="tel:+919645675565" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">Call Us</p>
                                    <p className="font-bold text-lg">+91 9645675565</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
