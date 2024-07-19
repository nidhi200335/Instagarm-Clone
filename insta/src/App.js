
import './App.css';
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login" ; 
 import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Routes, Route } from 'react-router-dom';
 import Createpost from "./components/Createpost";
function App() {
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
       // <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>

        <Route path="/createpost" element={<Createpost/>}></Route>
 

      </Routes>
    </div>
    
      
  );
}

export default App;
