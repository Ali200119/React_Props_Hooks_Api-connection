import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Employees from './pages/Employees';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/employees' element={<Employees/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;