import './App.css';
import data from './data';

const Header = () => {
  return (
    <section className='Header'>
      <img className= "header-icon" src ="/images/globe.png" />
      <span>my travel journal.</span>
    </section>
  )
}

const formatDate =(inputDate) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const [day, month, year] = inputDate.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;
  
  return formattedDate;
}




const Card = (props) => {
  
  return (
    <div className='Card'>
      <img className='card-image' src={props.image_url} />
      <div className='details'>
        <div>
          <img src="/images/marker.png"/>
          <span>{(props.location).toUpperCase()}</span>
          <a href={props.google_maps_link} target="_blank"><span>View on Google Maps</span></a>
        </div>
        <h1>{props.title}</h1>
        <p>{formatDate(props.start_date)} - {formatDate(props.end_date)}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

const Main = () => {
  
  const items = data.map(item => {
    return(
      <Card 
        key ={item.id}
        {...item}
      />
    )
      
  })
  
  return (
    <section className='Main'>
      {items}
    </section>
  )
}







export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

 
