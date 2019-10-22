import styled from 'vue-styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 99;
`;

export const Boxes = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
`;

export const Box = styled.div`
  position: absolute;
  width: 32%;
  height: 32%;
  border-radius: 50%;
  animation: spin 2s ease infinite;

  &:first-child {
    background: #fa5667;
    animation-delay: -1.5s;
  }
  &:nth-child(2) {
    background: #7a45e5;
    animation-delay: -1s;
  }
  &:nth-child(3) {
    background: #1b91f7;
    animation-delay: -0.5s;
  }
  &:last-child {
    background: #fac24c;
  }

  @keyframes spin {
    0%,
    100% {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%, 160%);
    }
    75% {
      transform: translate(0, 160%);
    }
  }
`;
