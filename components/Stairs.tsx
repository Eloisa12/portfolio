"use client";

export default function Stairs() {
  return (
    <div className="w-[45vw] h-[40vh] fixed left-0 bottom-0 flex">
        <div className="flex flex-wrap justify-evenly w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r-12 border-t-12 border-midnight"
          />
        ))}
      </div>
    </div>
  );
}

