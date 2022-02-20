import { Component } from 'react';
import vegeta from '../vegeta.png';
import handleClicks from './handleClicks';

class Vegeta extends Component {

    render() {

        const {backGround, clickHandler, name} = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={vegeta} alt="vegeta" /><br />
            </div>
        )
    }
}

export default handleClicks(Vegeta);