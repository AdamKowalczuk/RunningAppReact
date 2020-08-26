import React, { useState } from "react";
import { Link } from "@reach/router";

function ResponsiveNavigation({
  background,
  hoverBackground,
  linkColor,
  navLinks,
  logo,
  colorText,
}) {
  const [navOpen, setNavOpen] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <nav className="responsive-toolbar" style={{ background: background }}>
      <ul
        style={{ background: background }}
        className={navOpen ? "active" : ""}
      >
        <figure
          className="image-logo"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <img src={logo} height="40px" width="40px" alt="toolbar-logo" />
        </figure>
        {navLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => {
              setHoverIndex(index);
            }}
            onMouseLeave={() => {
              setHoverIndex(-1);
            }}
            style={{
              background: hoverIndex === index ? hoverBackground || "#999" : "",
            }}
          >
            <Link
              to={link.path}
              style={{
                color: hoverIndex === index ? colorText || "#999" : "",
              }}
            >
              {" "}
              {link.text}
              <i
                className={link.icon}
                style={{
                  color: hoverIndex === index ? colorText || "#999" : "",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResponsiveNavigation;
