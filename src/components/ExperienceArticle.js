/* eslint-disable react/prop-types */
import ResumeArticleStyles from '../styles/ResumeArticleStyles';

function ExperienceArticle({
  company,
  position,
  date,
  accomplishment,
  responsabilities,
}) {
  return (
    <ResumeArticleStyles>
      <header>
        <div>
          <h3>{position}</h3>
          <small>{company}</small>
        </div>
        <p>{date}</p>
      </header>
      {accomplishment && (
        <p>
          <em>Key Accomplishment:</em> {accomplishment}
        </p>
      )}
      {responsabilities && (
        <ul>
          {responsabilities.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      )}
    </ResumeArticleStyles>
  );
}

export default ExperienceArticle;
