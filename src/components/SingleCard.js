import { FaTimes } from 'react-icons/fa'

const SingleCard = ({task, onDelete, onToggle}) => {
    return(
        <div className={`ticket ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <widget type="ticket" class="--flex-column"> 
            <div class="top --flex-column">
            <div class="bandname -bold">{task.text}
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer'}}
                onClick = {() => onDelete(task.id)} 
                /></div>
            <div class="tourname">Home Tour</div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/concert.png" alt="" />
            <div class="deetz --flex-row-j">
                <div class="event --flex-column">
                    <div class="date">{task.day}</div>
                    <div class="location -bold">Bloomington, Indiana</div>
                </div>
                <div class="price --flex-column">
                    <div class="label">Price</div>
                    <div class="cost -bold">$30</div>
                </div> 
            </div> 
            </div>
            <div class="rip"></div>
            <div class="bottom --flex-row-j">
            <div class="barcode"></div>
            <a class="buy" href="#">BUY TICKET</a>
            </div>
        </widget>
    </div>
        
    )
}

export default SingleCard