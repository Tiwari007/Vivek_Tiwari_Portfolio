import profile_pic from '../assets/Profile Pic Yellow.jpg'

const Dashboard = () => {


    const downloadResume = () => {

    }

    return (
        <div className="dashboard" id="dashboard">
            <div className="dashboard--container">
                <div className="about--me">
                    <h2>Hi It's Me</h2>
                    <br />
                    <h1 className="name">I'm <b>V<span>iv</span>e<span>k T</span>iw<span>a</span><span>ri</span></b></h1>
                    <br />
                    <p>Mern Stack Developer</p>
                    <p>Having 2 Years of Experience</p>

                    <div className="download--resume">
                        <a
                            href=""
                            download="Vivek_Tiwari_Resume"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="wrapper">
                                <button>
                                    Download My Resume
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </a>
                    </div>

                    <div className="connect--with--me">
                        <ul className="wrapper">
                            <li className="icon discord">
                                <span className="tooltip">Discord</span>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                                    className="fab fa-discord"></i></span></a>
                            </li>
                            <li className="icon instagram">
                                <span className="tooltip">Instagram</span>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vivek5011"><span><i
                                    className="fab fa-instagram"></i></span></a>
                            </li>
                            <li className="icon github">
                                <span className="tooltip">Github</span>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                                    className="fab fa-github"></i></span></a>
                            </li>
                            <li className="icon youtube">
                                <span className="tooltip">Youtube</span>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCY-S2SH0Yl4AvlAMzwVrbQg"><span><i
                                    className="fab fa-youtube"></i></span></a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="about--picture">
                    <img src={profile_pic} alt="about--me" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;