import { forwardRef } from 'react';

const skills = {
  languages: [
    { name: 'HTML', percentage: 75 },
    { name: 'CSS', percentage: 70 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React.js', percentage: 70 },
    { name: 'Java', percentage: 65 },
    { name: 'Node.js', percentage: 60 },
  ],
  libraries: [
    { name: 'Express.js', percentage: 65 },
    { name: 'MongoDB', percentage: 60 },
    { name: 'Tailwind CSS', percentage: 70 },
    { name: 'REST APIs', percentage: 65 },
  ]
};

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="skills section-container section-animate">
      <h2 className="heading1 text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-6xl mx-auto">
        <h3 className="heading2 text-2xl font-semibold text-center mb-10">Languages & Frameworks</h3>
        <div className="contents">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.languages.map((skill) => (
              <div key={skill.name} className="semi-donut" style={{'--percentage': skill.percentage} as React.CSSProperties}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 section-animate">
          <h3 className="heading3 text-2xl font-semibold text-center mb-10">Libraries & Tools</h3>
          <div className="contents">
            <div className="flex flex-wrap justify-center gap-8">
              {skills.libraries.map((skill) => (
                <div key={skill.name} className="semi-donut" style={{'--percentage': skill.percentage} as React.CSSProperties}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Updated bottom section to a 3-column grid for better layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-stretch">
          
          {/* Box 1: Development Tools */}
          <div className="p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">Development Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>

          {/* Box 2: Digital & AI Tools (Newly Added) */}
          <div className="p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">Digital & AI Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>SEO & Analytics</li>
              <li>AI (ChatGPT, Claude, Gemini)</li>
              <li>CMS (Shopify, WordPress)</li>
              <li>Media Editing (Canva, CapCut)</li>
            </ul>
          </div>

          {/* Box 3: Soft Skills */}
          <div className="p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;