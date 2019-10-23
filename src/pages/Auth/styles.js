import styled from 'vue-styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Panel = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Sidebar = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const SidebarMain = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
`;
