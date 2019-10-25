import styled from 'vue-styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.div`
  float: right;
  width: calc(100% - 40px);
  height: 100%;
  transition: width 0.3s ease-in-out;

  &.openned {
    width: calc(100% - 220px);
    transition: width 0.3s ease-in-out;
  }
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  height: calc(100% - 50px);
  padding: 15px;
  overflow-y: auto;
  align-items: stretch;
  justify-items: stretch;
`;
