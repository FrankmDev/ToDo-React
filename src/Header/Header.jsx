import "./Header.css";
import logo from "../../public/logo.jpeg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <div className="header-header">
          <h2 className="primary">All Tasks</h2>
          <span className="stats">1 of 5 tasks</span>
        </div>

        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
