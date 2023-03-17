import { FaTimes, FaEdit } from 'react-icons/fa';

const SingleCard = ({event, onDelete, onEdit, onToggle}) => {
    return(
        <div className={`ticket ${event.promotion ? 'promotion' : ''}`} onDoubleClick={() => onToggle(event.id)}>
            <span type="ticket" className="--flex-column"> 
                <div className="top --flex-column">
                <div className="bandname -bold --flex-row-j">
                    <div>
                        {event.text}
                    </div>
                    <div>
                        <FaEdit
                        style={{ color: 'black', cursor: 'pointer'}}
                        onClick = {() => onEdit(event.id)} />
                    </div>
                    <div>
                        <FaTimes 
                        style={{ color: 'red', cursor: 'pointer'}}
                        onClick = {() => onDelete(event.id)} 
                        />
                    </div>
                </div>
                    
                

                <div className="tourname">{event.title}</div>
                <img src={event.img} alt="spectacle" className="imgCard"/>
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
            </span>
        </div>
        
    )
}

export default SingleCard