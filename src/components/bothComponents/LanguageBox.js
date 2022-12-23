const LanguageBox = () => {
  return (
    <div className="language">
      <div>
        <span data-svg="symbolSvg" className="symbol-svg"></span>
        <span className="chosen-lang">ქარ</span>
      </div>
      <span className="lang-arrow" data-svg="arrowSvg"></span>
    </div>
  );
};

export default LanguageBox;
