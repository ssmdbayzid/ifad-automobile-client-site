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
import Profile from './Pages/Profile.js/Profile';
import Review from './Pages/Review/Review';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/order" element={ <Order></Order> }></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path="/log-in" element={<LogIn></LogIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/purchase/:id" element={
          <PrivateRoute>
          <Purchase></Purchase>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
          <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
