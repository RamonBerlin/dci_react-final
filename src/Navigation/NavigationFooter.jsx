import { NavLink } from "react-router-dom";
import "../Styles/App.css";

const NavigationFooter = () => {
  const items = [
    { name: "Impressum", to: "/impressum" },

    { name: "Contact", to: "/contact" },
  ];
  return (
    <nav className="footer">
      <ul>
        <li>
          <ul>
            <li className="copyrightsign copyright">©</li>
            <li className="copyright"> by Ramon Mitra</li>
          </ul>
        </li>
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

export default NavigationFooter;
