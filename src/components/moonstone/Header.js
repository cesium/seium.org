const Header = (props) => {
  return (
    <div className="header" style={props.style}>
      <h3>{props.title}</h3>
      <div className="children">{props.children}</div>
    </div>
  );
};

export default Header;
