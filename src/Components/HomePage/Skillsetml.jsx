import React from "react";

const Skillsetml = () => {
  const skillSets = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 90 },
        { name: "Numpy", level: 75 },
        { name: "Matplotlib", level: 80 },
        { name: "Scikit-learn", level: 75 },
        { name: "NLP", level: 70 },
        { name: "Sea-Born", level: 80 },
        { name: "Data Pre-processing", level: 80 },
      ],
      color: "bg-blue-500",
    },
    {
      title: "Research",
      skills: [
        { name: "Data Collection & Analysis", level: 85 },
        { name: "Scientific Writing", level: 80 },
        { name: "Experiment Design", level: 75 },
        { name: "Statistical Methods", level: 70 },
        { name: "Literature Review", level: 75 },
        { name: "Model Build and Training", level: 70 },
      ],
      color: "bg-green-500",
    },
    {
      title: "Business",
      skills: [
        { name: "Strategy Development", level: 90 },
        { name: "Market Analysis", level: 85 },
        { name: "Market Research", level: 95 },
        { name: "Project Management", level: 94 },
        { name: "Leadership", level: 90 },
        { name: "Comunication", level: 95 },
        { name: "Product Management", level: 93 },
      ],
      color: "bg-yellow-500",
    },
  ];

  return (
    <div id='skill' className="min-h-screen lg:mx-32 py-10">
       <h2 className='head-text'>Skill - Set(ML,RESEARCH,BUSINESS)</h2>
      <div className="mt-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {skillSets.map((set, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 ${set.color} text-white`}
          >
            <h2 className="text-2xl font-semibold mb-4">{set.title}</h2>
            <ul className="space-y-4">
              {set.skills.map((skill, i) => (
                <li key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{ width: `${skill.level}%`, backgroundColor: "#ffffff" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillsetml;
