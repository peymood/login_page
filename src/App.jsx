import { Route, Routes, BrowserRouter } from "react-router-dom"
import NavBar from "./Header/NavBar"
import Login from "./Mainarea/Login"



function App() {

  return (
    <BrowserRouter>
      <div className="yek">
        <NavBar /> 
      </div>
      <Routes>
        <Route path="/login" Component={Login} /> 

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
