import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Share/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/Share/LogIn';
import SignUp from './Pages/Share/SignUp';
import Purchase from './Pages/Home/Purchase';
import PrivateRoute from './Pages/Share/PrivateRoute';
import NotFound from './Pages/Share/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/log-in" element={<LogIn></LogIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/purchase/:id" element={
          <PrivateRoute>
          <Purchase></Purchase>
          </PrivateRoute>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
