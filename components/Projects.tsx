"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Website.ts",
        status: "Live",
        description: "A high-performance Next.js & Supabase platform featuring secure RLS architecture, a custom 'Fly-to-Cart' physics engine, and automated PromptPay slip verification for a seamless checkout experience.",
        image: "https://i.ibb.co/tT68qKTh/image.png", // Placeholder for now
        tags: ["Next.js", "Slip2Go", "Tailwind", "PLpgSQL (SUPABASE)"],
        github: "https://github.com/xkoruzx/handmade-cynshop",
        live: "https://handmade-cynshop.vercel.app/",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Booking Data Extractor",
        status: "Live",
        description: "A hybrid Next.js & FastAPI solution featuring a custom Context-Aware Heuristic Engine to accurately parse and structure complex, multi-page PDF travel itineraries.",
        image: "https://i.ibb.co/hJdccYpc/image.png",
        tags: ["Python", "Typescript", "Javascript"],
        github: "https://github.com/xkoruzx/bookingapp",
        live: "https://bookingapp-lclk.vercel.app/",
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "Full Animation Website",
        status: "LFI",
        description: "Soon.....",
        image: "https://i.ibb.co/wrpCW57j/image.png",
        tags: ["React", "Firebase", "Redux"],
        github: "#",
        live: "#",
        color: "from-purple-500 to-pink-500"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Code2 className="text-secondary" size={32} />
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">Project Showcase</h2>
                    </div>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Selected works demonstrating full-stack capabilities and problem-solving skills.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface border border-surface-highlight rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-48 overflow-hidden bg-surface-highlight">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                    <img
                                        src={project.image}
                                    // alt={project.title}
                                        
                                        className="object-cover object-center"
                                    />
                                <div className="flex items-center justify-center h-full text-text-muted">
                                    <span className="font-mono text-sm">[Project Preview]</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-heading font-bold text-xl text-text-main group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className={`px-2 py-1 rounded text-xs font-mono border ${project.status === 'Live' ? 'border-green-500 text-green-500' :
                                            project.status === 'Beta' ? 'border-yellow-500 text-yellow-500' :
                                                'border-blue-500 text-blue-500'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <p className="text-text-muted text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-surface-highlight rounded text-xs text-text-muted font-mono"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg bg-surface-highlight hover:bg-surface-highlight/80 text-sm font-medium transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </Link>
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-sm font-medium transition-colors"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
