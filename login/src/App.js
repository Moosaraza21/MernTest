import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Login from './Components/Login'
import Home from './Components/Home'
import Registration from './Components/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Register" element={<Registration />} />
      </Routes>
    </Router>
      
  );
}

export default App;
