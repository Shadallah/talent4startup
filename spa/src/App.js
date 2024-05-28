mport React from 'react'
import './App.css';
import Home from './components/Home';
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Form from './components/Form';
import {
	Route,
	Routes,
} from "react-router-dom";


function App() {

  return (

      <div className='App'>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/form' Component={Form}/>
        <Route Component={NotFound}/>
      </Routes>
      </div>
  );
}

export default App;
