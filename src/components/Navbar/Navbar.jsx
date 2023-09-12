import styles from './navbar.module.css'
import React from 'react'
import { FaYoutube } from 'react-icons/fa6'
import { AiOutlineMenu, AiOutlineNotification,
AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navLogoContainer}>
        <AiOutlineMenu size={"1.7em"}/>

        <div className={styles.ytLogo}>
            <FaYoutube size={"2.4em"} color='red'/>
            <h4>YouTube</h4>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <input type="text" placeholder='Search'/>
        <span className={styles.searchIcon}>
          <AiOutlineSearch size={"1.6em"} />
        </span>
      </div>


      <div className={styles.rightIcons}>
        <AiOutlineNotification strokeWidth={0.3} size={"1.7em"}/>
        <AiOutlineSetting strokeWidth={0.3} size={"1.7em"}/>
        <AiOutlineNotification strokeWidth={0.3} size={"1.7em"}/>
      </div>


    </nav>
  )
}
