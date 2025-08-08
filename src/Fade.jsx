import React from 'react';
import { motion } from 'framer-motion';
import './Fade.css'; // Import responsive styles

function Fade({ children }) {
  return (
    <motion.div
      className="fade-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
