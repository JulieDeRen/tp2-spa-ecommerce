import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const SingleCard = ({event, onDelete, onToggle}) => {
    return(
        <div className={`ticket ${event.promotion ? 'promotion' : ''}`} onDoubleClick={() => onToggle(event.id)}>
            <widget type="ticket" className="--flex-column"> 
                <div className="top --flex-column">
                <div className="bandname -bold">{event.text}
                    <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}}
                    onClick = {() => onDelete(event.id)} 
                    /></div>

                <div className="tourname">{event.title}</div>
                <img src={event.img} alt="image de spectacle" className="imgCard"/>
                <div className="deetz --flex-row-j">
                    <div className="event --flex-column">
                        <div className="date">{event.day}</div>
                        <div className="location -bold">{event.venue}</div>
                    </div>
                    <div className="price --flex-column">
                        <div className="label">Prix</div>
                        <div className="cost -bold">${event.price}</div>
                    </div> 
                </div> 
                </div>
                <div className="rip"></div>
                <div className="bottom --flex-row-j">
                <div className="barcode"></div>
                <a className="buy" href="#">ACHETER</a>
                </div>
            </widget>
        </div>
        
    )
}

export default SingleCard