import React, {  useState } from 'react';
import { StyledContact } from './styled';
import { Container } from '../../style/components';
import ContactForm from '../../components/views/forms/ContactForm';
import Alert from '../../components/ui/Alert';
import Title from '../../components/common/Title';
const Contact = () => {
  const [showAlert ,setShowAlert]= useState(false);
  return (
    <StyledContact>
      <Container>
        <Title>Let's talk</Title>
        <ContactForm {...{setShowAlert}}/>
        {showAlert&&<Alert {...{setShowAlert}}/>}
      </Container>
    </StyledContact>
  );
};
export default Contact;