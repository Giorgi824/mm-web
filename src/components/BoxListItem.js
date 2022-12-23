const BoxListItem = ({ children, icon, title, text, smallIcon }) => {
  return (
    <div className="hovered-box-item">
      <span className="icon" data-svg={icon}></span>
      <div className="title-text">
        <div>{title}</div>
        <span>{text}</span>
      </div>
      <div className="body">{children}</div>
      <span className="small-icon" data-svg={smallIcon}></span>
    </div>
  );
};

export default BoxListItem;
