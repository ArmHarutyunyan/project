import { rerenderEntireTree } from "./index";

const state = {
    user: {
        log: '',
        pass: ''
    },
    admin: false,
    logValue: "armen",
    passValue: "2003"
}

export let updateLogText = (text) => {
    state.user.log = text;
    rerenderEntireTree();
}

export let updatePassText = (text) => {
    state.user.pass = text;
    rerenderEntireTree();
}

export let logout = (admin, history) => {
    history.push("/");
    rerenderEntireTree();
}

export let taskLoaderExit = (loader) => {
    setTimeout(() => {
        loader = false; 
        rerenderEntireTree();
    }, 10000);
}

export default state;