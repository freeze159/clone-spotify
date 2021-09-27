import React from 'react'
import styles from './InfoLanding.module.css'

function InfoLanding() {
    return (
        <section className={styles.landing__info}>
            <div className={styles.landing__info__content}>
               <h4>SPOTIFY FREE</h4> 
               <h1>Listening is everything</h1>
               <h2>Millions of songs and podcasts. No credit card needed.</h2>
               <div className={styles.landing__info__content__subscribe}>
                GET 3 MONTHS FREE

               </div>
            </div >
        </section>
    )
}

export default InfoLanding
