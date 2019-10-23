import styled from 'vue-styled-components';

export const Container = styled.form`
  position: absolute;
  width: 100%;
  padding: 30px;
`;

export const Message = styled.p`
  display: block;
  margin-bottom: 10px;
  font-size: 13px;
  color: #aaa;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  .btn-voltar {
    display: block;
    width: 100%;
    margin: 0;
    padding: 8px 0;
    font-size: 14px;
    color: #666666;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    background: #f5f5f5;
    cursor: pointer;

    &:hover {
      background: #ffffff;
    }

    &:active {
      background: #e5e5e5;
    }
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

export const BtnEnviar = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #ffffff;
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
