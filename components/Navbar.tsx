"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Scroll threshold for dark navbar style
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // On non-home pages, we want the "scrolled" style (black logo/text) by default
    const showDarkNavbar = isScrolled || !isHomePage;
    const logoSrc = showDarkNavbar ? "/Manzo Logo Black@4x.webp" : "/Manzo Logo White@4x.webp";
    const navContainerClass = showDarkNavbar ? "py-4" : "py-6";

    return (
        <motion.nav
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 font-sans transition-all duration-300 ${navContainerClass}`}
        >
            {/* Logo (Left Aligned) */}
            <div className="flex-shrink-0 z-50">
                <Link href="/" className="flex items-center gap-2 group">
                    <div
                        className="glitch-wrapper relative h-12 md:h-16 w-auto aspect-[3/1]"
                        style={{ '--logo-url': `url('${logoSrc}')` } as React.CSSProperties}
                    >
                        <Image
                            src={logoSrc}
                            alt="Manzo"
                            width={180}
                            height={60}
                            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Desktop Pill Menu (Right Aligned - Hidden on Mobile) */}
            <div className={`hidden md:flex items-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showDarkNavbar ? 'glass-card px-3 py-2 shadow-2xl translate-y-0' : 'px-2 py-1.5 translate-y-[-4px]'}`}>
                <ul className="flex items-center space-x-1">
                    {['Men', 'New Collection', 'Best Sellers'].map((item) => (
                        <li key={item}>
                            <Link
                                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`relative px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all block group overflow-hidden ${showDarkNavbar ? 'text-gray-800 hover:text-black' : 'text-white hover:text-white/80'}`}
                            >
                                <span className="relative z-10">{item}</span>
                                <span className="absolute inset-0 bg-black/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-full" />
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/contact"
                            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all block shadow-md hover:shadow-lg hover:scale-105 active:scale-95 ${showDarkNavbar ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button (Visible on Mobile) */}
            <button
                className={`md:hidden z-50 p-2 backdrop-blur-md rounded-full border transition-all ${showDarkNavbar ? 'text-black border-black/10 bg-white/50' : 'text-white bg-black/20 border-white/10'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#444459]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
                    {['Men', 'New Collection', 'Best Sellers'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-2xl font-serif text-white hover:text-[#eec170] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold text-black bg-white hover:bg-gray-200 transition-all shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>

                    {/* Mobile Install Option */}
                    <button
                        id="pwa-install-mobile-btn"
                        className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white transition-all bg-white/5"
                        onClick={() => {
                            setIsMenuOpen(false);
                            window.dispatchEvent(new CustomEvent('trigger-pwa-install'));
                        }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Install App</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
