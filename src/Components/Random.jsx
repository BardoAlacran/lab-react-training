import PropTypes from 'prop-types';

function Random({min, max}){
    const random = Math.floor(Math.random()*(max-min))+min;
    return (
        <p>{random}</p>
    )
}

Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number, 
}

export default Random;

