import React from 'react';
import ImagemAlbum from '../../img/img2.png';
import './playlists.css';

export default function Playlists({titulo}){
    return(
        <section className='container_playlist-component'>
            <img src={ImagemAlbum}/> 
            <button>{titulo}</button>  
        </section>
    );
}