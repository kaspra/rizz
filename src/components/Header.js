import React from 'react'
import styles from "./modules/Header.module.css"
import Link from 'next/link'

export default function Header(props) {
    return (
        <div className={styles.container}>
            <Link className={styles.header} href="/">RIZZ TEST</Link>
            <Link className={styles.subscript} href="https://apps.apple.com/ca/app/spark-your-ai-wingman/id6444730312?platform=iphone">Powered by SPARK  
                <img src='/assets/arrow_up_white.svg' alt="arrow_up"/>
            </Link>
        </div>
    )
}
