import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import App from "../App/App";
import NotFound from "../NotFound";
import Reklama from "../Govazd/Reklama";
import Poxel from "../Poxel/Poxel";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Reklama}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/home' component={App}></Route>
                <Route path='/change' component={Poxel}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;