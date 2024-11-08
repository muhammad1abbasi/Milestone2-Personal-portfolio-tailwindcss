const skills = [
    { name: 'HTML', level: '80%' },
    { name: 'CSS', level: '50%' },
    { name: 'Typescript', level: '55%' },
    { name: 'Python', level: '30%' },
    { name: 'Next.js', level: '60%' },
    { name: 'Figma' , level: '55%'},
    { name: 'Git Hub' , level: '80%'}
    
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
  