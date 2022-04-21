import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Doc from './pages/Doc'
import Voting from './pages/voting'
import Neighborhoods from './pages/neighborhoods'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/profile" element={ <Profile /> }/>
          <Route path="/settings" element={ <Settings /> }/>
          <Route path="/documentation" element={ <Doc /> }/>
          <Route path="/voting" element={ <Voting /> }/>
          <Route path="/neighborhoods" element={ <Neighborhoods /> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;