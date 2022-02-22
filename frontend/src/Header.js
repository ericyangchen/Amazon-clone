import './Header.css';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useStateValue } from './StateProvider';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { auth } from './firebase';

function Header() {
  const [{ cart, user }] = useStateValue();

  const handleSignInOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Sign out successfully
          console.log('Sign out successfully');
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="/amazon-logo-white.png"
          alt="amazon-logo-white"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" placeholder="Search Items" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          {/* redirect to sign in when no user is logged in */}
          <div className="header-option" onClick={handleSignInOut}>
            <span className="header-option-line-1">Hello</span>
            <span className="header-option-line-2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line-1">Return</span>
          <span className="header-option-line-2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-1">Your</span>
          <span className="header-option-line-2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingCartIcon className="header-option-basket-icon" />
            <span className="header-option-line-2 header-option-basket-count">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;