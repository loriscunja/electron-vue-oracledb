import styled from 'vue-styled-components';

export const Container = styled.div`
  width: 700px;
  height: 600px;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const List = styled.ul`
  position: relative;
`;

export const Item = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
