import React, { useEffect, useState } from 'react'
import { AiFillPushpin } from 'react-icons/ai';
import Header from "../../components/header/header";
import Playlists from "../../components/playlists/playlists";
import Album from "../../components/albuns/albuns";
import './playlist.css';
import '../album/albuns';

import { useHistory } from 'react-router-dom';
import api from '../../api'






export default function Playlist() {
    const [playlists, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const history = useHistory();


    useEffect(() => {
        async function teste() {
            const response = await api.get('/playlist')
            setPlaylist(response.data)
        }
        teste()


    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(playlistName);

        try {
            const response = await api.post('/playlist', {
                nomeplaylist: playlistName,

            })
            console.log(response)
        } catch (error) {
            console.log(error)

        }

    }
    function openPlaylist(id) {
        history.push(`/playlist/${id}`)
    }

    function deletePlaylist(id) {
        history.push(`/playlist/${id}`)

    }


    return (<>

        <section className='container_playlist'>
            <Header />
            <div className='container'>




                <section className='grid-container'>





                    {playlists.map(playlist => (

                        <Playlists key={playlist.cod} titulo={playlist.nome} onClick={() => openPlaylist(playlist.cod)} />



                    ))}


                </section>


                <form className='playlist_adicionar' id='criar_playlist_form' onSubmit={handleSubmit}>
                    <label className='playlist_form'>
                        Nome da Playlist
                    <input type="text" id='nomeplaylist' onChange={(event) => setPlaylistName(event.target.value)} />

                    
                        <button className='playlist_button' type='submit' form='criar_playlist_form'>+</button>
                        </label>

                </form>
            </div>



        </section>
    </>
    )
}
