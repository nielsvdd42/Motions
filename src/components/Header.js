import {BiArchiveIn} from 'react-icons/bi'

const Header = () => {
    return(
        <div className="Header">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <BiArchiveIn style={{marginTop: "0.3rem", height: '2em', width: '2em' }} />
                <h1 className="title">Moties.</h1>
            </div>
            <h2 className="subtitle">Dien jouw moties hier in.</h2>
        </div>
    )
} 

export default Header