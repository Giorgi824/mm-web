import { useState } from "react";
import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BoxSingle from "./BoxSingle";
import svges from "../svges";
import BoxesContent from "./BoxesContent";
const BoxList = (props) => {
  const testing = [
    {
      icon: "lampSvg",
      title: "test 1",
      text: "lorem 1",
      smallIcon: "arrowSvg",
    },
    {
      icon: "lampSvg",
      title: "test 2222",
      text: "lorem 2",
      smallIcon: "arrowSvg",
    },
    {
      icon: "lampSvg",
      title: "test 3",
      text: "lorem 3",
      smallIcon: "arrowSvg",
    },
    {
      icon: "lampSvg",
      title: "test 4",
      text: "lorem 4",
      smallIcon: "arrowSvg",
    },
  ];
  return (
    <div>
      {props.cond ? (
        <span>
          <LazyLoadImage src={props.src} />
        </span>
      ) : (
        <div className="hovered-boxes">
          {testing.map((item) => {
            return (
              <BoxSingle
                key={Math.random()}
                icon={item.icon}
                title={item.title}
                text={item.text}
                smallIcon={item.smallIcon}
              >
                {props.children}
              </BoxSingle>
            );
          })}
        </div>
      )}
      <BoxesContent
        icon={props.icon}
        indClass={props.indClass}
        text={props.text}
        title={props.title}
        btn={props.btn}
      />
    </div>
  );
};

export default BoxList;
