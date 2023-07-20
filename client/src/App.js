import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navabr from './components/Header/Navabr';
import Home from './components/Home/Home';
import EditForm from './components/Home/EditForm';
import AddForm from './components/Home/AddForm';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navabr/>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route path='/add' element={<AddForm/>} ></Route>
        <Route path='/edit/:id' element={<EditForm/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
