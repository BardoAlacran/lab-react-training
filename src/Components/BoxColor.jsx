import PropTypes from 'prop-types';

function BoxColor({r, g, b}){
    const style = {
        background: `rgb(${r},${g},${b})`,
        textAlign: 'center',
    }
    return (
        <div className='border'style={style}>
        <p>rgb({r},{g},{b})</p>
        </div>
    )
}

BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number, 
}

export default BoxColor;

