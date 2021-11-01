import React, { useRef } from 'react'
import styles from './Header.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { searchSong } from '@services/api';
import { songAction } from '@store/song-slice'
import { useHistory } from "react-router-dom";

// searchSong
export default function Header() {
    const profile = useSelector(state => state.user.profile)
    const inputRef = useRef()
    let history = useHistory()
    const dispatch = useDispatch()
    const onChangeHandler = async (e) => {
        if (e.key === 'Enter') {
            let q = inputRef.current.value
            try {
                let res = await searchSong(q)
                dispatch(songAction.setSearchRes(res.data))
                history.push(`/search/${q}`)
            }catch{
                throw new Error('Search fail')
            }
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <SearchIcon />
                <input type="text" placeholder="Search for Artist, Songs" onKeyDown={onChangeHandler} ref={inputRef} />
            </div>
            <div className={styles.header__right}>
                <Avatar src={profile?.images[0]?.url} alt={profile?.display_name} />
                <h4>{profile?.display_name}</h4>
            </div>
        </div>
    )
}


