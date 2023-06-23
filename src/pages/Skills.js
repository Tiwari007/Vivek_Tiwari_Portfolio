import skillsData from '../data/skillsData.json'

const Skills = () => {
  return (
    <div className="skills--dashboard" id="skills">
      <div className="skills">
        <div className="skills--title">Skill</div>
        <div className="container__progressbars">
          {
            skillsData.map((skill, index) => {
              return (
                <div key={index} className="progressbar">
                  <svg className="progressbar__svg">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      className={`progressbar__svg-circle circle-html ${skill.class}`}
                    >
                      {" "}
                    </circle>
                  </svg>
                  <span className="progressbar__percentage">{skill.percentage}</span>
                  <span className="progressbar__text shadow-html">{skill.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
