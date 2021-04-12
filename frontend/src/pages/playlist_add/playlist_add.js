import React, { useEffect, useState } from 'react'
import Header from "../../components/header/header";
import Add from "../../components/add/add"
import ImagemFaixa from '../../img/pngfaixa.png';
import './playlist_add.css'
import {useHistory } from 'react-router-dom'  

import { useParams } from 'react-router-dom'
import api from '../../api'

export default function Playlist_Add() {
    const [faixas, setFaixas] = useState([]);
    const history = useHistory();
    const { id } = useParams()
    useEffect(() => {

        async function reqTotalFaixas() {
            const response = await api.get(`/playlist/${id}/add`)
            setFaixas(response.data)
            console.log(response.data)
        }
        reqTotalFaixas()

    }, [])

    const handleSubmit = async (event,id,idfaixa) => {
        event.preventDefault();

        try {
            const response = await api.post(`/playlist/${id}/add/${idfaixa}`, {
            

            })
                
            
        } catch (error) {
            console.log(error)

        }

    };  
    function openTotalFaixas(id){
        history.push(`/playlist/${id}/add`)
    }

    return (<>
        <section className='container_album'>
            <Header />
            <div className='container'>
            <div className='grid-container'>
                    {faixas.map(faixa => (

                        <section className='faixa'>
                            <img src={ImagemFaixa} />
                            <span>{faixa.nome}</span>
                            <button className='botao' style={{color: '#00f200', borderColor:"#00f200"}} form='criar_playlist_form' onClick = {(event)=>handleSubmit (event,id,faixa.num_faixa)}>+</button>
                        </section>
                    ))}
                </div>

            </div>

        </section>
    </>
    )


}