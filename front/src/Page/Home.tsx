import { useState, useEffect } from "react";
import img from "../../public/pfp.jpg"

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
        <div className="motion-preset-slide-right p-10   ">
          <img
            src={img}
            alt="hero"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className=" motion-preset-slide-left p-20 flex flex-col justify-start gap-5">
          <div className="wrapper">
            <div className="typing-demo">Welcome! My name is Dan</div>
            <span>Full-stack Web Developer</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            provident iste error iure, doloremque suscipit velit perferendis
            enim ipsa voluptatum eum, voluptas nam ex? Veniam impedit architecto
            sit fugiat in.
          </p>
        </div>
      </section>
    </>
  );
}
