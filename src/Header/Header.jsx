import "./Header.css";
import logo from "../../public/logo.jpeg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h2 className="primary">All Tasks</h2>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
