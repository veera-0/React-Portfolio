/* eslint-disable no-unused-vars */
import './App.css'
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' Component={Home}/>
          <Route path='/projects' Component={Project}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
