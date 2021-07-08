import HeroStyles from '../styles/HeroStyles';

function Hero() {
  return (
    <HeroStyles>
      <section>
        <div className="info-container">
          <p>Hi! I'm Nickolas Stello</p>
          <p>I'm a Frontend developer based in Mississauga, Canada.</p>
          <p>Currently open to opportunities.</p>
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
