import React from 'react'
import styles from './Sidebar.module.css'
import SidebarOption from './SidebarOptionComponent/SidebarOption'

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/SearchSharp';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img
                className={styles.sidebar__logo}
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="logo.png" />
            <SidebarOption title='Home' Icon={HomeSharpIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Library' Icon={LibraryMusicIcon} />
            <br/>
            <strong className={styles.sidebar__title}>PLAYLISTS</strong>
            
            <SidebarOption title='HipHop' />
            
            <SidebarOption title='Pop' />


            <hr/>
        </div>

    )
}

export default Sidebar
