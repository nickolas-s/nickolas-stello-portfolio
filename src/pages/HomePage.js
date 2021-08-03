/* eslint-disable react/prop-types */
import Hero from '../components/Hero';

function HomePage({ currentPage, handleClick }) {
  return <Hero handleClick={handleClick} currentPage={currentPage} />;
}

export default HomePage;
