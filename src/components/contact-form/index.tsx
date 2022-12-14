import { down, up } from "styled-breakpoints";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useRef } from "react";

import SectionTitle from "../section-title/SectionTitle";
import Button from "../button/Button";
import FormField from "./FormField";

const ContactForm: React.FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        formRef.current,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formRef.current.reset();
  };

  return (
    <Wrapper id="contact-form">
      <SectionTitle>Let's chat</SectionTitle>

      <Text>
        Reach out if you want help bringing your ideas to life or if you just
        want to connect
      </Text>

      <Form ref={formRef} onSubmit={sendEmail}>
        <FormField formFieldInput="input" type="text" label="Name" id="name" />

        <FormField
          formFieldInput="input"
          type="email"
          label="Email"
          id="email"
        />

        <FormField
          formFieldInput="input"
          type="text"
          label="Subject"
          id="subject"
        />
        <FormField formFieldInput="textarea" label="Message" id="message" />

        <Button text="Send message" type="submit" />
      </Form>
    </Wrapper>
  );
};

export default ContactForm;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  width: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
  padding-bottom: 20px;
`;

export const Form = styled.form`
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  row-gap: 20px;

  ${down("tablet")} {
    width: 100%;
  }

  ${up("tablet")} {
    width: 560px;
  }

  padding-bottom: 40px;
`;
