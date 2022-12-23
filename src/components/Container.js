import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import AppBtns from "./staticComponents/AppBtns";
import BoxList from "./BoxList";
import AdditionalServices from "./landingPage/landingContainer/homePage/AdditionalServices";
const Container = () => {
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
          <BoxList
            indClass="simple-pay"
            src="img/black.png"
            icon="simplepaySvg"
            title="მარტივი გადახდები"
            text="მარტივად გადაიხადეთ კომუნალური და სხვა გადასახადები. "
            btn="ნახე მეტი"
            cond={true}
          />
          <BoxList
            indClass="mobile-fill"
            src="img/black.png"
            icon="mobilefillSvg"
            title="მობილურის შევსება"
            text="შეავსეთ 500-მდე მობილური ოპერატორის ბალანსი. "
            btn="ნახე მეტი"
            cond={false}
          />
          <BoxList
            indClass="gamblig-icon"
            src="img/black.png"
            icon="gamblingSvg"
            title="გემბლინგი მარტივად"
            text="ერთი კლიკით შეავსეთ და განააღდეთ თანხა გემბლინგ ანგარიშებიდან."
            btn="ნახე მეტი"
            cond={true}
          />
          <BoxList
            indClass="simple-transfer"
            src="img/black.png"
            icon="simpletransferSvg"
            title="მარტივი გადარიცხვა"
            text="გადარიცხე თანხა მეგობართან"
            btn="ნახე მეტი"
            cond={false}
          />
        </div>
      </div>
      <AdditionalServices />
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
