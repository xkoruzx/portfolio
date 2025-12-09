"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
    "> Initializing environment...",
    "> Loading modules...",
    "> System Check: OK",
    "> Mounting Portfolio...",
];

export const Preloader = ({ onFinish }: { onFinish: () => void }) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [showIdentity, setShowIdentity] = useState(false);

    // Phase 1: Terminal Sequence
    useEffect(() => {
        if (lineIndex < terminalLines.length) {
            const timeout = setTimeout(() => {
                setLineIndex((prev) => prev + 1);
            }, 300); // Speed of typing/line appear
            return () => clearTimeout(timeout);
        } else {
            // Phase 1 Complete -> Start Phase 2
            const timeout = setTimeout(() => {
                setShowIdentity(true);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [lineIndex]);

    // Phase 2: Identity Reveal duration
    useEffect(() => {
        if (showIdentity) {
            const timeout = setTimeout(() => {
                onFinish();
            }, 1200); // How long the identity stays before curtain lift
            return () => clearTimeout(timeout);
        }
    }, [showIdentity, onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // Curtain Lift
        >
            <div className="w-full max-w-lg p-6 font-mono text-sm md:text-base">
                {!showIdentity ? (
                    // Phase 1: Terminal
                    <div className="text-gray-300 space-y-2">
                        {terminalLines.slice(0, lineIndex + 1).map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-green-500 mr-2">$</span>
                                {line}
                            </motion.div>
                        ))}
                        <motion.div
                            className="w-3 h-5 bg-primary inline-block ml-1"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                        />
                    </div>
                ) : (
                    // Phase 2: Identity Reveal
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-black text-white tracking-tight">
                            Welcome To My Portfolio
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="h-1 bg-primary mx-auto mt-4"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};
