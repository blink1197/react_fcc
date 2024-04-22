import './css/App.css';
import LauraImage from './images/laura-smith.png';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <img src={LauraImage} className='main-image'/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
