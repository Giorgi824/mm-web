import svges from "../../svges";
const AppBtns = () => {
  return (
    <div className="mobile-app-btns">
      <a href="#" dangerouslySetInnerHTML={{ __html: svges["appleSvg"] }}></a>
      <a href="#" dangerouslySetInnerHTML={{ __html: svges["googleSvg"] }}></a>
    </div>
  );
};

export default AppBtns;
