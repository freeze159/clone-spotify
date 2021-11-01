import React from 'react'
import styles from './Sidebar.module.css'
import SidebarOption from './SidebarOptionComponent/SidebarOption'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useSelector, useDispatch } from 'react-redux'
import { getPlaylistById } from '@services/api'
import { songAction } from '@store/song-slice'
import { useHistory } from 'react-router-dom'
import { LOGO_URL } from '@const'
function Sidebar() {
    const playlist = useSelector(state => state.user.playlist)
    const dispatch = useDispatch()
    let history = useHistory()

    const sideBarOption = [
        { title: 'Home', iconComponent: HomeSharpIcon },
        { title: 'Search', iconComponent: SearchIcon },
        { title: 'Library', iconComponent: LibraryMusicIcon }
    ]

    const onClickPlayList = async (id) => {
        let res = await getPlaylistById(id)
        dispatch(songAction.setPlaylist(res.data))
        history.push(`/playlist/${res.data.id}`)
    }

    const returnMain = () => {
        history.push('/')
    }

    const renderSidebarOptions = (options) => {
        return options.map((item, index) => <SidebarOption
            key={index}
            title={item.title}
            Icon={item.iconComponent}
            onClick={returnMain} />)
    }

    const renderPlaylist = playlist => {
        return playlist.map(pl => <SidebarOption
            title={pl.name}
            key={pl.id}
            songId={pl.id}
            onClick={onClickPlayList} />)
    }

    return (
        <div className={styles.sidebar}>
            <img
                className={styles.sidebar__logo}
                src={LOGO_URL}
                alt="logo.png" />
            {renderSidebarOptions(sideBarOption)}
            <br />
            <strong className={styles.sidebar__title}>PLAYLISTS</strong>
            {/* Render playlist */}
            {renderPlaylist(playlist)}
            <hr />
        </div>

    )
}

export default Sidebar
