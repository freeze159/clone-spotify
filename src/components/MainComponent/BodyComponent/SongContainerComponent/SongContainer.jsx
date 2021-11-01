import React from 'react'
import Songrow from '@BodyCom/SongrowComponent/Songrow'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './SongContainer.module.scss'
import PropTypes from 'prop-types';
function SongContainer({ songListInfo }) {
    
    const renderSongrow = (songListInfo) => {
        return songListInfo?.tracks.items.map((item, index) => <Songrow track={item.track} key={index} />)
    }
    return (
        <div className={styles.songContainer}>
            <div className={styles.songContainer__info}>
                <img src={songListInfo?.images[0]?.url}
                    alt="song" />
                <div className={styles.songContainer__infoText}>
                    <strong>PLAYLIST</strong>
                    <h2>{songListInfo?.name}</h2>
                    <p>{songListInfo?.description}</p>
                </div>
            </div>

            <div className={styles.songContainer__songs}>
                <div className={styles.songContainer__icons}>
                    <PlayCircleFilledIcon className={`${styles.songContainer__playIcon} ${styles.songContainer__icon}`} />
                    <FavoriteIcon fontSize='large' className={styles.songContainer__icon} />
                    <MoreHorizIcon className={styles.songContainer__icon} />
                </div>
                {/* List of songs */}
                {renderSongrow(songListInfo)}
            </div>
        </div>
    )
}
SongContainer.propTypes = {
    songListInfo: PropTypes.object,
};
export default SongContainer
