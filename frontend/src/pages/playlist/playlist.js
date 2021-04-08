import React,{useEffect,useState} from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
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
        <Header/>
        <h1>Playlist</h1>
        {playlist.map(playlist=>(
            <div >
                {playlist.cod}
                {playlist.nome}
            </div>

        ))}
    </>
    
    )
}