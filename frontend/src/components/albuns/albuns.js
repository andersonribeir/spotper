import React from 'react';
import ImagemAlbum from '../../img/img2.png';
import './albuns.css';

export default function Albuns({titulo}){
    return(
        <section className='container_album-component'>
            <img src={ImagemAlbum}/> 
            <button>{titulo}</button>  
        </section>
    );
}