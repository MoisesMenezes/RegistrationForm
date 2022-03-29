import styled from "styled-components";

interface InputProps {
  isError: boolean;
}

export const Wrapper = styled.div`
  height: 100px;
  label {
    color: #4481eb;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
`;

export const Input = styled.input<InputProps>`
  height: 40px;
  width: 100%;
  display: flex;
  padding-left: 5px;
  border-radius: 4px;
  border: 2px solid #ced4da;
  border: ${(props) => (props.isError ? '2px solid #c1121f' : '2px solid #ced4da')};
`;

export const ErrorMessage = styled.span`
  margin-top: 5px;
  display: block;
  color: #c1121f;
`;