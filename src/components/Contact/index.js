import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import {
  Container,
  FormWrap,
  Icon,
  Img,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormLabelError,
  FormInput,
  FormButton,
  FormTextArea,
  FormMsg,
  BackButtonContainer,
  BackButton,
  BackButtonSpan,
  SocialLinkContainer,
  SocialLinkSpan,
  SocialLinkedin,
  SocialGithub,
  SocialSvgs,
  fadeIn,
  fadeOut,
} from "./ContactElements";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
  };

  handleName = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    this.setState({
      name: e.target.value,
      errors,
    });
  };

  handleEmail = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    this.setState({
      email: e.target.value,
      errors,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    // Form data
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    // Validation
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");

    // Call the server
    axios
      .post("/api/form", data)
      .then(this.setState({ sent: true }, this.resetForm()))
      .catch(() => {
        console.log("Message not sent.");
      });
  };

  validate = () => {
    const options = { abortEarly: false };
    const IDofPerson = { name: this.state.name, email: this.state.email };
    const { error } = Joi.validate(IDofPerson, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  resetForm = () => {
    this.setState({
      errors: {},
    });

    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        message: "",
        sent: false,
      });
    }, 3000);
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <Container>
          <BackButtonContainer>
            <BackButton to="/">
              <BackButtonSpan>Go back</BackButtonSpan>
            </BackButton>
          </BackButtonContainer>

          <FormWrap>
            <FormContent>
              <Form onSubmit={this.formSubmit}>
                <Icon>
                  <Img src={this.props.img2} alt={this.props.alt} />
                </Icon>

                <FormH1>Feel free to get in touch</FormH1>

                <FormLabel htmlFor="for">Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  className="formName"
                  placeholder="your name..."
                  value={this.state.name}
                  onChange={this.handleName}
                />
                {errors.name && <FormLabelError>{errors.name}</FormLabelError>}

                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  type="text"
                  name="email"
                  className="formEmail"
                  placeholder="your email..."
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                {errors.email && (
                  <FormLabelError>{errors.email}</FormLabelError>
                )}

                <FormLabel htmlFor="for">Message</FormLabel>
                <FormTextArea
                  type="text"
                  name="message"
                  className="formMessage"
                  placeholder="your message..."
                  rows="4"
                  value={this.state.message}
                  onChange={this.handleMessage}
                />

                <FormButton
                  // disabled={this.validate()}
                  type="submit"
                  onClick={this.resetForm}
                >
                  Submit
                </FormButton>
                <FormMsg style={this.state.sent ? fadeIn : fadeOut}>
                  Email has been sent!
                </FormMsg>
              </Form>
            </FormContent>
            <SocialLinkContainer>
              <SocialLinkedin
                to="//https://www.linkedin.com/in/NamDanh"
                target="_blank"
              >
                <SocialLinkSpan>
                  <SocialSvgs
                    class="i-svg"
                    height="30"
                    version="1.1"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 50 50"
                    space="preserve"
                    data-icon="facebook,"
                  >
                    <path
                      d="M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z"
                      fill="#ffffff"
                    ></path>
                  </SocialSvgs>
                  Linkedin
                </SocialLinkSpan>
              </SocialLinkedin>
              <SocialGithub
                to="//https://www.github.com/namddanh"
                target="_blank"
              >
                <SocialLinkSpan>
                  <SocialSvgs
                    class="i-svg"
                    height="30"
                    version="1.1"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 50 50"
                    space="preserve"
                    data-icon="facebook,"
                  >
                    <path
                      d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z"
                      fill="#ffffff"
                    ></path>
                  </SocialSvgs>
                  GitHub
                </SocialLinkSpan>
              </SocialGithub>
            </SocialLinkContainer>
          </FormWrap>
        </Container>
      </React.Fragment>
    );
  }
}
