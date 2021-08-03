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
      <div className="wrapper">
        <BioAside />

        <section>
          <article className="bio-wide">
            <p>
              Highly motivated self-taught web developer with solid knowledge of
              HTML, CSS, JavaScript and React seeking to leverage analytical
              thinking, problem solving and strong attention to detail skills
              obtained through 5+ years as Trust Fund Accountant to transition
              to a Front-End Developer position.
            </p>
            <p>
              With a passion for learning, the next steps on the coding journey
              will be to learn TypeScript and Node.js.
            </p>
          </article>

          <article>
            <h2>CERTIFICATES & EDUCATION</h2>
            {education.map((course) => (
              <EducationArticle key={course.id} {...course} />
            ))}
          </article>

          <article>
            <h2>PROFESSIONAL EXPERIENCE</h2>
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
