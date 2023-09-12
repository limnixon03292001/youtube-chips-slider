import React from 'react'
import styles from './maincontent.module.css'
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'
import ChipSlider from '../SliderChips/ChipSlider'

export default function MainContent() {
  return (
    <div className={styles.mainContainer}>
        <Sidebar />
        <Content/>
    </div>
  )
}
