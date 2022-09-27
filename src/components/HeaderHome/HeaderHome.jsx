import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/components/HeaderHome/HeaderHome.scss';
import { ACCESS_TOKEN, eraseCookie, eraseStore } from '../../utils/tools';

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className='nav-link active' to='/profile'>
        Hello {userLogin.name}
      </NavLink>
    );
  };
  const renderRegisterNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/register'>
          Register
        </NavLink>
      );
    }
    return (
      <a
        className='nav-link'
        href='/login'
        onClick={() => {
          eraseStore();
          eraseCookie(ACCESS_TOKEN);
        }}
      >
        Logout
      </a>
    );
  };
  return (
    <header className='wrapper'>
      <nav className='navbar navbar-expand-sm navbar-dark bg-black'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            <img src='./img/iconBrand.png' alt='iconBrand' />
          </NavLink>
          <button
            className='navbar-toggler d-lg-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavId'
            aria-controls='collapsibleNavId'
            aria-expanded='false'
            aria-label='Toggle navigation'
          />
          <div className='collapse navbar-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav mt-2 mt-lg-0 ms-auto'>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/search'>
                  <div className='nav-search'>
                    <i className='icon-search fa fa-search text-light'></i>
                    Search
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/carts'>
                  <div className='cart-product text-white'>
                    <i className='fa-solid fa-cart-shopping'></i>(1)
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>{renderLoginNavItem()}</li>
              <li className='nav-item active'>{renderRegisterNavItem()}</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='menu-cat container'>
        <ul className='navbar-cat'>
          <li className='nav-item'>
            <NavLink className={'actived'} to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Man</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Woman</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Kid</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Sport</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
