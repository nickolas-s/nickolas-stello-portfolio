import styled from 'styled-components';
import { colors } from './config';

const ResumeArticleStyles = styled.div`
  color: ${colors.headline};

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    h3 {
      color: ${colors.accentColor};
      font-weight: normal;
    }

    small {
      color: ${colors.paragraph};

      a {
        color: inherit;

        &:hover {
          border-bottom: 1px solid;
        }
      }
    }

    p {
      line-height: 1.8;
    }
  }

  p {
    padding-bottom: 10px;
    padding-left: 15px;
    line-height: 1.5;
  }

  ul {
    li {
      list-style-type: circle;
      margin-left: 20px;
      font-size: 14px;

      &:last-of-type {
        padding-bottom: 15px;
      }
    }
  }

  @media (max-width: 550px) {
    header {
      flex-direction: column;
      padding-bottom: 0px;

      p {
        padding: 0px;
      }
    }
  }
`;

export default ResumeArticleStyles;
