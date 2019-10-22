import styled from 'vue-styled-components';

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-items: center;
`;

export const Panel = styled.div`
  display: grid;
  width: 1000px;
  height: 600px;
  grid-template-columns: 70% 30%;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Sidebar = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 50% 25%;
  background: #ffffff;
`;
