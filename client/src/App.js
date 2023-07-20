import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navabr from './components/Header/Navabr';
import Home from './components/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navabr/>
      <Home/>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
