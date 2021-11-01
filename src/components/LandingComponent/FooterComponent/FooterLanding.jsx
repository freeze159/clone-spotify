import React from 'react'
import styles from './FooterLanding.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

function FooterLanding() {
    library.add(fab)
    return (
        <section className={styles.landing__footer}>
            <div className={styles.landing__footer__topcontent}>
                <img className={styles.landing__footer__topcontent__logo}
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt="Logo"
                />
                <div className={styles.landing__footer__topcontent__link}>
                    <div>
                        <p>COMPANY</p>
                        <a href="#">About</a>
                        <a href="#">Jobs</a>
                        <a href="#">For the Record</a>
                    </div>
                    <div>
                        <p>COMMUNITIES</p>
                        <a href="#">For Artists</a>
                        <a href="#">Developers</a>
                        <a href="#">Advertising</a>
                        <a href="#">Investors</a>
                        <a href="#">Vendors</a>

                    </div>
                    <div>
                        <p>USEFUL LINKS</p>
                        <a href="#">Support</a>
                        <a href="#">Web Player</a>
                        <a href="#">Free Mobile App</a>
                    </div>
                </div>
                <div className={styles.landing__footer__topcontent__media}>
                    <div><FontAwesomeIcon icon={["fab", "facebook"]} /></div>
                    <div><FontAwesomeIcon icon={["fab", "instagram"]} /></div>
                    <div><FontAwesomeIcon icon={["fab", "twitter"]} /></div>
                </div>
            </div>
            <div className={styles.landing__footer__botcontent}>
                <div>
                    <a href="">Legal</a>
                    <a href="">Privacy Center</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookies</a>
                    <a href="">About Ads</a>
                    <a href="">Additional CA Privacy Disclosures</a>

                </div>
                <div className={styles.landing__footer__botcontent__right}>
                    <a href="">USA</a>
                    <span href="">
                        © 2021 Spotify AB</span>
                </div>
            </div>
        </section>
    )
}

export default FooterLanding
