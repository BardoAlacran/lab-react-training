import PropTypes from 'prop-types';

function Greetings ({lang, children}){
    if (lang === 'es'){
        return (
            <div className='border'>
                Hola {children}
            </div>
        )
    } else if (lang === 'fr'){
        return (
            <div className='border'>
                Bonjour {children}
            </div>
        )
    } else if (lang === 'en'){
        return (
            <div className='border'>
                Hello {children}
            </div>
        )
    } else {
        return (
            <div className='border'>
                Hallo {children}
            </div>
        )
    }
}

Greetings.propTypes = {
    lang: PropTypes.oneOf(['de', 'en','es', 'fr']), 
}

export default Greetings;