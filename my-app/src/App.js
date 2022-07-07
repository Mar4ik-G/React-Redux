import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/profile" element={<Profile profileProps={props.state.profileReducer.profile.messagesData}
                                                             controlInput={props.state.profileReducer.profile.controllInput}
                                                             dispatch={props.dispatch}
                                                             />}/>

                    <Route path="/dialogs/*" element={<Dialogs dialogsProps={props.state.dialogsReducer.messages}
                                                               dispatch={props.dispatch}
                                                               textInInput={props.state.dialogsReducer.messages.controllInputForDialogs}/>}/>

                    <Route path="/news/*" element={<News newsProps={props.state.newsReducer.news}/>}/>
                </Routes>
            </div>


        </div>
    );
}


export default App;
