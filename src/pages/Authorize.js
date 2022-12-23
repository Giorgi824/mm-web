import Logo from "../components/landingPage/header/Logo";

const Authorise = () => {
  // <Logo src="img/logo.svg" />
  return (
    <div className="authorize-page centered-element">
      <div className="authorize-content">
        <Logo src="img/logo.svg" />
        <h1>შეუზღუდავი ონლაინ შესაძლებლობები</h1>
        <span>Money Movers</span>
      </div>
      <form className="authorize-form">
        <h2>ავტორიზაცია</h2>
        <div className="authorize-form-row">
          <label htmlFor="mail-input">ელ.ფოსტა</label>
          <div className="authorize-end">
            <div className="authorize-phone">
              <span className="authorize-phone-result">
                <span className="flag"></span>
                <span className="digits">+995</span>
                <span className="arrow" data-svg="arrowSvg"></span>
              </span>
              <div className="phone-drop"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authorise;
