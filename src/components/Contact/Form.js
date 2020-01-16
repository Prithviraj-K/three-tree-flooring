import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false
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
            this.setState({submitted: true})
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))

        this.resetForm()
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
    render() {
        return (
            <div>
                <FormControl onSubmit={this.handleSubmit.bind(this)} style={{width: "100%"}}>
                    <Typography variant="h5" style={{ textAlign: "center" }}>
                        Contact us via e-mail
                    </Typography>
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
                        id="outlined-baseic"
                        label="Email"
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
                        rows="6"
                        variant="outlined"
                        style={{ width: "90%", margin: "1em" }}
                        type="text"
                        name="subject"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                    />
                    <Button
                        type="submit"
                        style={{ width: "90%", margin: "1em", height: "75px" }}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>
                    {this.state.submitted ? <p style={{margin: "1em", color: "red"}}>Submitted</p> : null}
                </FormControl>
            </div>
        )
    }
}
export default ContactForm