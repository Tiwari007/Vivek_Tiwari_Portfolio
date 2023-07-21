import skills from "../data/skillsData";

const Skills = () => {
  return (
    <div className="skills--dashboard" id="skills">
      <div className="skills">
        <div className="skills--title">Skills & Technologies</div>
        <div className="container__progressbars">
          {
            skills.map((skill, index) => {
              return (
                <img className="skills__badge" src={`https://img.shields.io/badge/${skill.name[0].toUpperCase() + skill.name.slice(1)}-${skill.background}?style=for-the-badge&logo=${skill.name}&logoColor=${skill.color}`} height="40px" width="100px" alt="skills"/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
