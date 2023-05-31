import './TripStyles.css';

function TripData(props) {
    return(
        <div className='Travel_t-card'>
            <div className='Travel_t-image'>
                <img src={props.image} alt='Trip Image'/>
            </div>
            <h4>{props.place}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default TripData;