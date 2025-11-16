import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter, Route, Routes } from "react-router";


function App() {

  const Layout = () => {
    return (
      <div></div>
    )
  }
  return (

    <Routes>
      <Route
        path='/' element={<Login />}>
      </Route>
      <Route
        path='/login' element={<Login />}>
      </Route>
      <Route
        path='/register' element={<Register />}>
      </Route>



    </Routes>


  )
}

export default App
