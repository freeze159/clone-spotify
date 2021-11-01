import React from 'react'
import styles from './Footer.module.css'
// Import player control icon
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material//VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { songAction } from '@store/song-slice'
import { pauseSong, resumeSong } from '@services/api'
import { NO_PLAYING } from '@const'
function Footer() {
    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.song.item);
    const isPlaying = useSelector(state => state.song.isPlaying)
    const handlePause = async () => {
        await pauseSong()
        dispatch(songAction.setPause())

    }
    const handleResume = async () => {
        await resumeSong()
        dispatch(songAction.setPlaying())
    }
    const renderPlayBtn = () => {
        return !isPlaying ? <PlayCircleOutlinedIcon fontSize='large' className={styles.footer__icon} onClick={handleResume} /> :
            <PauseCircleOutlineIcon fontSize='large' className={styles.footer__icon} onClick={handlePause} />
    }
    const songName = currentSong ? currentSong.name : NO_PLAYING
    const artistName = currentSong ? currentSong.artists?.map(artist => artist.name).join(', ') : NO_PLAYING

    return (
        <div className={styles.footer}>
            <div className={styles.footer__left}>
                <img src={currentSong?.album?.images[0]?.url}
                    alt="Album"
                    className={styles.footer__songImage} />
                <div className={styles.footer__songInfo}>
                    <h4>{songName}</h4>
                    <p>{artistName} </p>
                </div>
            </div>

            <div className={styles.footer__center}>
                <ShuffleIcon className={`${styles.footer__icon} ${styles.footer__iconGreen}`} />
                <SkipPreviousIcon className={styles.footer__icon} />
                {renderPlayBtn()}
                <SkipNextIcon className={styles.footer__icon} />
                <RepeatIcon className={`${styles.footer__icon} ${styles.footer__iconGreen}`} />
            </div>

            <div className={styles.footer__right}>
                <Grid container spacing={2} style={{ marginTop: '-6px' }}>
                    <Grid item>
                        <PlaylistPlayIcon className={styles.footer__icon} />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className={styles.footer__icon} />
                    </Grid>
                    <Grid item xs={8} style={{ paddingTop: '14px' }}>
                        <Slider aria-label="Volume" size='small' defaultValue={50} style={{ color: '#52af77' }} />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
