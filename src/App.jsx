import { Home, Login, Profile, Register } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/safak" element={<Profile />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App