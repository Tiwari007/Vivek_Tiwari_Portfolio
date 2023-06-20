const Skills = () => {
  return (
    <div className="skills--dashboard" id="skills">
      <div className="skills">
        <div className="skills--title">Professional Skill</div>
        <div class="container__progressbars">
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-html shadow-html"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-html">HTML</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-css shadow-css"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-css">CSS</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-js shadow-js"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-js">JavaScript</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-react shadow-react"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-react">React JS</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-node shadow-node"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-node">Node JS</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-node shadow-node"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-node">GraphQL</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-react shadow-react"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-react">Github</span>
          </div>
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-angular shadow-angular"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__percentage">80%</span>
            <span class="progressbar__text shadow-angular">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
