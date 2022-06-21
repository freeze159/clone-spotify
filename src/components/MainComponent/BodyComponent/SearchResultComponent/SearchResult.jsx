import React ,{ Suspense } from 'react'
// import Albums from '@BodyCom/AlbumsComponent/Albums'
import styles from './SearchResult.module.scss'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Songrow from '@BodyCom/SongrowComponent/Songrow'
import PropTypes from 'prop-types';
import { songAction } from '@store/song-slice'
import { useDispatch } from 'react-redux';
import { playSong, getPlayerState, seekToPosition } from '@services/api'
const Albums = React.lazy(()=>import('@BodyCom/AlbumsComponent/Albums'));
function SearchResult({ searchRes }) {

    const renderSearchSongRow = (searchRes) => {
        return searchRes?.tracks.items.slice(0, 4).map((item, index) => <Songrow track={item} key={index} className={styles.search__songRow} />)
    }

    const dispatch = useDispatch()

    const playSongItem = async (uri) => {
        playSong(uri).then(s => {
            seekToPosition(0)
            getPlayerState().then(curr => {
                dispatch(songAction.setPlaying())
                dispatch(songAction.setItemPlaying(curr.data.item))
            })

        })
    }
    return (
        <div className={styles.search}>
            <div className={styles.search__songs}>
                <div className={styles.search__topRes}>
                    <h1>Top result</h1>
                    <div className={styles.search__songInfo}>
                        <img src={searchRes?.tracks?.items[0]?.album?.images[0]?.url}
                            alt="Top result" />
                        <h1>{searchRes?.tracks?.items[0]?.name}</h1>
                        <p>
                            <span>{searchRes?.tracks?.items[0]?.artists?.map(artist => artist.name).join(", ")}</span>
                            <span>Song</span>
                        </p>
                        <div className={styles.overlay} onClick={()=> {playSongItem(searchRes?.tracks?.items[0]?.uri)}}>
                            <PlayCircleFilledIcon className={styles.overlay__icon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.search__song}>
                    <h2>Songs</h2>
                    {renderSearchSongRow(searchRes)}
                </div>
            </div>
            <div className={styles.search__artist}>
                <h1>Playlist</h1>
                <Suspense fallback={<div>Loading...</div>}>
                <Albums albumList={searchRes?.playlists} />
                </Suspense>
                
            </div>
        </div>
    )
}
SearchResult.propTypes = {
    searchRes: PropTypes.object,
};

export default SearchResult
