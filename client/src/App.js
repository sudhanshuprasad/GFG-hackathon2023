import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment'
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Appointment />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Appointment />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
