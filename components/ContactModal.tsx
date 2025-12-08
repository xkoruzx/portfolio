"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const cardVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0, y: 50 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
            when: "beforeChildren",
            staggerChildren: 0.2 // Increased stagger slightly for dramatic effect
        }
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        y: 50,
        transition: { duration: 0.2, when: "afterChildren" }
    }
};

const avatarVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/xkoruzx", color: "hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/xkoruzx", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:hello@example.com", color: "hover:text-red-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" }
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop - z-0 relative to container */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Modal Card - z-10 to stay above backdrop */}
                    <motion.div
                        className="relative z-10 w-full max-w-sm bg-surface rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-sm"
                        >
                            <X size={18} />
                        </button>

                        {/* Top Section: Deep Gradient */}
                        <div className="h-40 bg-gradient-to-br from-blue-900 to-black relative overflow-hidden">
                            {/* Mesh/Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10" />
                        </div>

                        {/* Wave Divider (SVG) */}
                        <div className="absolute top-[9rem] left-0 w-full leading-none z-10">
                            <svg
                                viewBox="0 0 1440 320"
                                className="w-full h-16 text-surface fill-current"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                />
                            </svg>
                            {/* Blue Line Accent on Wave */}
                            <svg
                                viewBox="0 0 1440 320"
                                className="w-full h-16 absolute top-0 left-0 text-primary/50 fill-none stroke-current stroke-2"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                />
                            </svg>
                        </div>

                        {/* Bottom Section: Content */}
                        <div className="relative pt-0 px-8 pb-10 bg-surface text-center">

                            {/* Floating Avatar - z-20 for explicit layering */}
                            <motion.div
                                className="relative z-20 -mt-16 mb-4 inline-block"
                                variants={avatarVariants}
                            >
                                <div className="p-1 rounded-full bg-gradient-to-r from-primary via-white to-secondary animate-spin-slow p-[2px]">
                                    <div className="p-1 bg-surface rounded-full">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-surface shadow-2xl relative">
                                            {/* Glow Behind */}
                                            <div className="absolute inset-0 bg-primary/20 blur-md" />
                                            <img
                                                src="https://i.ibb.co/4g3Spyyh/Gemini-Generated-Image-21c9ip21c9ip21c9.png"
                                                alt="Profile"
                                                className="w-full h-full object-cover relative z-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Info */}
                            <motion.div variants={childVariants}>
                                <h2 className="text-2xl font-heading font-bold text-white mb-1">
                                    Suradit Rongmuang
                                </h2>
                                <p className="text-text-muted font-mono text-sm mb-6">
                                    Full Stack & IT Generalist
                                </p>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div
                                className="flex justify-center gap-6 mb-8"
                                variants={childVariants}
                            >
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-text-muted transition-all duration-300 transform hover:scale-110 ${link.color}`}
                                    >
                                        <link.icon size={24} />
                                    </a>
                                ))}
                            </motion.div>

                            {/* Footer Text */}
                            <motion.div variants={childVariants}>
                                <p className="text-xs text-text-muted/60 border-t border-white/5 pt-4">
                                    Available for freelance & full-time opportunities.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
