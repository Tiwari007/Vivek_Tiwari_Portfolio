const ProjectCard = ({project}) => {
    console.log("projectdata", project);
    return (
        <div className="card-hover">
            <div className="card-hover__content">
                <h3 className="card-hover__title">
                    Project <span>{project?.title}</span>
                </h3>
                <div className="card-hover__text">
                    <ul>
                        {
                            project?.technologyUsed.map((technology, index) => {
                                return (
                                    <li key={index}>{technology}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <a  href={project?.url} target="_blank" rel="noreferrer" className="card-hover__link">
                    <span>Go To Github 🚀</span>
                </a>
            </div>
            <img src={ project.image || "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"} alt="" />
        </div>
    )
}

export default ProjectCard