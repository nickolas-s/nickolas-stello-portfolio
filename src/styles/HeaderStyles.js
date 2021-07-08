import styled from 'styled-components';
import { colors, base } from './config';

const HeaderContainer = styled.header`
  /* font-size: calc(5px + 2vmin); */
  color: ${colors.headline};
  max-width: ${base.websiteWidth};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .logo-container {
      .logo {
        font-size: 50px;
        color: ${colors.paragraph};
        font-family: ${base.fontLogo};
        text-shadow: 2px 2px 2px ${colors.accentColor};
        line-height: normal;
        transition: all 500ms;

        &:hover {
          text-shadow: 4px 4px 6px ${colors.accentColor};
          transform: scale(1.1);
        }
      }
    }

    .links-container {
      a {
        padding: 10px;
        color: inherit;
        transition: all 500ms;
        font-weight: 300;

        &:hover {
          /* color: #94a1b2; */
          color: ${colors.accentColor};
        }
      }
      .active {
        color: ${colors.accentColor};
      }
    }
  }

  @media (max-width: 550px) {
    nav {
      flex-direction: column;

      .logo-container {
        padding-bottom: 20px;
      }
    }
  }
`;

export default HeaderContainer;
