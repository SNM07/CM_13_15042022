import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUser } from "../actions/signOutAction";

function NavBar() {
  const userLogin = useSelector((state) => state.signInReducer);
  let isConnected = userLogin.connected;
  const firstname = userLogin.firstName;
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isConnected ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <FontAwesomeIcon icon={faCircleUser} />
                {firstname}
              </Link>

              <button className="sign-in-button" onClick={signOutUser()}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </button>
            </>
          ) : (
            <Link className="sign-in-button" to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
