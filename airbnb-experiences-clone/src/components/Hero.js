import Image1 from '../images/image 28.png';
import Image2 from '../images/image 30.png';
import Image3 from '../images/image 26.png';
import Image4 from '../images/image 27.png';
import Image5 from '../images/image 29.png';
import Image6 from '../images/image 22.png';
import Image7 from '../images/image 23.png';
import Image8 from '../images/image 25.png';
import Image9 from '../images/image 24.png';


export default function Hero() {
    return (
      <div className="Hero">
        <div className="images-container">
          <div className="vertical-container">
            <img className="hero-image" src={Image1} />
          </div>
          <div className="vertical-container">
            <img className="hero-image" src={Image2} />
            <img className="hero-image" src={Image3} />
          </div>
          <div className="vertical-container">
            <img className="hero-image" src={Image4} />
            <img className="hero-image" src={Image5} />
          </div>
          <div className="vertical-container">
            <img className="hero-image" src={Image6} />
            <img className="hero-image" src={Image7} />
          </div>
          <div className="vertical-container">
            <img className="hero-image" src={Image8} />
            <img className="hero-image" src={Image9} />
          </div>

        </div>
        <div className="hero-text">
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    );
}
  

  