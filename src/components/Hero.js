/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import HeroStyles from '../styles/HeroStyles';

function Hero({ currentPage, handleClick }) {
  return (
    <HeroStyles>
      <section>
        <div className="info-container">
          <h1>Data Analyst</h1>
          <p>
            Hi I'm Nick! I am passionate about data analysis and leveraging my
            problem-solving skills to derive insights from data. Currently open
            to opportunities.
          </p>
          <p>
            Check out my{' '}
            <span>
              <Link
                to="/projects"
                onClick={handleClick}
                className={`${currentPage === '/projects' ? 'active' : ''}`}
              >
                projects
              </Link>
            </span>{' '}
            and{' '}
            <span>
              <a
                href="mailto:stellonickolas@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Let's Connect!
              </a>
            </span>
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dnfecsurp/image/upload/v1624719549/portfolio/profile-pic-square_upbjro.jpg"
            alt="profile pic"
          />
        </div>
      </section>
    </HeroStyles>
  );
}

export default Hero;
