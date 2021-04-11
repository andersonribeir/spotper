import React, { useEffect, useState } from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
import Album from "../../components/albuns/albuns";
import api from '../../api'
import './albuns.css'
import {useHistory } from 'react-router-dom'

export default function Albuns() {
    const [albuns, setAlbuns] = useState([]);
    const history = useHistory();

    useEffect(() => {

        async function reqAlbum() {
            const response = await api.get('/albuns')
            setAlbuns(response.data)
        }
        reqAlbum()

    }, [])

function openAlbum(id){
    history.push(`/albuns/${id}`)
}

    return (<>
        <section className='container_album'>
            <Header />
            <div className='album_page'>
                {albuns.map(album => (

                    <Album key={album.cod_album} titulo={album.nome} onClick = {()=>openAlbum(album.cod_album)} />



                ))}


            </div>

        </section>
    </>
    )
}