"use client";

import Sun from '@/components/Sun';

export default function Popup() {
  return (
    <div className="fixed top-0 left-5/6 transform -translate-x-1/2 bg-cream/20 border-4 border-midnight w-[420px] h-[340px] shadow-[5px_5px_0px_#808080]">
      {/* titlebar */}
      <div className="bg-midnight text-white px-3 py-2 flex justify-between items-center font-sans text-sm">
        <span className="font-bold">Sun</span>
        <div className="flex space-x-2">
          <button className="bg-gray-400 border border-midnight w-6 h-6 flex items-center justify-center text-red-600">✕</button>
        </div>
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
  );
}