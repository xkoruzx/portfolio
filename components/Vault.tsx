"use client";

import { motion } from "framer-motion";
import { Lock, Award, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const items = [
    {
        title: "AWS Certified Solutions Architect",
        type: "Certificate",
        image: "/api/placeholder/400/300",
        icon: Award,
        color: "text-yellow-500"
    },
    {
        title: "Google UX Design Certificate",
        type: "Certificate",
        image: "/api/placeholder/400/300",
        icon: Award,
        color: "text-blue-500"
    },
    {
        title: "Digital Art Collection",
        type: "Creative",
        image: "/api/placeholder/400/300",
        icon: ImageIcon,
        color: "text-pink-500"
    },
    {
        title: "Network Security Audit",
        type: "Case Study",
        image: "/api/placeholder/400/300",
        icon: Lock,
        color: "text-green-500"
    }
];

export function Vault() {
    return (
        <section id="vault" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-surface-highlight rounded-full mb-4">
                        <Lock size={24} className="text-secondary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Vault</h2>
                    <p className="text-text-muted">Certifications, side quests, and creative assets.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square bg-surface border border-surface-highlight rounded-xl overflow-hidden hover:border-secondary/50 transition-colors"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-surface-highlight flex items-center justify-center">
                                <span className="text-text-muted text-xs font-mono opacity-50">[Asset Preview]</span>
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <item.icon size={16} className={item.color} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{item.type}</span>
                                </div>
                                <h3 className="font-heading font-bold text-lg leading-tight">{item.title}</h3>

                                <button className="mt-4 w-full py-2 rounded border border-secondary/30 text-secondary text-sm font-bold hover:bg-secondary hover:text-white transition-colors">
                                    ACCESS
                                </button>
                            </div>

                            {/* Closed State Icon */}
                            <div className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur rounded-lg border border-surface-highlight group-hover:opacity-0 transition-opacity">
                                <Lock size={16} className="text-text-muted" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
