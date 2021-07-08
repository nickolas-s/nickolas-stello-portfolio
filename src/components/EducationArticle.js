/* eslint-disable react/prop-types */
import { FaExternalLinkAlt } from 'react-icons/fa';
import ResumeArticleStyles from '../styles/ResumeArticleStyles';

function EducationArticle({ institution, topic, date, description, link }) {
  return (
    <ResumeArticleStyles>
      <header>
        <div>
          <h3>{topic}</h3>
          <small>
            {institution}{' '}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                ( credentials <FaExternalLinkAlt style={{ fontSize: '10px' }} />{' '}
                )
              </a>
            )}
          </small>
        </div>
        <p>{date}</p>
      </header>
      {description && <p>{description}</p>}
    </ResumeArticleStyles>
  );
}

export default EducationArticle;
