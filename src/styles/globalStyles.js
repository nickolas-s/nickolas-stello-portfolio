import { createGlobalStyle } from 'styled-components';
import { colors, base } from './config';

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: ${base.fontStack};
  background-color: ${colors.backgroundColor};
  height: 100vh;
  line-height: 1.8;
}

#root {
  height: 100%;
}

a {
  text-decoration: none;
}

.wrapper {
  max-width: ${base.websiteWidth};
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 5;
  }
}
`;

export default GlobalStyles;
