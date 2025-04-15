"use client";
import { useState } from 'react';
import Sun from '@/components/Sun';
import CloseSun from './CloseSun';

export default function Popup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCloseSun = () => {
    setIsPopupVisible(false);
    setIsDarkMode(true);
  };

  return (
    isPopupVisible && (
    <div className="fixed top-0 left-5/6 transform -translate-x-1/2 bg-cream/20 border-4 border-midnight w-[420px] h-[340px] shadow-[5px_5px_0px_#808080]">
      {/* titlebar */}
      <div className="bg-midnight text-white px-3 py-2 flex justify-between items-center font-sans text-sm">
        <span className="font-bold">Sun</span>
        <CloseSun onClose={() => handleCloseSun} />
      </div>
      

      {/* Content */}
      <div className="p-5 text-black font-sans text-lg">
        <div className="flex items-center justify-around mt-4">
            <Sun></Sun>
        </div>
        <div className="flex justify-end mt-1">
            <button className="bg-gray-400 border border-black w-20 h-10 flex items-center justify-center">OK</button>
        </div>
      </div>
    </div>
    )
  );
}