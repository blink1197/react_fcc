import '../css/Main.css';
import ReactLogoBg from "../images/reactjs-icon-bg.png";

function Main() {
    return (
        <div className="Main">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div className='image-container'>
            </div>
        </div>
    );
}

export default Main;
