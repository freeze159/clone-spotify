import React from 'react'
import Sidebar from './SidebarComponent/Sidebar'
import Body from '@BodyCom/Body'

import Footer from './FooterComponent/Footer'
import styles from './Main.module.css'
function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main__contain}>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div >
    )
}

export default Main
