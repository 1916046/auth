import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './components/Signup';
import LoginForm from './components/Login';

function App() {
  return (
  
      <> 
      <BrowserRouter>    
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/login" element ={<LoginForm />} />
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
