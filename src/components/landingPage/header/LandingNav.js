import { Link } from "react-router-dom";
const LandingNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">მთავარი</Link>
      </li>
      <li>
        <Link to="info">ინფორმაცია</Link>
      </li>
      <li>
        <Link to="news">სიახლეები</Link>
      </li>
      <li>
        <Link to="contact">კონტაქტი</Link>
      </li>
    </ul>
  );
};

export default LandingNav;
