import styled from 'vue-styled-components';

export const Container = styled.div`
  height: 50px;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
`;

export const List = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0 15px;
`;

export const Item = styled.li`
  float: left;
  display: inline-block;
  line-height: 50px;

  & + ::before {
    padding-right: 5px;
    padding-left: 5px;
    color: #333;
    content: '»';
    opacity: 0.5;
  }

  a {
    font-size: 12px;
    font-weight: 400;
    color: $blue;
    text-decoration: none;

    &:hover {
      color: $lightblue;
      text-decoration: underline;
    }
  }
`;

export const ItemText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: $textColor;
`;

export const Logotipo = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 15px;
  width: 130px;
  height: 26px;
  mask: url('../assets/studioatual.svg') no-repeat;
  background-color: $blue;
  opacity: 0;
  cursor: pointer;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;

  &.show {
    transform: translateX(0%);
    opacity: 0.8;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;
