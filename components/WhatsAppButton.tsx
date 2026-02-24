"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const WhatsAppButton = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // WhatsApp link
    const whatsappUrl = "https://wa.me/919645675565";

    if (!mounted) return null;

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
                <div className="relative flex items-center justify-end transition-all duration-500">
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
                            className="w-7 h-7 md:w-8 md:h-8 text-white fill-white/10 relative z-10 transition-colors hover:text-green-400"
                            strokeWidth={1.5}
                        />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
