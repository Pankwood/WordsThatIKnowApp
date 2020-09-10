import React from "react";
import PropTypes from "prop-types";
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
  &:empty:not([type="text"]) + ${Label.Text} {
    transform: scale(1) translateY(0);
  }
  &:not(:empty):not([type="text"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  &[value=""] + ${Label.Text} {
    transform: scale(1) translateY(0);
  }
  &:not([value=""]):not([type="textarea"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
`;

function FormField({ label, type, name, value, onChange, register, error }) {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

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
          />
          <Label.Text>{label}</Label.Text>
        </Label>
      </FormFieldWrapper>
    </>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  register: PropTypes.func
};

export default FormField;
