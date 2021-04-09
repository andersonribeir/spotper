import {useHistory} from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { AiOutlineHome } from 'react-icons/ai';
import { RiPlayListFill } from 'react-icons/ri';
import { IoIosAlbums } from 'react-icons/io';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './header.css';


export default function Header(){
    const history= useHistory()
    return (
        <div>
        <SideNav
            onSelect={(selected) => {   
                const to = '/' + selected;
                history.push(to);
                console.log(selected);
            }}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <AiOutlineHome/>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="playlist">
                <NavIcon>
                    <RiPlayListFill/>
                </NavIcon>
                <NavText>
                    Playlist
                </NavText>
            </NavItem>
            <NavItem eventKey="album">
                <NavIcon>
                    <IoIosAlbums/>
                </NavIcon>
                <NavText>
                    Álbum
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    </div>
    )
    
}