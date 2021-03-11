import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [links] = useState([
    { id: 1, title: "home", href: "/", className: "nav-link" },
    { id: 2, title: "classes", href: "/", className: "nav-link" },
    { id: 3, title: "coaches", href: "/", className: "nav-link" },
    { id: 4, title: "blog", href: "/", className: "nav-link" },
    { id: 5, title: "contacts", href: "/", className: "nav-link" },
  ]);
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="">ironmass</a>
        </div>
        <ul className={`nav-list ${toggle && "active"}`}>
          {links.map((link) => {
            return (
              <li className="nav-item" key={link.id}>
                <a className={link.className} href={link.href}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="menu__toggle">
          <FaBars className="icon" onClick={() => setToggle(!toggle)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
