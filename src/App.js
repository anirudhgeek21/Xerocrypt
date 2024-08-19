import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import First from './components/first/one';
import Second from './components/second/two';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
