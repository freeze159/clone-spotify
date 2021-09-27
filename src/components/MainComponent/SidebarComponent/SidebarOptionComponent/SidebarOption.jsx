import React from 'react'
import styles from './SidebarOption.module.css'
function SidebarOption({ title, Icon }) {
    return (
        <div className={styles.sidebarOption}>
            {Icon && <Icon className={styles.sidebarOption__icon}/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}


        </div>
    )
}

export default SidebarOption
