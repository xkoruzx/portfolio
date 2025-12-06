"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Vault", href: "#vault" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-surface-highlight py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-secondary font-mono text-xl group-hover:text-secondary-glow transition-colors">
                        ~/user
                    </span>
                    <span className="w-2 h-4 bg-primary animate-pulse-slow" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-muted hover:text-primary transition-colors font-mono text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle Placeholder (Functionality to be added later if needed, defaulting to dark for now) */}
                    <button className="p-2 rounded-full hover:bg-surface-highlight transition-colors text-yellow-400">
                        <Sun size={18} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-main"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-highlight p-6 flex flex-col gap-4 shadow-xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-muted hover:text-primary font-mono text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-secondary mr-2">{">"}</span>
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
