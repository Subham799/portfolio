import { useState } from 'react';

interface NavbarProps {
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const Navbar = ({ scrollToAbout, scrollToSkills, scrollToProjects, scrollToContact }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="left">
          <h2 className="title text-xl font-bold text-white">Portfolio</h2>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="right hidden md:flex space-x-6">
          <button onClick={() => window.scrollTo(0, 0)} className="button text-white hover:text-primary cursor-pointer transition bg-transparent">Home</button>
          <button onClick={scrollToAbout} className="button text-white hover:text-primary cursor-pointer transition bg-transparent">About Me</button>
          <button onClick={scrollToSkills} className="button text-white hover:text-primary cursor-pointer transition bg-transparent">Skills</button>
          <button onClick={scrollToProjects} className="button text-white hover:text-primary cursor-pointer transition bg-transparent">Projects</button>
          <button onClick={scrollToContact} className="button text-white hover:text-primary cursor-pointer transition bg-transparent">Contact Me</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-3 bg-dark shadow-lg">
          <button onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="button block py-2 text-white hover:text-primary cursor-pointer w-full text-left bg-transparent">Home</button>
          <button onClick={() => { scrollToAbout(); setIsMenuOpen(false); }} className="button block py-2 text-white hover:text-primary cursor-pointer w-full text-left bg-transparent">About Me</button>
          <button onClick={() => { scrollToSkills(); setIsMenuOpen(false); }} className="button block py-2 text-white hover:text-primary cursor-pointer w-full text-left bg-transparent">Skills</button>
          <button onClick={() => { scrollToProjects(); setIsMenuOpen(false); }} className="button block py-2 text-white hover:text-primary cursor-pointer w-full text-left bg-transparent">Projects</button>
          <button onClick={() => { scrollToContact(); setIsMenuOpen(false); }} className="button block py-2 text-white hover:text-primary cursor-pointer w-full text-left bg-transparent">Contact Me</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
