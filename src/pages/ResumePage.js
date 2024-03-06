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
              Solutions-oriented and customer-focused analyst with solid
              knowledge of Python, SQL, and Tableau and over 10 years of
              business experience seeking to leverage excellent analytical and
              attention to detail skills. With a passion for continuous
              learning, well suited to transition to a Data Analyst position.
            </p>
            {/* <p>
              With a passion for learning, the next steps on the coding journey
              will be to learn TypeScript and Node.js.
            </p> */}
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
