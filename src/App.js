import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Page/Main';
import { BookingPage } from './component/Page/reservation';
import { Nav } from './component/Nav';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;
