import { LazyLoadImage } from "react-lazy-load-image-component";
import AppBtns from "./staticComponents/AppBtns";
const DownloadApp = () => {
  return (
    <div className="mm-download-app-statistic centered-element">
      <div className="upper-side">
        <span className="upper-side-circle"></span>
        <div className="not-overflowed">
          <span>
            <LazyLoadImage src="img/black.png" />
          </span>
          <div>
            <div className="title">გადმოწერეთ ჩვენი აპლიკაცია</div>
            <p>
              იყავი მუდამ კავშირზე და ისარგებლე უამრავი სერვისით ერთ სივრცეში!
            </p>
            <AppBtns />
          </div>
        </div>
      </div>
      <div className="down-side">
        <div>
          <div>48730</div>
          <span>მომხმარებელი</span>
        </div>
        <div>
          <div>
            10k<sup>+</sup>
          </div>
          <span>ჩამოტვირთვები</span>
        </div>
        <div>
          <div>
            16<sup>+</sup>
          </div>
          <span>შეფასებული 3+</span>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
