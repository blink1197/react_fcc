import Star from '../images/Star 1.png';
import cardData from '../cardData.js';

const Cards = (props) => {
  {console.log(props.item)}
  return (
    <div className="card">
        {props.item.status ? (
          <div className="status">{props.item.status}</div>
        ) : (
          <div className="status" style={{background: 'transparent'}}>{props.item.status}</div>
        )}
        <div className="card-details">
            <div className="rating">
                <img className="card-image" src={`/images/${props.item.img}`} />
                <div>
                    <img src={Star} />
                    <p>{props.item.rating}</p>
                    <p> ({props.item.review}) &middot; {props.item.country}</p>
                </div>
            </div>
            <p>{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong> / person</p>
        </div>
    </div>
  );
}

export default function Card() {
  
  const cardItems = cardData.map(item => 
    <Cards
      key = {item.id}
      item = {item}
    />
  )

  
  return (
    <div className="Cards">
      {cardItems}
    </div>
  );
}
  
  