import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactUsForm() {

    const [error, setError] = React.useState(false);
    const [openSuccessNotification, setOpenSuccessNotification] = React.useState(false);
    const [messageData, setMessageData] = React.useState({
        name: "",
        phoneno: "",
        email: "",
        subject: "",
        yourmessage: ""
    })

    const form = React.useRef();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSuccessNotification(false);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);

        if (
            messageData.name === "" ||
            messageData.email === "" ||
            messageData.subject === "" ||
            messageData.yourmessage === ""
        ) {
            setError(true);
        } else {
            
            setError(false);
            console.log(messageData);

            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID || 'service_oecx71w' , process.env.REACT_APP_TEMPLATE_ID || 'template_vq9jmbh' , form.current , process.env.REACT_APP_PUBLIC_KEYS || 'v-gDUE5DrTkQA_Mjn' )
                .then((result) => {
                    setOpenSuccessNotification(true);
                }, (error) => {
                    console.log(error.text);
                });



            setMessageData({
                name: "",
                phoneno: "",
                email: "",
                subject: "",
                yourmessage: ""
            })
        }
    };

    return (
        <Container component="main" maxWidth="xs" className="contactUs__form">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Box
                    ref = {form}
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3, color: "white" }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "rgba(255, 255, 255, 0.699)",
                                    },
                                    // label: {
                                    //     color: '#ffffff',
                                    // },
                                }}
                                autoComplete="given-name"
                                name="name"
                                value={messageData.name}
                                onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                                required
                                fullWidth
                                id="name"
                                label="Name"
                            // autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "rgba(255, 255, 255, 0.699)",
                                    },
                                }}
                                fullWidth
                                id="phoneno"
                                onChange={(e) => setMessageData({ ...messageData, phoneno: e.target.value })}
                                value={messageData.phoneno}
                                label="Phone Number"
                                name="phoneno"
                                autoComplete="phone-number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "rgba(255, 255, 255, 0.699)",
                                    },
                                }}
                                required
                                fullWidth
                                value={messageData.email}
                                onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "rgba(255, 255, 255, 0.699)",
                                    },
                                }}
                                required
                                fullWidth
                                value={messageData.subject}
                                onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })}
                                name="subject"
                                label="Subject"
                                id="subject"
                                autoComplete="subject"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "rgba(255, 255, 255, 0.699)",
                                        height: "60px",
                                    },
                                }}
                                required
                                fullWidth
                                value={messageData.yourmessage}
                                onChange={(e) => setMessageData({ ...messageData, yourmessage: e.target.value })}
                                name="yourmessage"
                                label="Your Message"
                                id="yourmessage"
                                autoComplete="your-message"
                            />
                        </Grid>
                        {error && (
                            <span
                                style={{ color: "red", margin: "10px 0 0 10px" }}
                                className="name__error"
                            >
                                * Fields Can't be empty
                            </span>
                        )}
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

            <Snackbar
                open={openSuccessNotification}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Message Send SuccessFully 🚀
                </Alert>
            </Snackbar>
        </Container>
    );
}
