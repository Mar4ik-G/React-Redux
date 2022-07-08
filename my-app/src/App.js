import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/news/*" element={<NewsContainer />}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                </Routes>
            </div>


        </div>
    );
}


export default App;
