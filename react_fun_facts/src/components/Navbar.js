import reactIcon from "../images/reactjs-icon.png";
import '../css/Navbar.css'

function Navbar() {
    return (
      <div className="Navbar">
        <div className="icon-container">
          <img className="icon" src={reactIcon} />
          <h1>ReactFacts</h1>
        </div>
        <h3>React Course - Project 1</h3>
      </div>
    );
}
  
export default Navbar;
  