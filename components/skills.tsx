const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS/ Tailwaind_CSS', level: '90%' },
    { name: 'Typescript', level: '60%' },
    { name: 'Python', level: '75%' },
    { name: 'Next.js', level: '75%' },
    { name: 'Figma' , level: '90%'},
  ];
  
  const Skills: React.FC = () => (
    <section id="skills" className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-redAccent">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded h-2 mt-2 overflow-hidden">
              <div className={`bg-redAccent h-full`} style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Skills;
  
