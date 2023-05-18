import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LabWorkStudent } from './components/LabWorkStudent/LabWorkStudent';
import Home from './pages/Home';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/student' Component={StudentPage} />
        <Route path='/teacher' Component={TeacherPage} />
        <Route path='/task/:id' Component={LabWorkStudent} />
      </Routes>
    </div>
  )
}

export default App;
