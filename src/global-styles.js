import { injectGlobal } from 'vue-styled-components';

export default injectGlobal`
  @import './assets/opensans/styles.css';
  /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    padding-top: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: #f5f5f5;
    -webkit-font-smoothing: antialised;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;
