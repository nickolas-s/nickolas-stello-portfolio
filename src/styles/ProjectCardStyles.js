import styled from 'styled-components';
import { colors } from './config';

const ProjectCardStyles = styled.article`
  background-color: ${colors.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 300ms;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  }

  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
  }

  .info {
    padding: 20px 10px;
    color: ${colors.headline};

    h2 {
      font-weight: 400;
      line-height: normal;
      color: ${colors.paragraph};
      padding-bottom: 10px;
      font-size: 20px;
    }

    .links {
      display: flex;
      justify-content: space-evenly;
      padding-top: 10px;

      a {
        color: ${colors.accentColor};
        border: 1px solid ${colors.accentColor};
        padding: 5px 10px;
        border-radius: 3px;
        line-height: normal;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 200ms;

        &:hover {
          color: ${colors.paragraph};
          background-color: ${colors.accentColor};
        }
      }
    }
  }

  @media (max-width: 584px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default ProjectCardStyles;
