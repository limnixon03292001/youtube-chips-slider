import React from 'react'
import styles from './content.module.css'
import { contentImgs } from '../../data'
import ChipSlider from '../SliderChips/ChipSlider'

export default function Content() {
  return (
    <div className={styles.contentMainContainer}>
      <ChipSlider/>
      <main className={styles.contentContainer}>
        {contentImgs.map((data, i) => (
          <div className={styles.card} key={i}>
            <img src={data.img} alt="thumbnail" />
            <p>{data.title}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
