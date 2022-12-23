import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BoxListItem from "./BoxListItem";
const BoxList = (props) => {
  return (
    <div>
      {props.cond ? (
        <span>
          <LazyLoadImage src={props.src} />
        </span>
      ) : (
        <>
          <div className="hovered-boxes">
            <BoxListItem
              icon={"lampSvg"}
              title={"test1"}
              text={"sadsad"}
              smallIcon={"arrowSvg"}
            >
              {props.children}
            </BoxListItem>
          </div>
        </>
      )}
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
