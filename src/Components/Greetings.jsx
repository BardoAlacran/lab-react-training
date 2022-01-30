import PropTypes from 'prop-types';

function Greetings ({lang, children}){
    if (lang === 'es'){
        return (
            <div>
                Hola {children}
            </div>
        )
    } else if (lang === 'fr'){
        return (
            <div>
                Bonjour {children}
            </div>
        )
    } else if (lang === 'en'){
        return (
            <div>
                Hello {children}
            </div>
        )
    } else {
        return (
            <div>
                Hallo {children}
            </div>
        )
    }
}

Greetings.propTypes = {
    lang: PropTypes.oneOf(['de', 'en','es', 'fr']), 
}

export default Greetings;