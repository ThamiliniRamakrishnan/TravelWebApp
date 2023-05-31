import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleCLick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="Travel_navbar">
        <h1 className="Travel_navbar-logo">Trippy</h1>
        <div className="Travel_navbar-menu_icons" onClick={this.handleCLick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul
          className={
            this.state.clicked
              ? "Travel_navbar-menu active"
              : "Travel_navbar-menu"
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.url}>
                  <i className={item.icon} />
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button type="button">Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
