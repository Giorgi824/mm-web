import svges from "../svges";
import axios from "axios";
import { useState, useEffect } from "react";
const BoxSingle = ({ url }) => {
  const [posibilities, setPosibilities] = useState([]);
  const allPosibilities = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setPosibilities(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    const namedTime = setTimeout(() => {
      allPosibilities();
      console.log(posibilities);
    }, 200);
    return () => {
      clearTimeout(namedTime);
    };
  }, []);
  return (
    <>
      {posibilities.map((item) => {
        const image = item.svgIcon.includes(".svg")
          ? `<img src=${item.svgIcon} />`
          : svges[item.svgIcon];
        console.log(item.svgIcon);
        return (
          <div className="hovered-box-item" key={item.id}>
            <span
              className={`icon ${item.svgIcon}`}
              dangerouslySetInnerHTML={{ __html: image }}
            ></span>
            <div className="title-text">
              <div>{item.title}</div>
              <span>{item.text}</span>
            </div>
            <span
              className="small-icon"
              dangerouslySetInnerHTML={{ __html: svges[item.arrow] }}
            ></span>
          </div>
        );
      })}
    </>
  );
};

export default BoxSingle;
