import React from "react";
import './reklama.scss';
import music from './music.png'

class Reklama extends React.Component {

    state = {
        loader: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loader: false})
        }, 10000);
    }

    render() {

        if(!this.state.loader) {
            this.props.history.push('/login');
        }

        return (
        <div className="intro">
        <div className="container">
        <div className="intro__inner">
        <h1 className="intro__title">Արմեն Հարությունյան Խաչատուրի</h1>
        <p className="intro__inner--date">21-12-2021</p>
        <p className="info__inner--task">Տրված է MxN չափի մատրիցը։ Առանց պայմանի օպերատոր կիրառելու հաշվել և արտածել մատրիցի կենտ համարով տողերի տարրերի միջին թվաբանականները։</p>
        <h1 className="intro__title">Կուրսային աշխատանք</h1>
        <img src={music} alt="" className="intro__img"/>
        </div>
        </div>
        </div>
        );
    }
}

export default Reklama;