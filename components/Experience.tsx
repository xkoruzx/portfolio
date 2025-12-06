"use client";

import { motion } from "framer-motion";
import { Briefcase, Network, GraduationCap } from "lucide-react";

const experience = [
    {
        role: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - 2024",
        desc: "Leading development of scalable web applications and overseeing cloud infrastructure.",
        type: "work",
        icon: Briefcase,
        color: "bg-primary"
    },
    {
        role: "IT Support Intern",
        company: "Andamanda Phuket Water Park",
        period: "2021 - 2022",
        desc: "Managed internal network security, server maintenance, and automated system deployment.",
        type: "work",
        icon: Network,
        color: "bg-purple-500"
    },
    {
        role: "Marketing Intern",
        company: "S.D Phuket Computer",
        period: "2020 - 2021",
        desc: "Assisted in marketing / social media task to for selling diy hardware",
        type: "intern",
        icon: GraduationCap,
        color: "bg-secondary"
    }
];

export function Experience() {
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
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
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
                                    <div className="bg-surface border border-surface-highlight p-6 rounded-xl hover:border-primary/30 transition-colors group">
                                        <span className="text-secondary font-mono text-xs mb-2 block">{item.period}</span>
                                        <h3 className="text-xl font-bold font-heading text-text-main group-hover:text-primary transition-colors">{item.role}</h3>
                                        <h4 className="text-text-muted text-sm font-medium mb-4">{item.company}</h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
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
