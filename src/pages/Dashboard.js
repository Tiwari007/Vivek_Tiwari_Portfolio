import profile_pic from '../assets/Profile Pic Yellow.jpg'
import myResume from '../assets/Vivek Resume For External Company.pdf'

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

                    <div className="download--resume">
                        <a
                            href={myResume}
                            download="Vivek_Tiwari_Resume"
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