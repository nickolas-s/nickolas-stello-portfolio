/* eslint-disable react/prop-types */
import { /* FaCode, */ FaLaptopCode } from 'react-icons/fa';
import ProjectCardStyles from '../styles/ProjectCardStyles';

function ProjectCard({
  title,
  description,
  image,
  projectURL /* , codeURL */,
}) {
  return (
    <ProjectCardStyles>
      <img src={image} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="links">
          <a href={projectURL} target="_blank" rel="noreferrer">
            Project
            <FaLaptopCode />
          </a>
          {/* <a href={codeURL} target="_blank" rel="noreferrer">
            Code
            <FaCode />
          </a> */}
        </div>
      </div>
    </ProjectCardStyles>
  );
}

export default ProjectCard;
