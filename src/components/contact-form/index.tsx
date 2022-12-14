import { down, up } from "styled-breakpoints";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useRef } from "react";

import SectionTitle from "../section-title/SectionTitle";
import Button from "../button/Button";

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

export const InputSection = styled.div`
  ${down("tablet")} {
    width: 100%;
  }

  ${up("tablet")} {
    width: 560px;
  }

  position: relative;

  padding: 10px 0px;
`;

export const Label = styled.label`
  align-self: flex-start;

  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.lightGray};

  pointer-events: none;

  border-bottom: 1px solid ${({ theme }) => theme.colors.font};

  overflow: hidden;

  &::after {
    content: "";

    position: absolute;
    left: 0px;
    bottom: -1px;

    height: 100%;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.font};

    transform: translateX(-100%);
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0px;

  transition: all 0.2s ease;
`;

export const Input = styled.input.attrs(() => ({
  autoComplete: "off",
  required: true,
}))`
  width: 100%;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.font.families.paragraph};

  padding-top: 20px;
  border: none;
  outline: none;

  &:focus + ${Label} ${Span}, &:valid + ${Label} ${Span} {
    transform: translateY(-190%);
    font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  }

  &:focus + ${Label}::after, &:valid + ${Label}::after {
    transform: translateX(0%);
  }

  &:not(:focus):invalid {
    color: ${({ theme }) => theme.colors.bg};
  }
`;

export const TextArea = styled.textarea.attrs(() => ({
  autoComplete: "off",
  required: true,
  spellcheck: true,
}))`
  width: 100%;
  height: 100px;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.font.families.paragraph};

  margin-top: 15px;
  padding-top: 80px;
  border: none;
  outline: none;
  resize: none;

  &:focus + ${Label} ${Span}, &:valid + ${Label} ${Span} {
    transform: translateY(-700%);
    font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  }

  &:focus + ${Label}::after, &:valid + ${Label}::after {
    transform: translateX(0%);
  }
`;
