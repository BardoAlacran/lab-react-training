import PropTypes from 'prop-types';

function BoxColor({r, g, b}){
    const style = {
        background: `rgb(${r},${g},${b})`,
    }
    return (
        <p style={style}>rgb({r},{g},{b})</p>
    )
}

BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number, 
}

export default BoxColor;

