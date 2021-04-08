import React,{useEffect,useState} from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
import api from '../api'
import './albuns.css'


export default function Albuns(){
    const [albuns,setAlbuns] = useState([]);
    useEffect(()=>{
        async function reqAlbum(){
            const response = await api.get('/albuns')
            setAlbuns(response.data)
        }
        reqAlbum()


    },[])

    return(<>
        <Header/>
        <h1>ALBUNS</h1>
        {albuns.map(album=>(
            <div class = "move_left">
                {album.cod_album}

                {album.nome}
            </div>

        ))}
    </>
    
    )
}