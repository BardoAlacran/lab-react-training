import PropTypes from 'prop-types';

function Rating({children}){
    const entire = Math.round(children)
    if (entire === 0){
        return (
            <div>
                <p>☆☆☆☆☆</p>                
            </div>
        )
    } else if (entire === 1){
        return (
            <div>
                <p>★☆☆☆☆</p>
            </div>
        )
    } else if (entire === 2){
        return (
            <div>
                <p>★★☆☆☆</p>
            </div>
        )
    }else if (entire === 3){
        return (
            <div>
                <p>★★★☆☆</p>
            </div>
        )
    }else if (entire === 4){
        return (
            <div>
                <p>★★★★☆</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>★★★★★</p>
            </div>
        )
    }
}

Rating.propTypes = {
    children: PropTypes.oneOf([0,1,2,3,4,5]),
}

export default Rating;
