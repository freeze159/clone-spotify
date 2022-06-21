import React, { Suspense } from 'react'
import Sidebar from './SidebarComponent/Sidebar'
import Body from '@BodyCom/Body'

// import Footer from './FooterComponent/Footer'
import styles from './Main.module.css'
const Footer = React.lazy(() => import('./FooterComponent/Footer'))
function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main__contain}>

                <Sidebar />
                <Body />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>

        </div >
    )
}

export default Main
