import React from "react";
import { motion } from "framer-motion";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f8fafc]">
      {/* Subtle clean tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Top Left Soft Blue Ambient Glow */}
      <motion.div
        className="absolute w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-[130px]"
        style={{ top: "-10%", left: "-10%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, 25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Tech Soft Sky Ambient Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[140px]"
        style={{ top: "30%", right: "-10%" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Bottom Subtle Soft Blue Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[150px]"
        style={{ bottom: "-10%", left: "20%" }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
