import React from "react";
import './exercise.scss';

class Exercise extends React.Component {

    state = {
        matrix: [],
        mijinner: []
    }

    render() {
        
        const m = React.createRef();
        const n = React.createRef();

        const start = () => {
            let matrix = [];
            this.state.mijinner = [];

            for(let i = 0; i < m.current.value; i++) {
                matrix.push([]);
                for(let j = 0; j < n.current.value; j++) {
                    const random = Math.floor(Math.random() * 10);
                    matrix[i][j] = random;
                }
            }

            this.setState({matrix});

            for(let i = 0; i < matrix.length; i+=2) {
                let sum = 0;
                for(let j = 0; j < matrix[i].length; j++) {
                    sum = sum + matrix[i][j];
                }
                let mijin = sum / matrix[i].length
                this.state.mijinner.push(mijin);
            }
        }

        return(
            <div className="exer">
                <form action="/" className="exer__form">
                    <div><input type="text" placeholder="Mutq m" ref={m}/></div>
                    <div><input type="text" placeholder="Mutq n" ref={n}/></div>
                    <button type='button' onClick={start}>Start</button>
                    {this.state.matrix.map(key => {
                        return <div className="row">{key.map(key => {
                            return <p>{key}</p>
                        })}</div>
                    })}
                    {this.state.mijinner.map(key => {
                        return <p className="mijin">{key}</p>
                    })}
                </form>
            </div>
        )
    }
}

export default Exercise;
