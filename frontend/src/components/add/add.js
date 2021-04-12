import React from 'react';
import ImagemAlbum from '../../img/pngfaixa.png';
import './add.css';


export default function Add({titulo,onClick}){
    return(
        <section className='container_album-component'>
            <img src={ImagemAlbum} onClick = {onClick}/>  
            <button  onClick = {onClick}>{titulo}</button>  
        </section>
    );
}