import styled from 'vue-styled-components';

export const Container = styled.div`
  position: relative;
  float: left;
  width: 40px;
  height: 100%;
  background: #ffffff;
  transition: width 0.3s ease-in-out;
  overflow: hidden;

  &.openned {
    width: 220px;
    transition: width 0.3s ease-in-out;
  }
`;

export const Head = styled.div`
  position: relative;
  width: 220px;
  height: 50px;
  background: #ccc;
`;
