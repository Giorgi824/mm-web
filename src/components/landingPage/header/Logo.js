import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
const Logo = ({ src }) => {
  return (
    <Link className="company-logo" to="/">
      <LazyLoadImage src={src} />
      <span>my profile</span>
    </Link>
  );
};

export default Logo;
