import './App.css';
import {Route,Routes} from 'react-router-dom'
import Analysis from './components/Analysis';
import Enhacement from './components/Enhacement';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Meditation from './components/Meditation';
import Games from './components/Games';
import Ambiance from './components/Ambiance';


import './components/Antodo.css';

function App() {
  return (
    <div className="App ">
     <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/enhancement" element={<Enhacement/>}>
          <Route path="meditation" element={<Meditation/>} ></Route>
          <Route path="games" element={<Games/>}></Route>
          <Route path="Ambiance" element={<Ambiance/>}></Route>
        </Route>
        <Route path="/analysis" element={<Analysis/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
