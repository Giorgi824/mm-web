import svges from "../../svges";
const LanguageBox = () => {
  return (
    <div className="language">
      <div>
        <span
          className="symbol-svg"
          dangerouslySetInnerHTML={{ __html: svges["symbolSvg"] }}
        ></span>
        <span className="chosen-lang">ქარ</span>
      </div>
      <span
        className="lang-arrow"
        dangerouslySetInnerHTML={{ __html: svges["arrowSvg"] }}
      ></span>
    </div>
  );
};

export default LanguageBox;
