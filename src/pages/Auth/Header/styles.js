import styled from 'vue-styled-components';

export const Container = styled.div`
  margin: 20px;
  text-align: center;
`;

export const Logotipo = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  height: 100px;
  background: orange;
  cursor: pointer;

  img {
    display: block;
    height: 100%;
  }
`;

export const Titulo = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Subtitle = styled.h3`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.5;
`;
