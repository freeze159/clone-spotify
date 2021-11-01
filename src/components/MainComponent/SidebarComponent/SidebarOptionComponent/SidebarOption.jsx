import React from 'react'
import styles from './SidebarOption.module.css'
import PropTypes from 'prop-types';
function SidebarOption({ title, Icon, songId, onClick }) {
  return (
    <div className={styles.sidebarOption} onClick={() => { onClick(songId) }} >
      {Icon && <Icon className={styles.sidebarOption__icon} />}
      {Icon ? <h4>{title ? title : null}</h4> : <p>{title ? title : null}</p>}
    </div>
  )
}
SidebarOption.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.object,
  songId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default SidebarOption