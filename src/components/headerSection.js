import './headerSection.css';
import NGROK from '../assets/imgs/ngrok.png';

function headerSection(){
    return (
    <>
    <div className='navbar'>
     <div className='logo'>
     <img src={NGROK} alt='error'/>
     </div>
    </div>
    </>
    );
}

export default headerSection;