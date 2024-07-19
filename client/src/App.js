import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';

import Qachat from "./components/Qachat.js";
import Home1 from './components/Home1.js';

function App() {
  return (
    <div className="App1  h-[100vh]  flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/qachat" element={<Qachat />} />

        <Route path="/home1" element={<Home1 />} />
        
        <Route
          path="/reset-password/:resetPasswordToken"
          element={<ResetPassword />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
