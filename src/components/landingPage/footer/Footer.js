import Logo from "../header/Logo";
import AppBtns from "../../staticComponents/AppBtns";
import Button from "../../Button";
import FooterSocial from "./FooterSocial";
import Copyright from "./Copyright";
import ThemeMode from "../../bothComponents/ThemeMode";
const Footer = () => {
  return (
    <footer>
      <div className="centered-element">
        <div className="footer-top">
          <div className="footer-top-left">
            <Logo src="img/logo.svg" />
            <p className="general-gray-text">
              ჩამოტვირთე და გამოიყენე My Profile - ის აპლიკაცია! მართე
              ფინანსები, იყავი მუდამ კავშირზე და ისარგებლე უამრავი სერვისით ერთ
              სივრცეში.
            </p>
            <AppBtns />
            <ThemeMode />
          </div>
          <div className="footer-top-right">
            <Button>
              <span data-svg="sendSvg"></span>
              როგორ მივიდე
            </Button>
          </div>
        </div>
        <div className="footer-bottom">
          <Copyright />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
