import react from "react";
import './header.scss';
import { NavLink } from "react-router-dom";

class Header extends react.Component {

    render() {

        const logOut = () => {
            this.props.history.push('/');
        }

        const path = this.props.path;
        const header = react.createRef();

        const vertical = () => {
            header.current.className += ' vertical';
        }

        const horizontal = () => {
            header.current.className = 'header';
        }

        return (
            <header className="header" ref={header}>
                <div className="container">
                    <div className="header__inner">
                        <nav className="nav">
                            <NavLink to={`${path}/task`} className="nav__link">Խնդիր</NavLink>
                            <NavLink to={`${path}/advice`} className="nav__link">Օրվա Խորհուրդ</NavLink>
                            <a className='nav__link' onClick={vertical}>Ուղղահայաց</a>
                            <a className='nav__link' onClick={horizontal}>Հորիզոնտալ</a>
                            <NavLink to={`${path}/help`} className="nav__link">Օգնություն</NavLink>
                            <NavLink to={`${path}/`} className="nav__link">Փակել բոլորը</NavLink>
                            <NavLink to={`${path}/info`} className="nav__link">Հեղինակ</NavLink>
                            <div className="logout">
                                <button type="button" onClick={logOut}>Ելք</button>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;