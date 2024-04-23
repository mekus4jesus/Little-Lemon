import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Page/Main';
import { Nav } from './component/Nav';
import { Form } from './component/Page/BookingPage/BookingForm';
import { Footer } from './component/Footer';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Form />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}
export default App;
