import React,{useEffect,useState} from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
import Playlists from "../../components/playlists/playlists";
import './playlist.css'

import api from '../api'


export default function Playlist(){
    const [playlist,setPlaylist] = useState([]);
    useEffect(()=>{
        async function teste(){
            const response = await api.get('/playlist')
            setPlaylist(response.data)
        }
        teste()


    },[])

    return(<>
        <section className='container_playlist'>
            <Header/>
            <div className='playlist_page'>
            <Playlists titulo='Playlist1'/>  {/*Recebe Playlist1*/}
            <Playlists titulo='Playlist2'/>

            {playlist.map(playlist=>(
            <div >
                {playlist.cod}
                {playlist.nome}
            </div>

            ))}

            </div>
            
        </section>
    </>
    )
}