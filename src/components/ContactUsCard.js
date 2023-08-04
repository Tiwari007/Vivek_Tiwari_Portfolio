import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ContactUsCard = () => {

    return (
        <Card maxwidth="xs" className="contactUs__card" sx={{ minWidth: 300, padding: "20px", backgroundColor: "#171527e3", color: "white" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://www.colordarcy.com/wp-content/uploads/2013/12/edbigstock-Handshake-Hand-holding-on-bl-13871291-1920x1080.jpg"
            />
            <CardContent className='contactUs__card__content'>
                <Typography className='title' gutterBottom variant="h4">
                    Vivek Tiwari
                </Typography>
                <Typography className='designation' gutterBottom variant="h5">
                    Software Engineer (MERN Stack Developer)
                </Typography>
                <hr style={{ margin: "2rem 0" }} />
                <Typography className='connect__headline' variant="h6">
                    Any Doubt I Love To Connect By Below Social Links 🙌
                </Typography>

                <br />

                <Typography className='email'>
                    Email: vt2174781@gmail.com 🚀
                </Typography>
                <Typography className='find'>
                    Find Me Here 🔥
                </Typography>
            </CardContent>
            <CardActions className='social__media'>
                <ul className="wrapper">
                    {/* <li className="icon discord">
                        <span className="tooltip">Discord</span>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                            className="fab fa-discord"></i></span></a>
                    </li> */}
                    <li className="icon github">
                        <span className="tooltip">Github</span>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Tiwari007"><span><i
                            className="fab fa-github"></i></span></a>
                    </li>
                    <li className="icon discord">
                        <span className="tooltip">LinkedIn</span>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vivektiwari007/"><span><i
                            className="fab fa-linkedin"></i></span></a>
                    </li>
                </ul>
            </CardActions>
        </Card>
    )
}

export default ContactUsCard