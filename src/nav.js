import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin, CiLogout } from 'react-icons/ci';
import './nav.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({searchbtn}) => {
  const [search, setSearch] = useState();

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated} = useAuth0();
  return (
    <>
        <div className='free'>
          <div className='icon'>
          <FaTruckMoving/>
          </div>
          <p>Free Shipping when shopping avove $1000</p>  
        </div>

        <div className="main_header">
          <div className="container">
            <div className="logo">
              <img src="./img/logo.svg" alt="logo" />
            </div>

            <div className="search_box">
              <input type="text" value={search} placeholder='Search Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
              <button onClick={() => searchbtn(search)}>Search</button>
            </div>

            <div className="icon">
            {
              isAuthenticated &&
              (
                <div className="account">
                  <div className="user_icon">
                    <AiOutlineUser/>
                  </div>
                  <p>Hello, {user.name}</p>
                </div>
              )
            }
              
              <div className="second_icon">
                <Link to = "/" className='link'><AiOutlineHeart/></Link>
                <Link to = "/cart" className='link'><BsBagCheck/></Link> 
              </div>
            </div>
          </div>
        </div>


        <div className="header">
          <div className="container">
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                  <Link to="/product" className='link'>Products</Link>
                </li>
                <li>
                  <Link to="/about" className='link'>About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className='link'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="auth">
              {
                isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                :
                <button onClick={() => loginWithRedirect()} ><CiLogin/></button>
              }
              
              
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Nav