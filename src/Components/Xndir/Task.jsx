import react from "react";
import './task.scss';
import Exercise from "../Varjutyun/Exercise";

class Task extends react.Component {

    render() {
        return (
            <div className="task">
                <div className="container">
                    <div className="task__inner">
                        <div className="task">
                            <Exercise />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;