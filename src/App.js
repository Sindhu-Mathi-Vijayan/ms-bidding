import React from 'react';
import { Home } from './client/component/Home';
import NavBar from './client/component/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './client/component/Login';
import SignUp from './client/component/signup';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
