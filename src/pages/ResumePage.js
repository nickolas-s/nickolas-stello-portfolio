/* eslint-disable react/jsx-props-no-spreading */
import BioAside from '../components/BioAside';
import ExperienceArticle from '../components/ExperienceArticle';
import EducationArticle from '../components/EducationArticle';
import ResumePageStyles from '../styles/ResumePageStyles';
import experiences from '../data/experience';
import education from '../data/education';

function ResumePage() {
  return (
    <ResumePageStyles>
      <h1>Resume</h1>
      <div className="wrapper">
        <BioAside />

        <section>
          <article>
            <h2>EDUCATION</h2>
            {education.map((course) => (
              <EducationArticle key={course.id} {...course} />
            ))}
          </article>

          <article>
            <h2>EXPERIENCE</h2>
            {experiences.map((job) => (
              <ExperienceArticle key={job.id} {...job} />
            ))}
          </article>
        </section>
      </div>
    </ResumePageStyles>
  );
}

export default ResumePage;
