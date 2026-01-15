import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-surface-highlight bg-surface/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-heading font-bold text-text-main mb-2">SURADIT RONGMUANG</h3>
                    <p className="text-text-muted text-sm">suradit.nus@gmail.com</p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/xkoruzx" target="_blank" className="text-text-muted hover:text-primary transition-colors"><Github size={20} /></Link>
                    <Link href="https://www.linkedin.com/in/suradit-rongmuang-3856a8355/" target="_blank" className="text-text-muted hover:text-blue-400 transition-colors"><Linkedin size={20} /></Link>
                    <Link href="mailto:suradit.nus@gmail.com?subject=Hi I'am Nus &body=If you want to text me you can text me here!!" target="_blank" className="text-text-muted hover:text-secondary transition-colors"><Mail size={20} /></Link>
                </div>

                <div className="text-text-muted text-xs font-mono">
                    &copy; My Portfolio.
                </div>
            </motion.div>
        </footer>
    );
}
