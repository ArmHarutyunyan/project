import react from "react";
import './help.scss'
import raw from './help.txt';

class Help extends react.Component {

    state = {
        text: '',
        textReader: true
    }

    render() {

        if(this.state.textReader) {
            fetch(raw)
            .then(r => r.text())
            .then(text => {
                this.setState({text: text})
            })
            this.state.textReader = false;
        }

        return (
            <div className="help">
                <div className="container">
                    <div className="help__inner">
                        <p className="help__inner--text">
                            {this.state.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Help;