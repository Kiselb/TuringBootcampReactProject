import React from 'react'

import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.panelcenter}></div>
            <div className={styles.paneltop}></div>
            <div className={styles.panelright}></div>
            <div className={styles.panelbottom}></div>
            <div className={styles.panelleft}></div>
        </div>
    )
}

export default Main
