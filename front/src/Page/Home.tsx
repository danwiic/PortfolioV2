import { useState, useEffect } from "react";

export default function Home() {
  const [cheight, setCHeight] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function updateHeight() {
    setCHeight({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);
  return (
    <>
      <section id="home" className="h-screen p-20 grid grid-cols-2 gap-1">
        <div className="bg-red-500 motion-preset-slide-right  "></div>

        <div className="bg-pink-300 motion-preset-slide-left p-5 flex justify-center items-center text-3xl font-bold">
          <div className="motion-preset-typewriter-[23]  motion-duration-7000 motion-opacity-in ">Welcome! My name is Dan</div>
        </div>
      </section>
    </>
  );
}
