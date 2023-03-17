import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <p>Copyright 2023</p>
        </footer>
    )
}
export default Footer