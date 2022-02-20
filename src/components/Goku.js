import { Component } from 'react';
import goku from '../goku.png';
import handleClicks from './handleClicks';

class Goku extends Component {

    render(){
        const {backGround, clickHandler} = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={goku} alt="goku" /><br />
            </div>
        )
    }
}

export default handleClicks(Goku);