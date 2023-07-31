import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BlueButton } from '../../../../style/components';
import Input from '../../../common/Input';
import { Label, Input as InputStyled } from '../../../common/Input/style';
import { StyledContactForm } from './styled';
const inital = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: ""
}
const ContactForm = ({setShowAlert}) => {
  const [formData, setFormData] = useState(inital)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_m7ire35', 'template_xydakha', formData, 'lilTGmT1l8WZrJDby')
      .then((result) => {
        console.log(result.text);
        // create state for alert in the main page and change the value here
        setShowAlert(true)
        setFormData(inital);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <StyledContactForm onSubmit={sendEmail}>
      <div className="name">
        <Input
          onChange={handleInputChange}
          type="text"
          label="First Name"
          name="firstName"
          id="firstName"
          value={formData.firstName}
        />
        <Input
          onChange={handleInputChange}
          type="text"
          label="Last Name"
          name="lastName"
          id="lastName"
          value={formData.lastName}
        />
      </div>
      <Input
        onChange={handleInputChange}
        type="text"
        label="Email"
        name="email"
        id="email"
        value={formData.email}
      />
      <Input
        onChange={handleInputChange}
        type="text"
        label="Subject"
        name="subject"
        id="subject"
        value={formData.subject}
      />
      <div>
        <Label htmlFor="message">Message</Label>
        <InputStyled as="textarea" id="message" name="message" onChange={handleInputChange} value={formData.message}></InputStyled>
      </div>
      <BlueButton>send</BlueButton>
    </StyledContactForm>
  );
};
export default ContactForm;