import emailjs from "emailjs-com";
import { useRef } from "react";

import {
  Wrapper,
  Text,
  Form,
  InputSection,
  Label,
  Span,
  Input,
  TextArea,
} from "./styled";
import SectionTitle from "../../../components/section-title/SectionTitle";
import CtaButton from "../../../components/cta-button/CtaButton";

const ContactForm: React.FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        formRef.current!,
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
    formRef.current!.reset();
  };

  return (
    <Wrapper id={"contact-form"}>
      <SectionTitle>Let's chat</SectionTitle>
      <Text>
        Reach out if you want help bringing your ideas to life or if you just
        want to connect
      </Text>
      <Form ref={formRef} onSubmit={sendEmail}>
        <InputSection>
          <Input type="text" name="name" id="name" />
          <Label htmlFor="name">
            <Span>Name</Span>
          </Label>
        </InputSection>
        <InputSection>
          <Input type="email" name="email" id="email" />
          <Label htmlFor="email">
            <Span>Email</Span>
          </Label>
        </InputSection>
        <InputSection>
          <Input type="text" name="subject" id="subject" />
          <Label htmlFor="subject">
            <Span>Subject</Span>
          </Label>
        </InputSection>
        <InputSection>
          <TextArea name="message" id="message" />
          <Label htmlFor="message">
            <Span>Message</Span>
          </Label>
        </InputSection>
        <CtaButton text="Send message" id="primary" type="submit" />
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
