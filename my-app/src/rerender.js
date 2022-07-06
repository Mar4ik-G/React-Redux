import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import {addDialog, addPost, addText, controllInputForDialogs} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree=(state)=>{

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} func={addPost} addText={addText} controllInputForDialogs={controllInputForDialogs} addDialog={addDialog} />
            </BrowserRouter>
        </React.StrictMode>
    );
}