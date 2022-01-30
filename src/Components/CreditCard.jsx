import PropTypes from 'prop-types'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const style = {
        background: bgColor,
        color: color,
    }
    
    let newNumber = number.split('')
    for (let i = 0; i <= newNumber.length -5; i++){
        newNumber[i] = '*';
    }
    
    return (
        <div style={style} >
            <p>{type}</p>
            <p>{newNumber}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

CreditCard.propTypes = {
    type: PropTypes.oneOf(['Visa', 'Master Card']),
    number: PropTypes.string,
    expirationMonth: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    expirationYear:PropTypes.number,
    bank:PropTypes.string,    
    owner:PropTypes.string,
    bgColor:PropTypes.string,
    color:PropTypes.string
}

export default CreditCard;