import './App.css'
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Register from './pages/register/Register'
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

const currentUser = true;

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}><Outlet /></div>

        <RightBar />
      </div>
    </div>
  )
}

const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to='/login' />
  }
  return children;
}

function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode)

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute><Layout /></ProtectedRoute>
      } >

        <Route path='/' element={<Home />} />

        <Route path='profile/:id' element={<Profile />} />

      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  );
}

export default App;
