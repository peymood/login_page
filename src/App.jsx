import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Header/NavBar"
import Login from "./Header/Login"
import SignUp from "./Header/SignUp"


function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar /> 
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
