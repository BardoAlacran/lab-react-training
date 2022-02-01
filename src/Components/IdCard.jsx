import PropTypes from 'prop-types'

function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
        <div className='border IdCard'>
            <article>
            <img src={picture} alt=''/>
            </article>
            <article>
            <ul><b>First Name: {firstName}</b></ul>
            <ul><b>Last Name: {lastName}</b></ul>
            <ul><b>Gender: {gender}</b></ul>
            <ul><b>Height: {height}</b></ul>
            <ul><b>Birth: {birth}</b></ul>
            </article>
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