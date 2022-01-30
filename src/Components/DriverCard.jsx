import PropTypes from 'prop-types'

function DriverCard({name, rating, img, car}){
    return (
        <div>
            <p>{name}</p>
            <p>{rating}</p>
            <img src={img} alt="" />
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
            
        </div>
    )
}

DriverCard.propTypes = {
    name: PropTypes.string, 
    rating: PropTypes.number,
    img: PropTypes.string, 
    car: {
        model: PropTypes.string,
        licensePlate: PropTypes.string,
    }, 
}

export default DriverCard;