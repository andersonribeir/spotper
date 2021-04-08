import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Home from './pages/home/home.js'
import Playlist from "./pages/playlist/playlist.js";
import Albuns from "./pages/album/albuns.js";


export default function Routes() {
    return (
        <BrowserRouter>
        <Route path="/home" exact component={Home} />
        <Route path="/playlist" exact component={Playlist} />
        <Route path = "/albuns" exact component= {Albuns}/>
        </BrowserRouter>
    )
}