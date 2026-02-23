"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const WhatsAppButton = () => {
    // WhatsApp link
    const whatsappUrl = "https://wa.me/919645675565";

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-6 right-6 z-[100]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                aria-label="Chat on WhatsApp"
            >
                {/* 
                    Hover Group: 
                    The 'group' determines the visibility of secondary elements.
                */}
                <div className="group relative flex items-center justify-end transition-all duration-500">

                    {/* Interactive Wrapper for the CHAT elements */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 mr-4 pointer-events-none">

                        {/* 1. "CHAT" Pill Badge */}
                        <div className="bg-white/90 px-4 py-2 rounded-full border border-white shadow-2xl backdrop-blur-md">
                            <span className="text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                Chat
                            </span>
                        </div>

                        {/* 2. Small Green Icon (Separator/Visual) */}
                        <div className="w-4 h-4 rounded-full border-2 border-green-500/50 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        </div>
                    </div>

                    {/* 3. Main WhatsApp Icon (Trigger Area) */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 hover:scale-110">
                        {/* Custom Glassy Background Image (The Squircle) */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/419858326_11740799-removebg-preview.png"
                                alt="WhatsApp Background"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Icon */}
                        <MessageCircle
                            className="w-7 h-7 md:w-8 md:h-8 text-white fill-white/10 relative z-10 transition-colors group-hover:text-green-400"
                            strokeWidth={1.5}
                        />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
