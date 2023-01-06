import { useState, useEffect } from "react";
const ThemeMode = () => {
  const [mode, setMode] = useState(null);
  const getCurrentTheme = () => {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    let storage = localStorage.getItem("MM.theme")
      ? (theme = localStorage.getItem("MM.theme"))
      : null;
    return theme;
  };
  useEffect(() => {
    const res = getCurrentTheme();
    loadTheme(res);
  }, []);
  const loadTheme = (theme) => {
    const root = document.querySelector(":root");
    if (theme === "light") {
    } else {
    }
    root.setAttribute("color-scheme", theme);
  };
  const btnFunc = function (e) {
    const currClass = e.currentTarget.classList[0];
    localStorage.setItem("MM.theme", currClass);
    loadTheme(currClass);
  };
  return (
    <div className="dark-light-mode">
      <div>
        <div className="mm-btn-div mm-light">
          <button
            onClick={function (e) {
              btnFunc(e);
            }}
            className="light"
            role="mode switch"
            arial-label="light mode"
            data-svg="sunSvg"
          >
            <span>ღია</span>
          </button>
        </div>
        <div className="mm-btn-div mm-dark">
          <button
            onClick={function (e) {
              btnFunc(e);
            }}
            className="dark"
            role="mode switch"
            arial-label="dark mode"
            data-svg="moonSvg"
          >
            <span>მუქი</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeMode;
