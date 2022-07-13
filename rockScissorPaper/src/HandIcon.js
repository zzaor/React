import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';

const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg
}

function HandIcon({ value, className }) {
    console.log('classNm >> ' , className);
    const src = IMAGES[value];
    return (<img src={src} alt={value} className={className}  />)
}

export default HandIcon;