const Dashboard = () => {

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

                    <div className="connect--with--me">
                        <ul class="wrapper">
                            <li class="icon discord">
                                <span class="tooltip">Discord</span>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                                    class="fab fa-discord"></i></span></a>
                            </li>
                            <li class="icon instagram">
                                <span class="tooltip">Instagram</span>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vivek5011"><span><i
                                    class="fab fa-instagram"></i></span></a>
                            </li>
                            <li class="icon github">
                                <span class="tooltip">Github</span>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                                    class="fab fa-github"></i></span></a>
                            </li>
                            <li class="icon youtube">
                                <span class="tooltip">Youtube</span>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCY-S2SH0Yl4AvlAMzwVrbQg"><span><i
                                    class="fab fa-youtube"></i></span></a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="about--picture">
                    <img src="https://pbs.twimg.com/media/Fxkxp-AXsAMA5OE?format=jpg&name=medium" alt="about--me" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;