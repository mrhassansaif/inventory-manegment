import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import SignInSide from './Components/Auth/SignupSignin/SignIn';
import SignUpSide from './Components/Auth/SignupSignin/SignUp';
import DashBoard from './Components/Dashboard/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Auth />} />
        <Route path='dashboard' element = {<DashBoard />} />
        <Route path='signup' element = {<SignUpSide />} />
        <Route path='signin' element = {<SignInSide />} />
      </Routes>
    </BrowserRouter>
    // <Auth />
  );
}

export default App;
