"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import Image from 'next/image';

const PWAInstall = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        // Check if app is already in standalone mode
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return;
        }

        // iOS detection
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIos(isIosDevice);

        // service worker registration
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(
                (registration) => console.log('SW registered'),
                (error) => console.log('SW registration failed', error)
            );
        }

        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show prompt after a 5 second delay
            setTimeout(() => setShowPrompt(true), 5000);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Listen for the mobile navbar button
        const mobileBtn = document.getElementById('pwa-install-mobile-btn');
        if (mobileBtn) {
            mobileBtn.onclick = (e) => {
                e.preventDefault();
                handleInstall();
            };
        }

        // For iOS, just show it after some time
        if (isIosDevice) {
            setTimeout(() => setShowPrompt(true), 5000);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (isIos) {
            // iOS doesn't support the prompt, we just show a msg (this could be enhanced)
            return;
        }

        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setShowPrompt(false);
        }
        setDeferredPrompt(null);
    };

    return (
        <AnimatePresence>
            {showPrompt && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-24 left-4 right-4 md:left-auto md:right-32 md:w-80 z-[110] p-4 glass-card rounded-2xl border border-white/30 shadow-2xl backdrop-blur-xl"
                >
                    <button
                        onClick={() => setShowPrompt(false)}
                        className="absolute top-2 right-2 text-white/50 hover:text-white"
                    >
                        <X size={16} />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden">
                            <Image
                                src="/lgo whi@4x.webp"
                                alt="Manzo Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white text-sm font-bold uppercase tracking-widest">Install Manzo</h3>
                            <p className="text-white/60 text-[10px] leading-tight mt-1">
                                {isIos ? "Tap 'Share' then 'Add to Home Screen' to install this app." : "Add Manzo to your home screen for a premium experience."}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        className={`w-full mt-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all 
              ${isIos ? 'bg-white/5 text-white/50 cursor-default' : 'bg-white text-black hover:bg-white/90 active:scale-95'}`}
                    >
                        {isIos ? "Installation Guide" : "Install Now"}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PWAInstall;
