import styled from "@emotion/styled";

export const Form = styled.form`
  padding: 0;
`;

export const NameLabel = styled.label`
  color: #e9e9e9;
  margin-right: 15px;
`;

export const Input = styled.input`
  margin-left: 3px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  transition: border-bottom 300ms ease-in;

  ::placeholder {
    color: #000000;
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #e9e9e9;
  }
`;
export const AddContactBtn = styled.button`
  /* padding: 5px; */
  max-height: 25px;
  margin-left: 10px;
  border: 1px solid #a7a7a7ec;
  border-radius: 5px;
  transition: all 250ms;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e9e9e9;

  &:hover {
    color: #e9e9e9;
    background: linear-gradient(27deg, #cc1092 0%, #3a1092 100%);
    box-shadow: rgb(255, 254, 254) 0px 0px 5px 2px;
  }
`;

export const IconAdd = styled.svg`
  width: 80px;
  height: 80px;
`;
