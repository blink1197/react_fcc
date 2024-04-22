import MailIcon from '../images/mail-icon.png';
import LinkedInIcon from '../images/linkedin-icon.png';

function Header() {
    return (
      <div className="Header">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <p>laurasmith.website</p>
        <div className="button-container">
            <div className='header-button'>
                <img className="header-icon" src={MailIcon}/>
                <span>Email</span>
            </div>
            <div className='header-button'>
                <img className="header-icon" src={LinkedInIcon}/>
                <span>LinkedIn</span>
            </div>
        </div>
      </div>
    );
}
  
export default Header;