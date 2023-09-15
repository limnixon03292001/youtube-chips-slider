import React from 'react'
import styles from './sidebar.module.css'
import { AiOutlineNotification,} from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div className={styles.sideNavContainer}>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Home</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Notification</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Settings</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Live</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Your Videos</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Watch Later</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Subscriptions</p>
        </div>
        <div className={styles.link}>
            <AiOutlineNotification strokeWidth={0.3} size={"1.4em"}/>
            <p>Shorts</p>
        </div>
    </div>
  )
}
