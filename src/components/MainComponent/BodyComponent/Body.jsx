import React from 'react'
import styles from './Body.module.scss'
import Header from './HeaderComponent/Header'
import { useSelector } from 'react-redux'
import SearchResult from './SearchResultComponent/SearchResult'
import { Switch, Route } from 'react-router-dom'
import SongContainer from './SongContainerComponent/SongContainer'
function Body() {
    const discover_weekly = useSelector(state => state.user.discover_weekly)
    const searchRes = useSelector(state => state.song.searchRes)
    const playlist = useSelector(state => state.song.playlist)
    // Set routing here please
    return (
        <div className={styles.body}>
            <Header />
            <Switch>
                <Route path='/search/:searchKeyword'>
                    <SearchResult searchRes={searchRes} />
                </Route>
                <Route path='/playlist/:playlistId'>
                    <SongContainer songListInfo={playlist} />
                </Route>
                <Route path='/'>
                    <SongContainer songListInfo={discover_weekly} />
                </Route>
                
            </Switch>

        </div>
    )
}

export default Body
