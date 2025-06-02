// components/BlurBlob.jsx
import React from 'react';

interface BlurBlobProps {
  position: {
    top: string;
    left: string;
  };
  size: {
    width: string;
    height: string;
  };
}

const BlurBlob: React.FC<BlurBlobProps> = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size 

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

export default BlurBlob;