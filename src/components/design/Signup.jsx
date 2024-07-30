import React from 'react';

export const Gradient = ({ className }) => (
  <div className={`absolute inset-0 ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#F9A8D4", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#A7F3D0", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient1)" />
    </svg>
  </div>
);

export const LeftCurve = ({ className }) => (
  <div className={className}>
    <svg viewBox="0 0 1024 1024" className="w-full h-full">
      <path fill="#F9A8D4" d="M0,0 C400,400 600,600 1024,1024 L0,1024 Z" />
    </svg>
  </div>
);

export const RightCurve = ({ className }) => (
  <div className={className}>
    <svg viewBox="0 0 1024 1024" className="w-full h-full">
      <path fill="#A7F3D0" d="M1024,0 C624,400 424,600 0,1024 L1024,1024 Z" />
    </svg>
  </div>
);
