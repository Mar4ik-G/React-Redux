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
            <div  className="content">
            <Routes>
                    <Route path="/profile" element={<Profile  profileProps={props.state.profile.messagesData}
                                                              controlInput={props.addText}
                                                              funcAddPost={props.func}
                                                              textInInput={props.state.profile.controllInput}/>}/>
                    <Route  path="/dialogs/*"  element={<Dialogs dialogsProps={props.state.messages}
                                                                 funcT={props.controllInputForDialogs}
                                                                 funcAddDialog={props.addDialog}
                                                                 textInInput={props.state.messages.controllInputForDialogs}/>}/>
                    <Route  path="/news/*"  element={<News newsProps={props.state.news}/>}/>
            </Routes>
            </div>


        </div>
    );
}


export default App;
