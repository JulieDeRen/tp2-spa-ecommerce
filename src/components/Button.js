import PropTypes from 'prop-types';
const Button =({text, color, onClick})=>{
    /*const onClick = (e)=>{
        console.log(e.target)
    }*/
    return (
        <a className="button-add" onClick={onClick} style ={{color: color}}>{text}</a>
    )
}

Button.defaultProps = {color: 'blue'};
Button.defaultProps = {onClick: function(){console.log("test")}};

// attention aux majustures
Button.propTypes={
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;