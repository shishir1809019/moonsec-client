import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import BookService from './component/Dashboard/BookService/BookService';
import BookingList from './component/Dashboard/BookingList/BookingList';
import { createContext, useState } from 'react';
import Review from './component/Dashboard/Review/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider>
      <Router>
        <Switch>
          <Route exact path = "/" >
            <Home></Home>
          </Route>
          
          <Route path ="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path = "/bookService">
            <BookService></BookService>
          </Route>
          <Route path = "/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path = "/review">
            <Review></Review>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
