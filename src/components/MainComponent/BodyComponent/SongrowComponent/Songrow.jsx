import React from 'react'
import styles from './Songrow.module.scss'
import PropTypes from 'prop-types';
import { songAction } from '@store/song-slice'
import { useDispatch } from 'react-redux';
import { playSong, getPlayerState, seekToPosition } from '@services/api'

function Songrow({ track, className }) {
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
    let songRowClass = className ? `${styles.songRow} ${className}` : styles.songRow
    const renderArtistName = () => {
        return track?.artists?.map(artist => artist.name).join(", ")
    }
    return (
        <div className={songRowClass} onClick={() => { playSongItem(track.uri) }}>
            <img className={styles.songRow__album} src={track?.album?.images[0]?.url} alt="" />
            <div className={styles.songRow__info}>
                <h1>{track?.name}</h1>
                <p>
                    {renderArtistName()}
                    {' - '}{track?.album?.name}
                </p>
            </div>
        </div>
    )
}
Songrow.propTypes = {
    track: PropTypes.object.isRequired,
    className: PropTypes.string,
};
export default Songrow

