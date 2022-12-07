import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quotes from './Quotes';

const Navbar = () => (
  <div className="header">
    <div className="nav">
      <a className="nav-logo" href={<Home />}>Math Magicians</a>
      <ul className="navbar">
        <li className="nav-items"><Link to="/">Home</Link></li>
        <li className="nav-items"><Link to="/calculator">Calculator</Link></li>
        <li className="nav-items"><Link to="/quotes">Quote</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route />
        <Route />
      </Routes>
    </div>
  </div>
);

export default Navbar;
