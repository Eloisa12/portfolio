"use client";

export default function Building() {
  return (
    <div className="absolute bottom-0 right-0 w-[80vw] h-[60vh] bg-shockingpinky p-4 shadow-lg">
      {/* First row */}
      <div className="flex justify-evenly space-x-4 mt-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-[10vw] h-[10vw] max-w-[60px] max-h-[60px] bg-indigo-950 shadow-md hover:bg-yellow-400"
          ></div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex justify-evenly space-x-4 mt-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-[10vw] h-[10vw] max-w-[60px] max-h-[60px] bg-indigo-950 shadow-md hover:bg-yellow-400"
          ></div>
        ))}
      </div>
    </div>
  );
}

