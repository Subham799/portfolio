import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Web Developer | Full Stack Developer | Problem Solver';
  const [textIndex, setTextIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [text, textIndex]);

  return (
    <div className="Main flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-32 max-w-6xl mx-auto">
      <div className="main_left mb-10 md:mb-0 md:mr-10">
        <h3 className="it_is_me text-lg md:text-xl text-gray-300 mb-2">Hey! It's Me</h3>
        <h2 className="names text-4xl md:text-5xl font-bold text-primary mb-2">Subham Kandpal</h2>
        <p className="i_am_a text-lg md:text-xl mb-6">I am a {text}<span className="animate-pulse">|</span></p>

        <div className="flex1 mb-8">
          <p className="follow_me text-gray-300 mb-2">follow me: </p>
          <div className="logos flex space-x-4">
            <a href="https://github.com/Subham799" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://codeforces.com/profile/subhamkandpal799" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm7.5 0c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3zm7.5 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
            </a>
            <a href="mailto:subhamkandpal799@gmail.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/subham-kandpal" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex1 flex space-x-4">
          <a href="mailto:subhamkandpal799@gmail.com" className="buttonc bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition px-4 py-2 rounded-md">
            E-Mail Me
          </a>
          <a href="/resume.pdf" download className="buttonb bg-primary text-white hover:bg-secondary transition px-4 py-2 rounded-md">
            Resume
          </a>
        </div>
      </div>

      <div className="main_right w-full md:w-1/2 flex justify-center">
        <div className="blob w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary opacity-80" />
      </div>
    </div>
  );
};

export default Hero;
