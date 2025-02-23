import "./DragAndDrop.css"
const NextButton = ({ onClick, text }) => {
  return <button className="upload-button" onClick={onClick}>{text}</button>;
};

export default NextButton;
