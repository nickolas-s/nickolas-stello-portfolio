/* eslint-disable react/jsx-props-no-spreading */
import ProjectCard from '../components/ProjectCard';
import ProjectPageStyles from '../styles/ProjectPageStyles';
import projects from '../data/projects';

function ProjectsPage() {
  return (
    <ProjectPageStyles>
      <h1>Projects</h1>
      <section>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </ProjectPageStyles>
  );
}

export default ProjectsPage;
