import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cat from './components/Cat';
import CottonTopTamarin from './components/CottonTopTamarin';
import Dog from './components/Dog';
import Fox from './components/Fox';
import Panda from './components/Panda';
import Parrot from './components/Parrot';
import Rabbit from './components/Rabbit';
import Squirrel from './components/Squirrel';
import Tiger from './components/Tiger';
import Wolf from './components/Wolf';

import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cat" Component={Cat} />
        <Route path="/cotton" Component={CottonTopTamarin} />
        <Route path="/dog" Component={Dog} />
        <Route path="/fox" Component={Fox} />
        <Route path="/panda" Component={Panda} />
        <Route path="/parrot" Component={Parrot} />
        <Route path="/rabbit" Component={Rabbit} />
        <Route path="/squirrel" Component={Squirrel} />
        <Route path="/tiger" Component={Tiger} />
        <Route path="/wolf" Component={Wolf} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
