import React from 'react'
import styles from "./modules/RScreen.module.css"
import Link from 'next/link'
import Header from './Header'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { TwitterShareButton } from 'react-share'
import EmailButton from './EmailButton'
import { useState, useEffect } from 'react'

export default function RScreen(props) {
    function color() {
        const score = (props.score/100) * 40
        if (score >  0 && score <= 10) return `rgb(232, 43, 43)`
        if (score > 10 && score <= 20) return `rgb(249, 116, 0)`
        if (score > 20 && score <= 30) return `rgb(229, 248, 83)`
        if (score > 30 && score <= 40) return `rgb(12, 248, 16)`
    }

    const [isNormalWidth, setIsNormalWidth] = useState(true)

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth
          setIsNormalWidth(screenWidth >= 750)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
        <Header></Header>
        <div className={styles.center}>
            <div className={styles.container}>
                <div className={`${styles.main_cont}`}>
                    <div className={styles.underline}>Your Rizz Score</div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.underline} >What does this Rizz score mean?</div>
                    <div className={styles.level}>Rizz Level - {props.level}</div>
                    <div className={styles.text}>{props.text}</div>
                    <div className={styles.buttonContainer}>
                        
                        <TwitterShareButton
                            url={'https://spark-rouge.vercel.app'}
                            title={`I got a RIZZ score of ${props.score}. Take this test to find out yours`}>
                            <div className={styles.button74} role="button">Share Rizz on X</div>
                        </TwitterShareButton>
                        <EmailButton 
                            text={"Get Full Results"}>
                            score={props.score}
                        </EmailButton>
                        <Link className={styles.button74} role="button" href="https://apps.apple.com/ca/app/spark-your-ai-wingman/id6444730312?platform=iphone">Upgrade RIZZ</Link>
                    </div>
                </div>
                <div style={{ width: isNormalWidth ? '150%' : '70%', margin: '0 auto' }}>
                <CircularProgressbar
                    value={props.score}
                    text={`${props.score}`}
                    strokeWidth={11}
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        pathColor: `${color()}`,
                        textColor: 'white',
                        textSize: '28px',
                        trailColor: 'white',
                    })}
                />
                </div>
            </div>
        </div>
        </>
    )
}
