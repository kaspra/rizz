"use client"

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <div className={styles.img_div}>
      <img
      className={styles.img_div_img}
      src="/assets/land_gray.jpg"
      layout='fill'
      objectFit='cover'
      />
    </div>
      <div className={`${styles.container} ${styles.main_container}`}>
      <div className={`${styles.spark} ${styles.top_text}`}> Powered by &nbsp;
        <a className={styles.link} href="https://apps.apple.com/ca/app/spark-your-ai-wingman/id6444730312?platform=iphone">SPARK 
        <img src='/assets/arrow_up_yellow.svg' alt="arrow_up"/>
        </a>
      </div>
        <p className={`${styles.header} ${styles.page_p}`}>RIZZ TEST</p>
      <div className={`${styles.subscript} ${styles.page_text}`}>Find out where you stand on the RIZZ scale</div>
      <Link className={styles.button74} href="/question/1">CALCULATE RIZZ</Link>
    </div>
  </>
  )
}
