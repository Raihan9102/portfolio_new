import React from "react";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f8fafc]">
      {/* Subtle ambient lighting only - no animated blobs */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 60%)",
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 60%)",
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
