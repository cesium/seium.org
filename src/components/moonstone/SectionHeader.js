const SectionHeader = (props) => {
  return (
    <div className="header-section">
      <h1 className="moonstone-title header-1">{props.title}</h1>
      <h4 className="header-4">{props.subtitle}</h4>
    </div>
  );
};
export default SectionHeader;
