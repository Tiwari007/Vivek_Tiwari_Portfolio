import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';


export default function ContactUsForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('yourname'),
            phoneNumber: data.get('phoneno'),
            email: data.get('email'),
            subject: data.get('subject'),
            message: data.get('yourmessage'),
        });
    };



    return (
        <Container component="main" maxWidth="xs" className="contactUs__form">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, color: "white" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{
                                    input: { color: 'black', backgroundColor: "rgba(255, 255, 255, 0.699)" }, 
                                    // label: {
                                    //     color: '#ffffff',
                                    // },
                                }}
                                autoComplete="given-name"
                                name="yourname"
                                required
                                fullWidth
                                id="yourname"
                                label="Your Name"
                            // autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ input: { color: 'black', backgroundColor: "rgba(255, 255, 255, 0.699)" } }}
                                required
                                fullWidth
                                id="phoneno"
                                label="Phone Number"
                                name="phoneno"
                                autoComplete="phone-number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ input: { color: 'black', backgroundColor: "rgba(255, 255, 255, 0.699)" } }}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ input: { color: 'black', backgroundColor: "rgba(255, 255, 255, 0.699)" } }}
                                required
                                fullWidth
                                name="subject"
                                label="Subject"
                                id="subject"
                                autoComplete="subject"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ input: { color: 'black', backgroundColor: "rgba(255, 255, 255, 0.699)", height: "60px" } }}
                                required
                                fullWidth
                                name="yourmessage"
                                label="Your Message"
                                id="yourmessage"
                                autoComplete="your-message"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}