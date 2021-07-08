import styled from 'styled-components';
import { colors } from './config';

const FooterStyles = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: ${colors.paragraph};
    font-size: 40px;
    padding: 0 10px;
    line-height: 0;
    transition: all 500ms;

    &:hover {
      color: ${colors.accentColor};
    }
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export default FooterStyles;
