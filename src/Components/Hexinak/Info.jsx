import react from "react";
import './info.scss'
import { rerenderEntireTree } from "../../index";

class Info extends react.Component {

    state = {
        repeater: true
    }

    componentDidMount() {
        const infoName = document.querySelector('.info__inner--name');
        const infoState = document.querySelector('.info__inner--college');
        const infoDate = document.querySelector('.info__inner--date');

        

        setInterval(() => {
            infoName.classList.toggle('active');
        }, 2000);
        setTimeout(() => {
            infoState.style.display = 'block';
            setInterval(() => {
                infoState.classList.toggle('active');
            }, 2000);
        }, 500);
        setTimeout(() => {
            infoDate.style.display = 'block';
            setInterval(() => {
                infoDate.classList.toggle('active');
            }, 2000);
        }, 1000);
        
    }

    render() {

        const infoName = react.createRef();
        const infoState = react.createRef();
        const infoDate = react.createRef();


        return(
            <div className="info">
                <div className="container">
                    <div className="info__inner">
                        <h1 className="info__inner--title">Կուրսային Աշխատանք</h1>
                        <h2 className="info__inner--name" ref={infoName} >Արմեն Հարությունյան Խաչատուրի</h2>
                        <h2 className="info__inner--college" ref={infoState} >Երևանի Ինֆորմատիկայի Պետական Քոլեջ</h2>
                        <h3 className="info__inner--date" ref={infoDate} >15.12.2021 - 22.12.2021</h3>
                        <p className="info__inner--task">
                        Տրված է MxN չափի մատրիցը։ Առանց պայմանի օպերատոր կիրառելու հաշվել և արտածել մատրիցի կենտ համարով տողերի տարրերի միջին թվաբանականները։
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;