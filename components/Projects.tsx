"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data updated with `preview` images (using taller placeholders for the effect)
const projects = [
    {
        title: "E-Commerce Website.ts",
        status: "Live",
        description: "A high-performance Next.js & Supabase platform featuring secure RLS architecture, a custom 'Fly-to-Cart' physics engine, and automated PromptPay slip verification.",
        image: "https://i.ibb.co/Y4xjvngN/image-2.jpg",
        preview: "https://i.ibb.co/Y4xjvngN/image-2.jpg", // In real app, this would be a long screenshot
        tags: ["Next.js", "Supabase", "Tailwind", "PostgreSQL"],
        github: "https://github.com/xkoruzx/handmade-cynshop",
        live: "https://handmade-cynshop.vercel.app/",
        color: "from-blue-500 to-cyan-500",
        glow: "group-hover:shadow-[0_0_20px_-5px_theme(colors.cyan.500)]"
    },
    {
        title: "Booking Data Extractor",
        status: "Live",
        description: "Hybrid Next.js & FastAPI solution with Context-Aware Heuristic Engine to parse complex PDF itineraries.",
        image: "https://i.ibb.co/hJdccYpc/image.png",
        preview: "https://i.ibb.co/hJdccYpc/image.png",
        tags: ["Python", "FastAPI", "Next.js"],
        github: "https://github.com/xkoruzx/bookingapp",
        live: "https://bookingapp-lclk.vercel.app/",
        color: "from-emerald-500 to-green-500",
        glow: "group-hover:shadow-[0_0_20px_-5px_theme(colors.emerald.500)]"
    },
    {
        title: "Order System",
        status: "Live",
        description: "A feature-rich Cafe Ordering Platform with real-time kitchen display dashboards and persistent guest order history tracking.",
        image: "https://i.ibb.co/p6wqrQ9c/image-4.jpg",
        preview: "https://i.ibb.co/p6wqrQ9c/image-4.jpg",
        tags: ["React", "Firebase", "Tailwind", "Vite"],
        github: "#",
        live: "https://hiwmai-order.netlify.app/",
        color: "from-purple-500 to-pink-500",
        glow: "group-hover:shadow-[0_0_20px_-5px_theme(colors.purple.500)]"
    }
];

export function Projects() {
    // Track which project is being hovered
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Code2 className="text-secondary" size={32} />
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">Project Showcase</h2>
                    </div>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Interactive works. Hover to preview the experience.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project.title)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className={`group relative bg-surface border border-surface-highlight rounded-xl overflow-hidden transition-all duration-500 ${project.glow} hover:border-transparent`}
                        >
                            {/* Hover Glow Border Container (Pseudo-border effect) */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />

                            <div className="relative h-full flex flex-col bg-surface rounded-xl overflow-hidden">
                                {/* Image / Preview Container */}
                                <div className="relative h-64 w-full overflow-hidden bg-surface-highlight border-b border-surface-highlight group-hover:border-transparent transition-colors">
                                    {/* Default Static Image */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                        animate={{
                                            opacity: hoveredProject === project.title ? 0 : 1,
                                            scale: hoveredProject === project.title ? 1.05 : 1
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Smart Preview (Scrolling Image) */}
                                    <motion.div
                                        className="absolute inset-0 w-full"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredProject === project.title ? 1 : 0
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <motion.img
                                            src={project.preview}
                                            alt={`${project.title} preview`}
                                            className="w-full object-cover"
                                            initial={{ y: "0%" }}
                                            animate={{
                                                // Scroll to bottom if hovered. 
                                                // Assuming the image is roughly 2x-3x the height of container.
                                                // We use a safe estimate or calculate it dynamically. 
                                                // For now, -50% creates a scrolling effect for taller images.
                                                y: hoveredProject === project.title ? "-50%" : "0%"
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 8, // Slow scroll duration
                                                    ease: "linear",
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }
                                            }}
                                        />
                                    </motion.div>

                                    {/* Overlay Gradient (Always visible to ensure text readability if needed, but lighter on hover) */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />

                                    {/* Status Badge (Floating) */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className={`px-2 py-1 rounded text-xs font-mono font-bold border bg-surface/80 backdrop-blur-sm ${project.status === 'Live' ? 'border-green-500 text-green-500' :
                                            project.status === 'Live' ? 'border-yellow-500 text-yellow-500' :
                                                'border-blue-500 text-blue-500'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex flex-col flex-grow relative z-20 bg-surface">
                                    <h3 className="font-heading font-bold text-xl text-text-main mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-muted text-sm mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-surface-highlight rounded text-xs text-text-muted font-mono border border-transparent group-hover:border-white/10 transition-colors"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-surface-highlight group-hover:border-primary/20 transition-colors">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg bg-surface-highlight hover:bg-surface-highlight/80 text-sm font-medium transition-colors group/btn"
                                        >
                                            <Github size={16} className="text-text-muted group-hover/btn:text-white transition-colors" />
                                            <span className="text-text-muted group-hover/btn:text-white transition-colors">Code</span>
                                        </Link>
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="flex-1 py-2 flex items-center justify-center gap-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-sm font-medium transition-colors group/btn"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Demo</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
