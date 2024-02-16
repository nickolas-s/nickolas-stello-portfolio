import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import FooterStyles from '../styles/FooterStyles';

function Footer() {
  return (
    <FooterStyles>
      <a
        href="https://github.com/nickolas-s"
        target="_blank"
        rel="noreferrer"
        alt="Github Icon"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://twitter.com/nickolas_stello"
        target="_blank"
        rel="noreferrer"
        alt="Twitter Icon"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/nickstello"
        target="_blank"
        rel="noreferrer"
        alt="LinkedIn Icon"
      >
        <FaLinkedin />
      </a>
    </FooterStyles>
  );
}

export default Footer;
