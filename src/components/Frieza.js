import { Component } from 'react';
import frieza from '../frieza.png';
import handleClicks from './handleClicks';

class Frieza extends Component {


    render() {

        const {backGround, clickHandler} = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={frieza} alt="frieza" style={{width: 320, height:320}} /><br />
            </div>
        )
    }
}

export default handleClicks(Frieza);