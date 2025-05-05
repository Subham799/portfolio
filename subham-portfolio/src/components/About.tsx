import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about_me section-container section-animate">
      <h2 className="heading">About Me</h2>
      <div className="about_me_info max-w-3xl mx-auto text-center bg-opacity-10 bg-white backdrop-blur-lg p-8 rounded-xl">
        <p className="about_me_left text-lg leading-relaxed">
          Hello! I'm Subham Kandpal, a final-year B.Tech (IT) student passionate about web development with hands-on experience in JavaScript, React, Node.js, Express, and MongoDB.
          I've built full-stack projects practicing frontend, backend, and basic database handling.
          With a strong problem-solving background (Codeforces Specialist, 1413) and having solved 250+ DSA problems,
          I'm a quick learner aiming to deliver real-world applications. I enjoy turning complex problems into elegant,
          intuitive solutions through code.
        </p>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
