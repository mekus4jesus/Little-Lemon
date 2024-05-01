import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './component/Page/Main';
import { Nav } from './component/Nav';
import { Footer } from './component/Footer';
import Main from './component/Page/ReserveTable/Main';
import ConfirmedBooking from './component/Submission/sucess';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation()
  const isConfirmedPage = location.pathname === '/confirmed'
  return (
    <>
       {!isConfirmedPage && <Nav />}

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Main />}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      {!isConfirmedPage && <Footer />}

    </>
  );
}
export default App;
