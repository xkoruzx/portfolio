"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Server, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2937_1px,transparent_1px),linear-gradient(to_bottom,#1F2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight border border-primary/20 text-primary text-sm font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        System Online
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
                        SU<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-white">RADIT</span> <br />
                        JUNIOR DEV.
                    </h1>

                    <p className="text-text-muted text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        Full Stack Developer & IT Specialist. Crafting robust solutions, optimizing systems, and fixing things before they break.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-lg bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background transition-all font-mono font-bold flex items-center gap-2 group"
                        >
                            See My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                            onClick={onContactClick}
                            className="px-8 py-3 rounded-lg hover:bg-surface-highlight text-text-muted transition-all font-mono"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Visual / Avatar Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                        {/* Animated Rings */}
                        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-30" />

                        {/* Avatar Image Placeholder */}
                        <div className="absolute inset-6 rounded-full bg-surface-highlight flex items-center justify-center overflow-hidden border-2 border-surface-highlight group">
                            <motion.img
                                src="https://i.ibb.co/4g3Spyyh/Gemini-Generated-Image-21c9ip21c9ip21c9.png"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Floating Skill Icons (Decoration) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 p-3 bg-surface rounded-xl border border-surface-highlight shadow-xl"
                            >
                                <Code className="text-primary" size={24} />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-10 p-3 bg-surface rounded-xl border border-surface-highlight shadow-xl"
                            >
                                <Server className="text-secondary" size={24} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
