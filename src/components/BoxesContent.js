import { LazyLoadImage } from "react-lazy-load-image-component";
import svges from "../svges";
import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";
const BoxesContent = ({ url, icon, indClass, title, text, btn }) => {
  const [services, setServices] = useState([]);
  const allServices = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setServices(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    const namedTime = setTimeout(() => {
      allServices();
      console.log(services);
    }, 200);
    return () => {
      clearTimeout(namedTime);
    };
  }, []);
  return (
    <div className="boxes-content">
      <span
        dangerouslySetInnerHTML={{ __html: svges[services.svgName] }}
        className={`box-icon ${services.specClass}`}
      ></span>
      <div className="box-title">{services.serviceTitle}</div>
      <p>{services.serviceContent}</p>
      <Button>{services.serviceBtnText}</Button>
    </div>
  );
};

export default BoxesContent;
