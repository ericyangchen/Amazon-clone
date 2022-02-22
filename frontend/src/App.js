import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
