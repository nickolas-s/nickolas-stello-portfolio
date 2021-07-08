import styled from 'styled-components';
import { colors } from './config';

const ProjectPageStyles = styled.div`
  padding: 0px 20px;

  h1 {
    color: ${colors.headline};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    padding-bottom: 20px;
    line-height: normal;
  }

  section {
    display: grid;
    // RAM
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
  }
`;

export default ProjectPageStyles;
