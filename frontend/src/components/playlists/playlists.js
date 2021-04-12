import React from 'react';
import ImagemPlaylist from '../../img/pngplaylist.png';
import './playlists.css';

export default function Playlists({titulo,onClick}){
    return(
        <section className='container_album-component'>
            <img src={ImagemPlaylist} onClick = {onClick} /> 
            <button type = 'button' onClick = {onClick}>{titulo}</button>  
            
        </section>
    );
}