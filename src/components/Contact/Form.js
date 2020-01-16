import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false,
        opened: false
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        let templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'info@threetreesflooring.ca',
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_CPEsK6n7',
            templateParams,
            'user_rYUCGrXhvcZLLYrrsixOZ'
        ).then(res => {
            console.log('Email successfully sent!')
            this.setState({ submitted: true })
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Error that occured:', err))
            .finally(() => this.handleOpen())
        this.resetForm()
    }
    handleClose() {
        this.setState({ opened: false });
    }
    handleOpen(){
        this.setState({opened: true});
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    isFormValid = () => {
        const { name, email, message } = this.state
        return name && email && message
    }
    render() {
        return (
            <div>
                <FormControl onSubmit={this.handleSubmit.bind(this)} style={{ width: "100%" }}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                        Get in touch via e-mail
                    </Typography>
                    <Divider style={{ margin: "1em" }} />
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        style={{ width: "90%", margin: "1em" }}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'name')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Your email"
                        variant="outlined"
                        style={{ width: "90%", margin: "1em" }}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'email')}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="4"
                        variant="outlined"
                        style={{ width: "90%", margin: "1em" }}
                        type="text"
                        name="subject"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                    />
                </FormControl>
                <Button
                    style={{ width: "90%", margin: "1em", height: "75px", border: "1px solid lightGrey" }}
                    onClick={this.handleSubmit}
                    disabled={!this.isFormValid()}
                >
                    Submit
                </Button>
                <Dialog
                    open={this.state.opened}
                    onClose={this.handleClose}
                >
                    {this.state.submitted ?
                        <DialogTitle id="alert-dialog-title">{"Submission successful."}</DialogTitle> :
                        <DialogTitle id="alert-dialog-title">{"Submission unsuccessful."}</DialogTitle>

                    }
                    <DialogContent>
                        {this.state.submitted ?
                            <DialogContentText id="alert-dialog-description">
                                We will get back to you ASAP.
                            </DialogContentText> :
                            <DialogContentText id="alert-dialog-description">
                                Please try again.
                            </DialogContentText>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default ContactForm