import react from "react";
import './advice.scss'
import raw from './advice.txt';

class Advice extends react.Component {

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
            <div className="advice">
                <div className="container">
                    <div className="advice__inner">
                        <p className='advice__text'>
                            {this.state.text}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advice