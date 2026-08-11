import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about_me section-container section-animate">
      <h2 className="heading">About Me</h2>
      <div className="about_me_info max-w-3xl mx-auto text-center bg-opacity-10 bg-white backdrop-blur-lg p-8 rounded-xl">
        <p className="about_me_left text-lg leading-relaxed">
          Hello! I'm Subham Kandpal, a B.Tech (IT) graduate passionate about full-stack web development and digital growth. I have hands-on experience in JavaScript, React, Node.js, Express, and MongoDB, having built and deployed end-to-end real-world projects like kundalimaker.com.

Beyond core backend and frontend development, I bring strong practical expertise in Search Engine Optimization (SEO), CMS management, and leveraging AI tools (ChatGPT, Claude, Gemini) for business logic and content strategy. I also have technical experience in multimedia automation and editing, utilizing Edge-TTS, FFmpeg, CapCut, VN, and Canva to engineer engaging digital solutions.

With a solid problem-solving background (Codeforces Specialist, 1413) and having solved 250+ DSA problems, I am a quick learner aiming to deliver scalable applications. I enjoy turning complex challenges into elegant, intuitive, and business-driven solutions through code.
        </p>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
