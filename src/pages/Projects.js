import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data/projectData'

const Projects = () => {

    console.log(projectData);

    return (
        <div className="project--container" id='projects'>
            <h1 className="project--title">Projects</h1>
            <div className="projects">
                {
                    projectData?.map((project, index) => {
                        return (
                            <ProjectCard key={index} project={project} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects