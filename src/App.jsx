/* eslint-disable no-unused-vars */
import './App.css'
import AboutPage from './components/pages/SkillsPage';
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SkillsPage from './components/pages/SkillsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' Component={Home}/>
          <Route path='/projects' Component={Project}/>
          <Route path='/about' Component={SkillsPage}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
