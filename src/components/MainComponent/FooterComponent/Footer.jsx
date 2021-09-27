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

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__left}>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/night-song-album-cover-poster-template-3efe92c34ef97d6356afa813d2ac80a4_screen.jpg?ts=1561447696" alt="Album cover" className={styles.footer__songImage} />
                <div className={styles.footer__songInfo}>
                    <h4>Bé meo goodnight</h4>
                    <p>Carue meo</p>
                </div>


            </div>
            <div className={styles.footer__center}>
                <ShuffleIcon className={`${styles.footer__icon} ${styles.footer__iconGreen}` }/>
                <SkipPreviousIcon className={styles.footer__icon}/>
                <PlayCircleOutlinedIcon fontSize='large' className={styles.footer__icon}/>
                <SkipNextIcon className={styles.footer__icon}/>
                <RepeatIcon className={`${styles.footer__icon} ${styles.footer__iconGreen}` }/>

            </div>
            <div className={styles.footer__right}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className={styles.footer__icon}/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className={styles.footer__icon}/>
                    </Grid>
                    <Grid item xs={8} style={{paddingTop:'14px'}}>
                        <Slider aria-label="Volume" size='small' defaultValue={70} style={{color:'#52af77'}}/>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
