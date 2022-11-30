import styled from 'styled-components';

const Input = styled.input`
  border-radius: 3px;
  background-color: #fbf2ff;
  border: 1px solid #450a9b;
  color: initial;
  display: block;
  width: 100%;
  height: 1.5rem;
  &[type='password'] {
    letter-spacing: 0.1rem;
  }
`;

export default Input;
