import React from 'react';
import './login.scss';
import state from '../../state';

class Login extends React.Component{ 

    state = {
        log: '',
        pass: '',
    }


    render() {
        const log = React.createRef();
        const pass = React.createRef();
        const error = React.createRef();
        

        const inputUpdateLog = () => {
            let text = log.current.value;
            this.setState({log: text});
        }

        const inputUpdatePass = () => {
            let text = pass.current.value;
            this.setState({pass: text});
        }

        const goToHome = () => {
            if(this.state.log === state.logValue && this.state.pass === state.passValue) {
                this.props.history.push('/home');
            }
            else {
                error.current.style.display = 'block';
            }
        }
        
        const elq = () => {
            this.props.history.push('/');
        }
        
        const changeLogin = () => {
            this.props.history.push('/change');
        }
        
        return(
            <div className="login">
                <div className="login__inner">
                    <form action="/" className="login__form">
                        <div className="input__item">
                            <input type="text" className="login__input" placeholder="Գաղտնանուն" ref={log} onChange={inputUpdateLog}/>
                        </div>
                        <div className="input__item">
                            <input type="password" className="login__input" placeholder="Գաղտնագիր" ref={pass} onChange={inputUpdatePass}/>
                        </div>
                        <p className="login__wrong" ref={error}>Մուտքագրված գաղտնանունը կամ գաղտնագիրը սխալ է</p>
                    </form>
                    <div className="buttons">
                        <button className='login__btn' onClick={goToHome}>Մուտք</button>
                        <button className='login__btn' onClick={elq}>Ելք</button>
                    </div>
                    <p className='change' onClick={changeLogin}>Փոխել գաղտնանունն ու գաղտնագիրը</p>
                </div>
            </div>
        );
    };
};

export default Login;