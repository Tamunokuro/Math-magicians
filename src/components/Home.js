import '../App.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => (
  <div className="hero-container">
    <h1>Welcome to Math Magicians</h1>
    <LoremIpsum p={2} />
  </div>
);

export default Home;
