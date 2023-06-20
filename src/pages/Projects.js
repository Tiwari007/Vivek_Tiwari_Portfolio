import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projectData.json'

const Projects = () => {

    return (
        <div className="project--container">
            <h1 className="project--title">Projects</h1>
            <div className="projects">
                {
                    projectData?.map((project, index) => {
                        return (
                            <ProjectCard key={index} projectData={project} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects