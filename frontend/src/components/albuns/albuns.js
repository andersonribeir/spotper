import React from 'react';
import ImagemAlbum from '../../img/img2.png';
import './albuns.css';

export default function Albuns({titulo,onClick}){
    return(
        <section className='container_album-component'>
            <img src={ImagemAlbum} onClick = {onClick}/>  
            <button type = 'button' onClick = {onClick}>{titulo}</button>  
        </section>
    );
}