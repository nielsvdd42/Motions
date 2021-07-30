import '../css/MotieInfo.css';
import {IoIosPaper} from 'react-icons/io';
const MotieInfo = ({motie}) => {
    let aangenomen = "";
    let aangenomenStyle = {};
    if (motie.aangenomen === true && motie.gestemd === true){
        aangenomen = "Motie aangenomen!";
        aangenomenStyle = {color: "green"};
    }
    else if (motie.gestemd === true){
        aangenomen = "Motie niet aangenomen!"
        aangenomenStyle = {color: "red"};
    }
    else {
        aangenomen = "Stemming onvolledig."
        aangenomenStyle = {color: "grey"};
    }
    return(
        <li>
            <div className="alpha">
                <div>
                    <IoIosPaper />
                </div>
                <div className="motieContent">
                    <div className="upper">
                        <span id="titel">{motie.motieTitel}</span>
                        <span id="date">{motie.datum}</span>
                    </div>
                    
                    <span>Indiener: {motie.indiener}</span>
                    <span style={aangenomenStyle}>{aangenomen}</span>
                    <span>{motie.motieTekst}</span>
                </div>
            </div>
        </li>
    )
}

export default MotieInfo