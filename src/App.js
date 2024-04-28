import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Page/Main';
import { Nav } from './component/Nav';
import { Footer } from './component/Footer';
import Main from './component/Page/ReserveTable/Main';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Main />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}
export default App;
