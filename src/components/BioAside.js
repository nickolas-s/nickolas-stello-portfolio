import {
  FaRegEnvelope,
  FaRegAddressBook,
  FaLaptopCode,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

function BioAside() {
  return (
    <aside className="container">
      <div className="container-img">
        <img
          src="https://res.cloudinary.com/dnfecsurp/image/upload/v1624719549/portfolio/profile-pic-square_upbjro.jpg"
          alt="profile pic"
        />
      </div>
      <div className="container-name">
        <h2>NICKOLAS STELLO</h2>
        <p>FRONT-END DEVELOPER</p>
      </div>
      <div className="container-bio">
        <p>
          Highly motivated self-taught web developer with solid knowledge of
          HTML, CSS, JavaScript and React seeking to leverage analytical
          thinking, problem solving and strong attention to detail skills
          obtained through 5+ years as Trust Fund Accountant to transition to a
          Front-End Developer position.
        </p>
        <br />
        <p>
          With a passion for learning, the next steps on the coding journey will
          be to learn TypeScript and Node.js.
        </p>
      </div>
      <hr />
      <div className="container-tech">
        <h2>Tech Skills</h2>
        <div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="HTML 5 Icon"
            />
            <span className="tooltiptext">HTML 5</span>
          </div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="CSS 3 Icon"
            />
            <span className="tooltiptext">CSS 3</span>
          </div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="JavaScript Icon"
            />
            <span className="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="React Icon"
            />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/sass.png"
              alt="Sass Icon"
            />
            <span className="tooltiptext">Sass</span>
          </div>
          <div className="tooltip">
            <img
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="Git Icon"
            />
            <span className="tooltiptext">Git</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-soft">
        <h2>Soft Skills</h2>
        <ul>
          <li>Teamwork</li>
          <li>Open-minded</li>
          <li>Problem Solving</li>
          <li>Effective Communication</li>
        </ul>
      </div>
      <hr />
      <div className="container-contact">
        <h2>Contact</h2>
        <p>
          <FaRegEnvelope className="icon" />
          <a
            href="mailto:stellonickolas@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            stellonickolas@gmail.com
          </a>
        </p>
        <p>
          <FaLaptopCode className="icon" />
          <a href="https://nickstello.dev" target="_blank" rel="noreferrer">
            nickstello.dev
          </a>
        </p>
        <p>
          <FaRegAddressBook className="icon" />
          Toronto, ON
        </p>
      </div>
      <hr />
      <div className="container-social">
        <h2>Social Media</h2>
        <p>
          <FaLinkedinIn className="icon" />
          <a
            href="https://www.linkedin.com/in/nickstello"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nickstello
          </a>
        </p>
        <p>
          <FaTwitter className="icon" />
          <a
            href="https://twitter.com/nickolas_stello"
            target="_blank"
            rel="noreferrer"
          >
            twitter.com/nickolas_stello
          </a>
        </p>
        <p>
          <FaGithub className="icon" />
          <a
            href="https://github.com/nickolas-s"
            target="_blank"
            rel="noreferrer"
          >
            github.com/nickolas-s
          </a>
        </p>
      </div>
    </aside>
  );
}

export default BioAside;
