import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App=()=> {
  const user = true;
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={user ? <Navigate to="/"/> :<Login/> }/>
        <Route path='/post/:id' element ={user ? <Post/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
