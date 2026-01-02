import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero" id="about">
            <div className="container hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    공간은 삶을,<br />기술은 인간을
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    Spaces Shape Lives, Technology Serves Humanity
                </motion.p>
                <motion.div
                    style={{ display: 'flex', gap: '1rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    <a href="#services" style={{ padding: '1rem 2rem', background: 'var(--accent-color)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>
                        연구 분야 보기
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
