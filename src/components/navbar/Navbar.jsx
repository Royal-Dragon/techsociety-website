import { useState } from "react";
import "./header.css";

export default function Navbar() {
  const [isNav, setNav] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Tech-Society
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setNav(!isNav);
        }}
      >
        {!isNav ? (
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/?size=512&id=364&format=png"
            alt="menu--v6"
          />
        ) : (
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
            alt="multiply"
          />
        )}
      </button>
      <div
        className={
          isNav ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/chapters">Chapters</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

