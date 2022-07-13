import HandIcon from "./HandIcon";
import './HandButton.css';

function HandButton({ value, onClick }){
    const handleClick = () => onClick(value);
    
    return (
        <button onClick={handleClick} className="HandButton">
            <HandIcon value={value} className="HandButton-icon" />
        </button>
    )
}

export default HandButton;