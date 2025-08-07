import React from 'react'
import { motion } from "framer-motion";
function Fade({ children }) {
  return (
    <div>
       <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }} // ← Trigger every time it scrolls into view (50% visibility)
            style={{
              margin: '200px 0', // Add space to test scrolling
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {children}
          </motion.div>
    </div>
  )
}

export default Fade
