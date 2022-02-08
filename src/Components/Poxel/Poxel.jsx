import react from "react";
import state from "../../state";

class Poxel extends react.Component {
    render() {

        const log = react.createRef(); 
        const pass = react.createRef(); 

        const changeState = () => {
            state.logValue = log.current.value;
            state.passValue = pass.current.value;
            this.props.history.push('/login');
        }

        return (
            <div className="login">
                <div className="login__inner">
                    <form action="/" className="login__form">
                        <div className="input__item">
                            <input type="text" className="login__input" ref={log} placeholder="Գաղտնանուն"/>
                        </div>
                        <div className="input__item">
                            <input type="password" className="login__input" ref={pass} placeholder="Գաղտնագիր" />
                        </div>
                    </form>
                    <button className='login__btn' onClick={changeState}>Փոխել</button>
                </div>
            </div>
        )
    }
}

export default Poxel;