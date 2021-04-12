import React, { useEffect, useState } from 'react'
import Header from "../../components/header/header";
import ImagemPlaylist from '../../img/pngfaixa.png';
import './faixa_playlist.css'
import {FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import api from '../../api'
import {useHistory } from 'react-router-dom'    

export default function Faixa_Playlist() {
    const [faixas, setFaixas] = useState([]);
    const history = useHistory();
    const { id } = useParams()
    useEffect(() => {

        async function reqPlaylist() {
            const response = await api.get(`/playlist/${id}`)
            setFaixas(response.data)
            console.log(response.data)
        }
        reqPlaylist()

    }, [])
    const handleSubmit = async (event,id,idfaixa) => {
        event.preventDefault();

        try {
            const response = await api.delete(`/playlist/${id}/${idfaixa}`, {
            

            })
                const arrayFilter = faixas.filter(faixa => faixa.num_faixa !== id)
                setFaixas(arrayFilter)
            console.log(response)
        } catch (error) {
            console.log(error)

        }

    }
    // const openPagAdd= (id) => {
    //     history.push(`/playlist/${id}/add`)
    // }
    
    return (<>
        <section className='container_album'>
            <Header />
            
            <div className='container'>
                <div className='grid-container'>
                    {faixas.map(faixa => (

                        <section className='faixa'>
                            <img src={ImagemPlaylist} />
                            <span>{faixa.nome}</span>
                            <button className='botao' form='criar_playlist_form' onClick = {(event)=>handleSubmit (event,faixa.num_faixa,id)}>x</button>
                        </section>
                    ))}
                </div>
                
                <a href={`/playlist/${id}/add`}>ADD NA PLAYLIST</a>
            </div>

        </section>
    </>
    )


}