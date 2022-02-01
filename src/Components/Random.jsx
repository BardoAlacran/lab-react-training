import PropTypes from 'prop-types';

function Random({min, max}){
    const random = Math.floor(Math.random()*(max-min))+min;
    return (
        <div className='border'>
        <p>Random value between {min} and {max} = {random}</p>
        </div>
    )
}

Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number, 
}

export default Random;

