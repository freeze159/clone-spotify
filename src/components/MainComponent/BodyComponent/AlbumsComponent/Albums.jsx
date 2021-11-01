import React from 'react'
import AlbumItem from '@BodyCom/AlbumItemComponent/AlbumItem'
import styles from './Albums.module.scss'
import PropTypes from 'prop-types';
function Albums({ albumList }) {
    const renderAlbumList = (albumList) => {
        return albumList?.items.map((item,index) => <AlbumItem album={item} key={index}/>)
    }
    return (
        <div className={styles.albums}>
            {renderAlbumList(albumList)}
        </div>
    )
}
Albums.propTypes = {
    albumList:PropTypes.object.isRequired
}
export default Albums
