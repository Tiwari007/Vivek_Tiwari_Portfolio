import React, { useState, useEffect } from 'react';
import profile_pic from '../assets/Profile Pic Light Blue.png'
import myResume from '../assets/Tiwari_Vivek_Resume_2024.pdf'

const Dashboard = () => {

    const [scrollY, setScrollY] = useState(0);

    // Event handler to track scroll position
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="dashboard" id="home" style={{ clipPath: `inset(${scrollY < 20 ? scrollY : 20}px 0 0 0)` }}>
            <div className="dashboard--container">
                <div className="about--me">
                    <h2>Hi It's Me</h2>
                    <br />
                    <h1 className="name">Vivek Tiwari</h1>
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
