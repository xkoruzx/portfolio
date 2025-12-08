"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Network, GraduationCap, ClipboardList, CodeXml, BriefcaseBusiness, FolderOpen } from "lucide-react";
import { useState } from "react";

const experience = [
    {
        role: "Operation List",
        company: "Celtours Company",
        period: "2025 - Current",
        desc: "Cooperate with itaka / cedok on other country for good services with customer from tourism",
        type: "work",
        icon: ClipboardList,
        color: "bg-green-900",
        gallery: [
            "https://i.ibb.co/0jy9hvWX/image.png"
        ]
    },
    {
        role: "Junior Developer / Assist Teacher",
        company: "True Coding School",
        period: "2024 - 2025",
        desc: "Making an cleaning app and teaching python,C#,lua language for kid 6-12 years",
        type: "work",
        icon: CodeXml,
        color: "bg-primary",
        gallery: [
            "https://i.ibb.co/Fqq5JYLG/485807872-634750176136573-6980053168738037307-n.jpg",
            "https://i.ibb.co/2zwnDSn/0001.jpg"
        ]
    },
    {
        role: "IT Support Intern",
        company: "Andamanda Phuket Water Park",
        period: "2022 - 2023",
        desc: "Get Ready for Solved problem customer that got problem on wristband (RFID) and POS.",
        type: "work",
        icon: Network,
        color: "bg-purple-500",
        gallery: [
            "https://i.ibb.co/BKKfz1bp/1765186233660.jpg",
            "https://i.ibb.co/XrXgcFN7/1765186303520.jpg",
            "https://i.ibb.co/R47YZL7n/1765186428581.jpg"
        ]
    },
    // {
    //     role: "Marketing Intern",
    //     company: "S.D Phuket Computer",
    //     period: "2020 - 2021",
    //     desc: "Assisted in marketing / social media task to for selling diy hardware",
    //     type: "intern",
    //     icon: BriefcaseBusiness,
    //     color: "bg-secondary",
    //     gallery: [
    //         "https://placehold.co/400x300/F97316/FFFFFF?text=Hardware",
    //         "https://placehold.co/400x300/EA580C/FFFFFF?text=Marketing"
    //     ]
    // }
];

export function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="experience" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center"
                >
                    // Experience Timeline
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-surface-highlight transform md:-translate-x-1/2">
                        <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-50" />
                    </div>

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }} // Re-trigger animation on entry
                                transition={{ delay: index * 0.1, duration: 0.5 }} // Slightly lower delay for smoother scrolling re-entry
                                onViewportLeave={() => {
                                    // Optional: Auto-collapse expanded gallery when item leaves viewport
                                    if (hoveredIndex === index) {
                                        setHoveredIndex(null);
                                    }
                                }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center shadow-lg shadow-${item.color}/50 z-10`}>
                                        <item.icon size={14} className="text-white" />
                                    </div>
                                    <div className={`absolute w-12 h-12 rounded-full ${item.color}/20 animate-pulse`} />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"
                                    }`}>
                                    <div
                                        className={`bg-surface border p-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${hoveredIndex === index
                                            ? `border-[${item.color.replace('bg-', '')}]/50 shadow-[0_0_15px_-5px_theme(colors.blue.500)]` // Simplified glow for dynamic colors or just hardcode blue as requested
                                            : "border-surface-highlight hover:border-primary/30"
                                            } ${hoveredIndex === index ? "border-blue-500/50" : ""}`} // Explicit requested glow
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <span className="text-secondary font-mono text-xs mb-2 block">{item.period}</span>
                                        <h3 className="text-xl font-bold font-heading text-text-main group-hover:text-primary transition-colors">{item.role}</h3>
                                        <h4 className="text-text-muted text-sm font-medium mb-4">{item.company}</h4>
                                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                                            {item.desc}
                                        </p>

                                        {/* Hover Gallery */}
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 border-t border-surface-highlight">
                                                        <div className="flex items-center gap-2 mb-3 text-xs text-text-muted font-mono">
                                                            <FolderOpen size={12} />
                                                            <span>Evidence_Vault</span>
                                                        </div>
                                                        <motion.div
                                                            className="grid grid-cols-3 gap-2"
                                                            variants={{
                                                                visible: { transition: { staggerChildren: 0.1 } }
                                                            }}
                                                            initial="hidden"
                                                            animate="visible"
                                                        >
                                                            {item.gallery.map((img, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    variants={{
                                                                        hidden: { opacity: 0, y: -10 },
                                                                        visible: { opacity: 1, y: 0 }
                                                                    }}
                                                                    className="relative aspect-video rounded-md overflow-hidden bg-surface-highlight border border-white/5 hover:border-white/20 transition-colors"
                                                                >
                                                                    {/* Using standard img for brevity or Next Image if preferred. Using img for placeholders often safer avoids domain config issues */}
                                                                    <img
                                                                        src={img}
                                                                        alt="Proof of work"
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
