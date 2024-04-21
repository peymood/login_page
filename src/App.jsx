import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Header/NavBar"
import LoginLink from "./Mainarea/LoginLink"



function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar /> 
      <Routes>
        <Route path="/login" Component={LoginLink} /> 
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
