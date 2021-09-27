import React from 'react'

import LandingHeader from './HeaderComponent/LandingHeader'
import BannerLanding from './BannnerComponent/BannerLanding'
import InfoLanding from './InfoComponent/InfoLanding'
import FooterLanding from './FooterComponent/FooterLanding'

function LandingMain() {
    return (
        <div>
            <LandingHeader />
            <BannerLanding />
            <InfoLanding />
            <FooterLanding />
        </div >
    )
}

export default LandingMain
