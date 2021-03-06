import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.scss'
import { SidebarData } from '../../sidebarData';
import {IconContext} from 'react-icons';
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:"white"}}>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active": "nav-menu"} >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {
            SidebarData.map( (item, idx) => {
              return (
                <li key={idx} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default SideBar
