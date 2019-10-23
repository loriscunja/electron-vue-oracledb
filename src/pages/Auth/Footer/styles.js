import styled from 'vue-styled-components';

export const Container = styled.div`
  margin: 20px;
  width: calc(100% - 40px);
`;

export const Support = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export const TitleText = styled.h1`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #06c;

  svg {
    margin-right: 7px;
  }
`;

export const DescriptionText = styled.p`
  margin: 10px 0 0 0;
  font-size: 12px;
  color: #777;
  line-height: 18px;
`;

export const PhoneText = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: darkgreen;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:hover {
    color: green;
  }

  &:active {
    color: darkgreen;
  }
`;

export const SiteText = styled.span`
  margin: 0;
  font-size: 12px;
  color: #06c;
  cursor: pointer;

  &:hover {
    color: #c70000;
    text-decoration: underline;
  }

  &:active {
    color: darkblue;
  }
`;
