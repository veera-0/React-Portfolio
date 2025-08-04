/* eslint-disable no-unused-vars */
import './App.css'
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SkillsPage from './components/pages/SkillsPage';
import AboutPage from './components/pages/AboutPage';
import Badges from './components/pages/Badges';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' Component={Home}/>
          <Route path='/projects' Component={Project}/>
          <Route path='/skills' Component={SkillsPage}/>
          <Route path='/about' Component={AboutPage}/>
          <Route path='/badges' Component={Badges}/>

          <Route
            path="/*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
