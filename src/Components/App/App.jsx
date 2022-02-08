import React from 'react';
import './App.scss';
import {Switch, Route } from 'react-router-dom';
import Header from '../Menyu/Header';
import Task from '../Xndir/Task';
import Info from '../Hexinak/Info';
import Help from '../Ognutyun/Help';
import Advice from '../Xorurd/Advice';

class App extends React.Component{

    state = {
        admin: false
    }

    // componentDidMount() {
    //     const dbref = ref(db);
    //     setTimeout(() => {
    //         get(child(dbref, "Admin/admin")).then((snapshot) => {
    //             if(snapshot.exists()){
    //                 this.setState({admin: snapshot.val().admin})
    //             }
    //         })
    //     }, 500);
    // }

    render() {

        const path = this.props.match.path;
        

        return (
                <div className="App">
                    <Header history={this.props.history} path={path}/>  
                    <Switch>
                        <Route path={`${path}/task`} component={Task}/>
                        <Route path={`${path}/info`} component={Info}/>
                        <Route path={`${path}/help`} component={Help}/>
                        <Route path={`${path}/advice`} component={Advice}/>
                    </Switch>
                </div>
        );

        
    }
}

export default App;
