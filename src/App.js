import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const history = useHistory();

  const handleClick = (e) => {
    console.log('💩');
    console.log(e.target.textContent);
    setCurrentPage(`/${e.target.textContent.toLowerCase()}`);
  };

  useEffect(() => {
    setCurrentPage(history.location.pathname);
  }, [history.location.pathname]);

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header handleClick={handleClick} currentPage={currentPage} />
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage handleClick={handleClick} currentPage={currentPage} />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/resume">
              <ResumePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
