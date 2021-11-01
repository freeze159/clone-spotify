import React, { Fragment } from 'react'
import styles from './AlbumItem.module.scss'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { getPlaylistById } from '@services/api'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { songAction } from '@store/song-slice';
import PropTypes from 'prop-types';

function AlbumItem({ album }) {
    let history = useHistory()
    const dispatch = useDispatch()
    const handleClick = async () => {
        let res = await getPlaylistById(album.id)
        dispatch(songAction.setPlaylist(res.data))
        history.push(`/playlist/${album.id}`)
    }
    return (
        <Fragment>
            <div className={styles.albumItem}>
                <div className={styles.albumItem__background}>
                    <img src={album?.images[0]?.url}
                        alt="artist"
                        className={styles.albumItem__background__image} />
                    <h1>{album?.name}</h1>
                    <p>Artist</p>
                </div>
                <div className={styles.albumItem__overlay} onClick={handleClick}>
                    <PlayCircleFilledIcon className={styles.albumItem__playIcon} />
                </div>

            </div>

        </Fragment>
    )
}
AlbumItem.propTypes = {
    album:PropTypes.object.isRequired
}
export default AlbumItem
