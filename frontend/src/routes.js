import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Home from './pages/home/home.js'
import Playlist from "./pages/playlist/playlist.js";
import Albuns from "./pages/album/albuns.js";
import Faixas from "./pages/faixa/faixa.js"
import Faixa_Playlist from "./pages/faixa_playlist/faixa_playlist.js";
import Playlist_Add from "./pages/playlist_add/playlist_add.js"
import Header from "./components/header/header.js";

export default function Routes() {
    return (
        <BrowserRouter>
        <Route path="/home" exact component={Home} />
        <Route path="/playlist" exact component={Playlist} />
        <Route path = "/albuns" exact component= {Albuns}/>
        <Route path = "/albuns/:id" exact component = {Faixas}/>
        <Route path = "/playlist/:id" exact component = {Faixa_Playlist}/>
        <Route path =  "/playlist/:id/add" component = {Playlist_Add}/>
        </BrowserRouter>
    )
}