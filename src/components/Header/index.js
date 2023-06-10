// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" className="hamburg-button">
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-context"
      >
        {close => (
          <div className="close-button-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="navList">
              <li className="nav-item">
                <Link to="/" className="link" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="nav-item-context">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="link" onClick={() => close()}>
                  <BsInfoCircleFill size="36" />
                  <p className="nav-item-context">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
