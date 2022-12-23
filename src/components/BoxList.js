import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
const BoxList = (props) => {
  return (
    <div>
      <span>
        <LazyLoadImage src={props.src} />
      </span>
      <div className="boxes-content">
        <span
          data-svg={props.icon}
          className={`box-icon ${props.indClass}`}
        ></span>
        <div className="box-title">{props.title}</div>
        <p>{props.text}</p>
        <Button>{props.btn}</Button>
      </div>
    </div>
  );
};

export default BoxList;
