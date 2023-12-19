import Navbar from "./Navbar";
import AlreadyRegistered from "./pages/AlreadyRegistered";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alreayregistered" element={<AlreadyRegistered />} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
