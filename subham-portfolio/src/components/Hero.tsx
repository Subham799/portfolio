// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="Main min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center w-full py-16">
        {/* left side - text */}
        <div className="main_left w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Shubham</h1>
          <p className="mt-4 text-lg md:text-xl">
            I build web apps and take photos. Welcome to my portfolio.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="mailto:youremail@example.com"
              className="px-4 py-2 rounded-md border"
            >
              E-Mail Me
            </a>
            <a
              href="https://drive.google.com/file/d/1g0QfWEFARPz9-E8yVxwxtTIrQokyMw7W/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md bg-blue-400 text-white"
            >
              Resume
            </a>
          </div>
        </div>

        {/* right side - image */}
        <div className="main_right w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            {/* public/myimage.jpeg -> use leading slash */}
            <img
              src="/myimage.jpeg"
              alt="Shubham Kandpal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
