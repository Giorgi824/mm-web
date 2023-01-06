import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import AppBtns from "./staticComponents/AppBtns";
import BoxList from "./BoxList";
import AdditionalServices from "./landingPage/landingContainer/homePage/AdditionalServices";
import axios from "axios";
import { useState, useEffect } from "react";
import svges from "../svges";
import BoxesContent from "./BoxesContent";
import BoxSingle from "./BoxSingle";
import DownloadApp from "./DownloadApp";
const Container = () => {
  const [services, setServices] = useState([]);
  const url = "http://localhost:3000/services";
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
    }, 200);
    return () => {
      clearTimeout(namedTime);
    };
  }, []);
  return (
    <main id="main-element">
      <div className="full-element">
        <div className="full-element-content">
          <strong>My Profile </strong>
          <h1>შეუზღუდავი ონლაინ შესაძლებლობები</h1>
          <p className="general-gray-text">
            ჩამოტვირთე და გამოიყენე My Profile - ის აპლიკაცია! მართე ფინანსები,
            იყავი მუდამ კავშირზე და ისარგებლე უამრავი სერვისით ერთ სივრცეში.
          </p>
          <AppBtns />
        </div>
        <div className="full-element-img">
          <LazyLoadImage src="img/keyboard.png" />
        </div>
      </div>
      <div className="container-boxes centered-element">
        <div className="boxes-general-title">
          <h2>ინფორმაცია</h2>
          <p>დამატებითი ინფორმაცია</p>
        </div>
        <div className="box-list">
          <div>
            <div className="hovered-boxes">
              <BoxSingle url={`http://localhost:3000/posibilites`} />
            </div>
            <BoxesContent url={`http://localhost:3000/services/1`} />
          </div>
          <div>
            <div className="hovered-boxes">
              <BoxSingle url={`http://localhost:3000/cells`} />
            </div>
            <BoxesContent url={`http://localhost:3000/services/2`} />
          </div>
          <div>
            <span>
              <LazyLoadImage src="./img/black.png" />
            </span>
            <BoxesContent url={`http://localhost:3000/services/3`} />
          </div>
          <div>
            <span>
              <LazyLoadImage src="./img/black.png" />
            </span>
            <BoxesContent url={`http://localhost:3000/services/4  `} />
          </div>
        </div>
      </div>
      <AdditionalServices />
      <DownloadApp />
      <div className="container-boxes centered-element">
        <div className="boxes-general-title">
          <h2>კონტაქტი</h2>
          <p>დამატებითი ინფორმაცია</p>
        </div>
        <div className="box-list">
          <div>
            <span>
              <LazyLoadImage src="img/black.png" />
            </span>
            <form className="contact-form">
              <h3>მოგვწერეთ</h3>
              <span>მოგვწერეთ ორი სიტყვით ახწერა კარგი იქნება</span>
              <div>
                <label>
                  <span>ელ.ფოსტა</span>
                  <input type="text" placeholder="თქვენი ელექტრონული ფოსტა" />
                </label>
                <label>
                  <span>შეტყობინება</span>
                  <textarea placeholder="მიუთითეთ სასურველი აღწერილობა"></textarea>
                </label>
              </div>
              <Button>{"გაგზავნა"}</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Container;
