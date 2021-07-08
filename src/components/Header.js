/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import HeaderContainer from '../styles/HeaderStyles';

function Header({ currentPage, handleClick }) {
  return (
    <HeaderContainer>
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo" onClick={handleClick}>
            Nickolas Stello
          </Link>
        </div>
        <div className="links-container">
          <Link
            to="/projects"
            onClick={handleClick}
            className={`${currentPage === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/resume"
            onClick={handleClick}
            className={`${currentPage === '/resume' ? 'active' : ''}`}
          >
            Resume
          </Link>
          {/* <Link
            to="/contact"
            onClick={handleClick}
            className={`${currentPage === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link> */}
        </div>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
