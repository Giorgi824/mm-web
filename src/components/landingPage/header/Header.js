import Logo from "./Logo";
import LandingNav from "./LandingNav";
import { Link } from "react-router-dom";
import LanguageBox from "../../bothComponents/LanguageBox";
const Header = () => {
  return (
    <header bg-color="red">
      <div className="centered-element">
        <span className="burger" data-svg="burgerSvg"></span>
        <nav>
          <Logo src="img/logo.svg" />
          <LandingNav />
        </nav>
        <div className="hd-register">
          <Link to="/authorize" className="authorise">
            ავტორიზაცია
          </Link>
          <Link to="/register" className="register">
            რეგისტრაცია
          </Link>
          <LanguageBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
