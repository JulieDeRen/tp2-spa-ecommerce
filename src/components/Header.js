import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = (props) => {
  /*  const onClick = () => {
        console.log('Component')
    }*/
    const location = useLocation()
    return (
        <header className="header nav">
        {/*<h1 style={{color: 'red', backgroundColor:'black'  }}>{props.title}</h1>
        <h1 style={headingStyle}>{props.title}</h1>*/}

            <nav className="navigation">
                <Link to="/" className="nav">{props.title}</Link>
                <Link to="/about" className="nav">À propos</Link>
                { location.pathname === '/' &&(
            <Button 
            text={props.showAdd ? 'Fermer' : 'Ajouter'} 
            color={props.showAdd ? 'red' : '#18e198'}
            onClick={props.onAdd}/>
            )}
            </nav>
            



        </header>
    )
}

Header.defaultProps = {
    title: "Billets"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header