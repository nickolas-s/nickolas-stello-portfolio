import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegAddressBook,
  FaLaptopCode,
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
        <p>FRONTEND DEVELOPER</p>
      </div>
      <div className="container-bio">
        <h2>Bio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam
          sem fringilla ut morbi tincidunt. Quis risus sed vulputate odio. Eget
          aliquet nibh praesent tristique magna sit. Vivamus arcu felis bibendum
          ut tristique. Leo duis ut diam quam.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo
          leo, tincidunt in volutpat mattis, scelerisque tincidunt tellus.
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
          <FaPhoneAlt className="icon" />
          <a href="tel:+1-647-993-8877">+1 (647) 993-8877</a>
        </p>
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
          <FaRegAddressBook className="icon" />
          Mississauga, ON
        </p>
        <p>
          <FaLaptopCode className="icon" />
          <a
            href="https://nickolas-stello.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            nickstello.ca
          </a>
        </p>
      </div>
    </aside>
  );
}

export default BioAside;
