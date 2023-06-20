const Footer = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer;