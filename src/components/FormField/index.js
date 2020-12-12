import React from "react";
import styled from "styled-components";

const ErrorSpan = styled.span`
color: #2a7ae4;
display: inline;
`;

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 67px;
  } 

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (min-width: 801px) and (max-width: 1399px) {
    width: 45%;
  }

  @media (min-width: 1400px) {
    width: 33%;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: var(--blackLighter);
  color: #f5f5f5;
  display: block;
  width: 100%;
  /* max-width: 35vmax; */
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--blackLighter);

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  /* &:empty:not([type="text"]) + ${Label.Text} {
    transform: scale(1) translateY(0);
  } */
  &:not(:empty):not([type="text"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  &[value=""] + ${Label.Text} {
    transform: scale(1) translateY(0);
  }
  &:not([value=""]):not([type="textarea"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #f5f5f5;
    -webkit-box-shadow: 0 0 0 1000px var(--blackLighter) inset;
    box-shadow: 0 0 0 1000px var(--blackLighter) inset;
    border-top-color: var(--blackLighter);
    transition: background-color 0s 50000s;
  }
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #f5f5f5;
    -webkit-box-shadow: 0 0 0 1000px var(--blackLighter) inset;
    box-shadow: 0 0 0 1000px var(--blackLighter) inset;
    border-top-color: var(--blackLighter);
    transition: background-color 0s 50000s;
  }
`;

const VisibleToggle = styled.div`
    top: 37%;
    right: 20px;
    position: absolute;
`;

function FormField({ label, type, name, value, onChange, register, error, passwordFieldIndex }) {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

  const togglePasswordVisiblity = (() => {

    const inputNameStartWithPassword = document.querySelectorAll("[name^=password]");
    const isTypePassword = inputNameStartWithPassword[passwordFieldIndex].type === "password";
    inputNameStartWithPassword[passwordFieldIndex].setAttribute('type', (isTypePassword) ? 'text' : 'password');
    document.getElementById(`eye${passwordFieldIndex}`).className = (isTypePassword) ? 'fas fa-eye-slash' : 'fas fa-eye';

  });

  return (
    <>
      <ErrorSpan>{error}</ErrorSpan>
      <FormFieldWrapper>
        <Label>
          <Input
            as={tag}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            ref={register}
            passwordFieldIndex={passwordFieldIndex}
          />
          <Label.Text>{label}</Label.Text>
          {type === "password" && <VisibleToggle><i id={`eye${passwordFieldIndex}`} onClick={togglePasswordVisiblity} className='fas fa-eye'></i></VisibleToggle>}
        </Label>
      </FormFieldWrapper>
    </>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
};

export default FormField;
