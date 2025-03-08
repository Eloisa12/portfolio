"use client";

export default function Stairs() {
  return (
    <div className="w-[40vw] h-[50vh] fixed left-0 top-120 flex">
        <div className="flex flex-wrap justify-evenly  w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex-1 w-15 h-90 border-r-12 border-t-12 border-midnight"
          />
        ))}
      </div>
    </div>
  );
}

