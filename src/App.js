import "./styles/css/common.css";
import "./styles/fonts.css";
import Header from "./components/landingPage/header/Header";
import Footer from "./components/landingPage/footer/Footer";
import Container from "./components/Container";
import { useEffect, useRef } from "react";
import svges from "./svges";
import Authorise from "./pages/Authorize";
import { Route, Routes } from "react-router-dom";
function App() {
  const lazySvg = useRef(false);
  useEffect(() => {
    if (lazySvg.current === false) {
      // image appear
      const images = document.querySelectorAll("[data-svg]");
      function preloadImage(img) {
        const src = img.getAttribute("data-svg");
        if (!src) {
          return;
        }
        const currSvg = svges[src];
        img.insertAdjacentHTML("afterbegin", currSvg);
      }
      const imgOptions = {};
      const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
          }
        });
      }, imgOptions);
      images.forEach((image) => {
        imgObserver.observe(image);
      });
      return () => (lazySvg.current = true);
    }
  }, [lazySvg]);
  return (
    <>
      <div id="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Container />
                <Footer />
              </>
            }
          />
          <Route path="/authorize" element={<Authorise />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
