import TwitterIcon from '../images/twitter-icon.png';
import FacebookIcon from '../images/facebook-icon.png';
import InstagramIcon from '../images/instagram-icon.png';
import GithubIcon from '../images/github-icon.png';

function Footer() {
    return (
      <div className="Footer">
        <img src={TwitterIcon} />
        <img src={FacebookIcon} />
        <img src={InstagramIcon} />
        <img src={GithubIcon} />
      </div>
    );
}
  
export default Footer;