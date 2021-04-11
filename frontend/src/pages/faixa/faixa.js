import React, { useEffect, useState } from 'react'
import Header from "../../components/header/header";
import ImagemAlbum from '../../img/img2.png';
import './faixa.css'

import { useParams } from 'react-router-dom'
import api from '../../api'

export default function Faixa() {
    const [faixas, setFaixas] = useState([]);
    const { id } = useParams()
    useEffect(() => {

        async function reqAlbum() {
            const response = await api.get(`/albuns/${id}`)
            setFaixas(response.data)
            console.log(response.data)
        }
        reqAlbum()

    }, [])


    return (<>
        <section className='container_album'>
            <Header />
            <div className='container'>
                <div className='grid-container'>
                    {faixas.map(faixa => (

                        <section className='faixa'>
                            <img src={ImagemAlbum} />
                            <span>{faixa.nome}</span>
                        </section>
                    ))}
                </div>

            </div>

        </section>
    </>
    )


}