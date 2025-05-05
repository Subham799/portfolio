import { useEffect, useRef } from 'react';

const WhyHireMe = () => {
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (entry.target === leftBoxRef.current) {
              entry.target.classList.add('animate-slideInLeft');
            } else if (entry.target === rightBoxRef.current) {
              entry.target.classList.add('animate-slideInRight');
            }
          }
        }
      },
      { threshold: 0.1 }
    );

    if (leftBoxRef.current) {
      observer.observe(leftBoxRef.current);
    }

    if (rightBoxRef.current) {
      observer.observe(rightBoxRef.current);
    }

    return () => {
      if (leftBoxRef.current) {
        observer.unobserve(leftBoxRef.current);
      }

      if (rightBoxRef.current) {
        observer.unobserve(rightBoxRef.current);
      }
    };
  }, []);

  return (
    <div className="section-container section-animate">
      <h2 className="heading1 text-3xl md:text-4xl font-bold text-center mb-12">Why Hire Me?</h2>

      <div className="neww max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div
            ref={leftBoxRef}
            className="modiv opacity-0 transform translate-x-[-120px]"
          >
            <div className="flex2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="box bg-opacity-10 bg-white backdrop-blur-sm p-6 rounded-xl">
                <h4 className="mid_text text-3xl font-bold text-primary mb-2">1413</h4>
                <p className="main_text_why">Codeforces Rating (Specialist)</p>
              </div>

              <div className="box bg-opacity-10 bg-white backdrop-blur-sm p-6 rounded-xl">
                <h4 className="mid_text text-3xl font-bold text-primary mb-2">250+</h4>
                <p className="main_text_why">DSA Problems Solved</p>
              </div>
            </div>
          </div>

          <div
            ref={rightBoxRef}
            className="modiv opacity-0 transform translate-x-[120px]"
          >
            <div className="flex2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="box bg-opacity-10 bg-white backdrop-blur-sm p-6 rounded-xl">
                <h4 className="mid_text text-3xl font-bold text-primary mb-2">7.0</h4>
                <p className="main_text_why">CGPA in B.Tech (IT)</p>
              </div>

              <div className="box bg-opacity-10 bg-white backdrop-blur-sm p-6 rounded-xl">
                <h4 className="mid_text text-3xl font-bold text-primary mb-2">2</h4>
                <p className="main_text_why">Completed Internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
