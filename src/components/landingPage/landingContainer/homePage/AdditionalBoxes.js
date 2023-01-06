import { useState, useEffect } from "react";
import axios from "axios";
import svges from "../../../../svges";
const AdditionalBoxes = () => {
  const [boxes, setBoxes] = useState([]);
  const url = "http://localhost:3000/boxes";
  const allAdditionalBoxes = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setBoxes(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    const namedTime = setTimeout(() => {
      console.log("test");
      allAdditionalBoxes();
    }, 200);

    return () => {
      clearTimeout(namedTime);
    };
  }, []);
  return (
    <div className="additional-boxes">
      {boxes.map((item) => {
        return (
          <div key={item.id} className={item.clName} data-svg={item.svg}>
            <span dangerouslySetInnerHTML={{ __html: svges[item.svg] }}></span>
            <div>{item.title}</div>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalBoxes;
