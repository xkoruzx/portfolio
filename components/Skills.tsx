"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Database, Layout, Wrench } from "lucide-react";
import { PiFileCSharpFill } from "react-icons/pi";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaLinux, FaGitAlt, FaYarn, FaGithub, FaUnity, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiNginx, SiLua, SiVite, SiSolidity, SiEthers, SiPostman, SiFigma, SiBun, SiCoinbase, SiSupabase, SiFirebase, SiJavascript, SiFlutter, SiNfc, SiNvidia, SiInternetcomputer, SiCplusplus } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiMobile } from "react-icons/bi";

// Organize data structure for efficient filtering
const categories = [
    { id: "languages", title: "Frontend", icon: Layout },
    { id: "framework", title: "Backend", icon: Database },
    { id: "infra", title: "Infrastructure", icon: Cpu },
    { id: "others", title: "Others", icon: Wrench },
    { id: "mobile", title: "Mobile/Apps", icon: BiMobile },
];

const skillsData = {
    languages: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Javascript", icon: SiJavascript, color: "text-yellow-300" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
        { name: "C#", icon: PiFileCSharpFill, color: "text-purple-500" },
        { name: "Lua", icon: SiLua, color: "text-blue-800" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },

    ],
    framework: [
        { name: "Python", icon: FaPython, color: "text-yellow-300" },
        { name: "FastAPI", icon: FaPython, color: "text-cyan-300" },

    ],
    infra: [
        { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
        { name: "Networking", icon: Terminal, color: "text-orange-500" },
        { name: "NFC Maintenance", icon: SiNfc, color: "text-cyan-500" },
        { name: "BIOS SETUP", icon: SiInternetcomputer, color: "text-cyan-500" },
    ],
    others: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "Flutterflow", icon: SiFlutter, color: "text-purple-500" },
        { name: "TensorRT", icon: SiNvidia, color: "text-green-500" },
        { name: "Yarn", icon: FaYarn, color: "text-cyan-600" },
        { name: "Bun", icon: SiBun, color: "text-white" },
        { name: "Unity", icon: FaUnity, color: "text-white" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    ],
    mobile: [
        { name: "Flutter", icon: SiFlutter, color: "text-purple-500" },
    ],
};

export function Skills() {
    const [activeTab, setActiveTab] = useState("languages");
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="py-24 bg-surface/50 relative overflow-hidden min-h-[600px]">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-secondary">&lt;</span> Tech Skills <span className="text-secondary">/&gt;</span>
                    </h2>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-surface/30 backdrop-blur-md rounded-full border border-white/5">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold font-mono uppercase tracking-wide transition-colors ${activeTab === cat.id ? "text-white" : "text-text-muted hover:text-white"
                                }`}
                        >
                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full shadow-[0_0_10px_theme(colors.primary.DEFAULT)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <cat.icon size={16} />
                                {cat.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="w-full max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3"
                        >
                            {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className={`group relative aspect-square flex flex-col items-center justify-center bg-surface border rounded-xl transition-all duration-300 p-2 cursor-pointer 
                                        ${hoveredSkill === skill.name ? "border-primary/50 bg-surface-highlight" : "border-white/5"}
                                    `}
                                >
                                    <div className={`absolute inset-0 bg-primary/5 rounded-xl transition-opacity duration-300 ${hoveredSkill === skill.name ? "opacity-100" : "opacity-0"}`} />

                                    <div className={`text-2xl mb-2 transition-all duration-300 transform ${hoveredSkill === skill.name ? `scale-110 ${skill.color}` : "text-white/60 scale-100"}`}>
                                        <skill.icon />
                                    </div>

                                    <span className={`text-xs font-mono transition-colors relative z-10 text-center leading-tight ${hoveredSkill === skill.name ? "text-white" : "text-text-muted"}`}>
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
