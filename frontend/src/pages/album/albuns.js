import React,{useEffect,useState} from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
import Albuns from "../../components/albuns/albuns";
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
        <section className='container_album'>
            <Header/>
            <div className='album_page'>
            <Albuns titulo='Clássico'/>  {/*RECEBE ALBUM 'CLASSICO'*/}
            <Albuns titulo='O Original'/>   
  
            </div>

            {albuns.map(album=>(
                <div class = "move_left">
                    {album.cod_album}

                    {album.nome}
                </div>

            ))}
        </section>
    </>
    )
}