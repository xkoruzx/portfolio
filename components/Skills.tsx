"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skills = [
    { name: "Frontend Development", level: 50, color: "bg-primary" },
    { name: "Backend Engineering", level: 75, color: "bg-secondary" },
    { name: "IT & System Admin", level: 60, color: "bg-green-500" },
    { name: "UI/UX Design", level: 40, color: "bg-purple-500" },
];

const logs = [
    "> Initializing React core...",
    "> Loading Next.js modules...",
    "> Connecting to database...",
    "> System optimization: 98%",
    "> Ready."
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-surface/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
                >
                    <span className="text-secondary">&lt;</span> System Stats <span className="text-secondary">/&gt;</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Skill Bars */}
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex justify-between mb-2 font-mono text-sm uppercase tracking-wide">
                                    <span className="text-text-main">{skill.name}</span>
                                    <span className="text-primary">{skill.level}%</span>
                                </div>
                                <div className="h-4 bg-surface-highlight rounded-full overflow-hidden border border-surface-highlight">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${skill.color} relative accent-glow`}
                                    >
                                        {/* Scanline effect inside bar */}
                                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-background border border-surface-highlight rounded-lg overflow-hidden shadow-2xl p-4 font-mono text-sm relative group"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-surface-highlight">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-text-muted text-xs flex items-center gap-1">
                                <Terminal size={12} /> user@dev-portfolio: ~
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="space-y-2 text-green-400">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.5 }}
                                >
                                    {log}
                                </motion.div>
                            ))}
                            <motion.div
                                animate={{ opacity: [0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
                            />
                        </div>

                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
