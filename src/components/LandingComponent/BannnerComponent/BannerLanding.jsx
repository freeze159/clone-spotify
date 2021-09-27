import React from 'react'
import styles from './BannerLanding.module.css'
function BannerLanding() {
    return (
        <section className={styles.landing__banner}>
            <div className={styles.landing__banner__content}>
               <h4>SPOTIFY PREMIUM</h4> 
               <h1>Get 3 months of Premium for free</h1>
               <h2>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h2>
               <div className={styles.landing__banner__content__subscribe}>
                GET 3 MONTHS FREE

               </div>
            </div >
            <div className={styles.landing__banner__image}></div>
        </section>
    )
}

export default BannerLanding
