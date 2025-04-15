"use client";
// import { useDarkMode } from './DarkModeContext';

interface CloseSunProps {
    onClose: () => void; // Declare the prop type for TypeScript
  }

export default function CloseSun({ onClose }: CloseSunProps) {
    // const { setIsDarkMode } = useDarkMode();

    function handleClick() {
        // setIsDarkMode(true);
        localStorage.setItem("darkmode", "on");
        onClose();
    }
    return (
        <div className="flex space-x-2">
          <button onClick={() => {
              handleClick();
            }} className="bg-gray-400 border border-midnight w-6 h-6 flex items-center justify-center text-red-600">✕</button>
        </div>
    );
}