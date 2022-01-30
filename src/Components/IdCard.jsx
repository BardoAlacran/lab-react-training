import PropTypes from 'prop-types'

function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
        <div>
            <h3><b>First Name: {firstName}</b></h3>
            <h3><b>Last Name: {lastName}</b></h3>
            <h3><b>Gender: {gender}</b></h3>
            <h3><b>Height: {height}</b></h3>
            <h3><b>Birth: {birth}</b></h3>
            <img src={picture} alt=''/>
        </div>
    )
}

IdCard.propTypes = {
    firstName: PropTypes.string, 
    lastName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']), 
    height: PropTypes.number, 
    birth: PropTypes.instanceOf(Date), 
    picture: PropTypes.string,
}

export default IdCard;