import './App.css';
import { Footer } from './component/Footer';
import { Main } from './component/Main';
import { Nav } from './component/Nav';

function App() {
  return (
    <>
    <div className="bodyContainer">
        <Nav/>
        <Main/>
        <Footer/>
    </div>
    </>
  );
}
export default App;
