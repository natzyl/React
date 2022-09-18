import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/context';

const NavBar = () => {
  const { setOpenModal, isLoginUser, setIsLoginUser } = useContext(Context);
  const logout = () => {
    localStorage.clear();
    setIsLoginUser(false);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        {isLoginUser ?
      <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="main">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="posts">
              Posts
            </Link>
          </li>
        </ul>
        <button className="btn btn-primary" onClick={() => logout()}>
          LogOut
        </button>
      </>  
      : <Link to="login" className="btn btn-primary" onClick={() => setOpenModal(true)}>
      LogIn
    </Link>
      }
        
      </div>
    </nav>
  );
};

export default NavBar;
