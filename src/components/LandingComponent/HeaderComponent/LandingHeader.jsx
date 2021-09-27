import React from 'react'

import styles from './LandingHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function LandingHeader() {
    let openMenu = () => {
        let navbar = document.getElementById('myTopnav')
        navbar.style.width = '90vw'
    }
    let closeMenu = () => {
        let navbar = document.getElementById('myTopnav')
        navbar.style.width = '0'
    }
    
    return (
        <section className={styles.landing__header}>
            <img className={styles.landing__header__logo}

                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <nav className={styles.landing__header__nav} >
                <div className={styles['landing__header__nav--normal']}>
                    <ul >
                        <li><a href="">Premium</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Download</a></li>
                        <li>|</li>
                        <li><a href="">Sign up</a></li>
                        <li><a href="">Log in</a></li>
                        <a className={styles.landing__header__icon} onClick={() => openMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    </ul>
                    
                </div>

                <div className={styles['landing__header__nav--responsive']} id='myTopnav'>

                    <ul >
                        <a className={styles.landing__header__nav_close} onClick={() => closeMenu()}>
                            X
                        </a>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Download</a></li>
                        <li> - </li>
                        <li><a href="">Sign up</a></li>
                        <li><a href="">Log in</a></li>

                    </ul>
                </div>

            </nav>
        </section>
    )
}

export default LandingHeader
