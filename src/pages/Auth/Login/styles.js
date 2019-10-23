import styled from 'vue-styled-components';

export const Container = styled.form`
  position: absolute;
  width: 100%;
  padding: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    padding-left: 5px;
    font-weight: 600;
  }
`;

export const InputControl = styled.input`
  margin: 0;
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  color: #06c;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }

  &.inline {
    float: left;
    width: calc(100% - 40px);
    border-radius: 5px 0 0 5px;
  }
`;

export const BtnLogin = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px 25px;
  font-size: 16px;
  color: #ffffff;
  line-height: normal;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #06c;
  cursor: pointer;

  &:hover {
    background: #0e86f5;
  }

  &:active {
    background: #1362ab;
  }
`;
