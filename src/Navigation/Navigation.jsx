import { NavLink } from "react-router-dom";
import "../Styles/App.css";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "AboutTeam", to: "/about-team" },
    { name: "CharSheet", to: "/char-sheet" },
  ];
  return (
    <nav className="nav-container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
