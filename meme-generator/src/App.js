import './App.css';
import { useState, useEffect } from 'react';

// Header Component
const Header = () => {
  return (
    <div className='Header'>
      <div>
        <img alt="meme-generator-logo" src="/images/Troll Face.png"/>
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}

const TextInputs = (props) => {
  return (
    <div className='text-inputs'>
      <h2>{props.name === 'topText' ? "Top Text" : "Bottom Text"}</h2>
      <input type="text" 
        name={props.name} 
        onChange={props.handleChange} 
        value = {props.value} />
    </div>
);
}

// Main Component
const Meme = () => {
  
  // State to store meme details
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
    altText: ''
  });

  // State to store meme object from API call
  const [allMemesImages, setAllMemeImages] = useState ({});
  
  // Async function to fetch memes from the API
  useEffect(() => {
    const fetchMemes = async () => {
      const apiUrl = 'https://api.imgflip.com/get_memes';
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.success) {
          setAllMemeImages(data.data.memes); // Save the memes to state
        }
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    };

    fetchMemes();
  }, []);

  // Function to select a random meme and set the states for image url and alt text
  const selectMeme = () => {
    const randomIndex = Math.floor(Math.random() * allMemesImages.length);
    setMeme(prevState => ({
      ...prevState,
      topText: '',
      bottomText: '',
      randomImage: `${allMemesImages[randomIndex].url}`,
      altText: `${allMemesImages[randomIndex].name}`
    }))
  }

 
  // Function to change the top or bottom text of the meme.
  const changeText = (event) => {
    if (!meme.randomImage) {
      alert("Please generate new meme image first.");
      return;
    }

    const { name, value } = event.target;
    if (name === 'bottomText' || name === 'topText') {
      setMeme(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    
  }


  return (
    <main>
      <form className='form'>
        <div className="input-container">
          <TextInputs name="topText" handleChange={changeText} value={meme.topText}/>
          <TextInputs name="bottomText" handleChange={changeText} value={meme.bottomText}/>
        </div>
        <div className='GenerateButton' >
          <button type="button" onClick={selectMeme}>Get a new meme image  🖼️</button>
        </div>
      </form>
      <div className='meme-container'>
        <p className="meme-text top-text">{meme.topText}</p>
        {meme.randomImage && <img className="meme-image" alt={meme.altText} src={meme.randomImage} />}
        <p className="meme-text bottom-text">{meme.bottomText}</p>
      </div>
      
    </main>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

