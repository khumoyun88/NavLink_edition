import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Router>
        <header>
          <h1>Sehello</h1>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/project'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
