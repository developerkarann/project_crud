import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navabr from './components/Header/Navabr';
import Home from './components/Home/Home';
import EditForm from './components/Home/EditForm';
import AddForm from './components/Home/AddForm';
import SignupForm from './components/Authentication/SignupForm';
import LoginForm from './components/Authentication/LoginForm';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navabr/>
      <Routes>
        <Route exact path='/' element={<LoginForm/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/add' element={<AddForm/>} ></Route>
        <Route path='/edit/:id' element={<EditForm/>} ></Route>
        <Route path='/signup' element={<SignupForm/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
