"use client"

import Bars from "./Bars"
import React from 'react'
import styles from "./modules/QScreen.module.css"
import Link from 'next/link'
import Header from "./Header"
import { useState, useEffect } from 'react'
import * as calculate from "../app/modules/calculate"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function QScreen(props) {
    const router = useRouter()
    const numString = props.qNo
    const numAsNumber = parseInt(numString)
    const [option, setOption] = useState(0)
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

    useEffect(() => {
        const path = `${getNextPage()}`
        router.push(path)
    }, [option])

    function getPrevPage() {
        if (numAsNumber == 1) {
            return `/question/${numAsNumber}`
        } else {
            return `/question/${numAsNumber-1}`
        }
    }

    function getNextPage() {
        if (option != 0) {
            let num = calculate.optionScore(numAsNumber, option)
            try {
                localStorage.setItem(`question${numAsNumber}`, num)
            } catch (e) { 
                console.log(e) 
            }
            if (numAsNumber < 10) {
                return `/question/${numAsNumber+1}`
            } else if (numAsNumber >= 10) {
                const scoreOutOf40 = calculate.totalScore()
                const type = calculate.typeOfResult(scoreOutOf40)
                const score = Math.floor((scoreOutOf40/40) * 100)
                return  `/result/${type}?score=${score}`
            }
        } else {
            return `/question/${numAsNumber}`
        }
    }

    function Layout(type) {
        return (
          <div className={styles.question}>
            <div className={styles.questionBox}>
              <div>Question {props.qNo}</div>
              <div className={`${styles.question_text}`}>{props.qText}</div>
              {type == "MOBILE" ? Options(152, 96) : null}
              {Buttons()}
            </div>
            {type == "DESKTOP" ? Options(190, 140) : null}
          </div>
        )
    }

    function Options(width, height) {
        return (
            <div className={styles.gifGrid}>
                <div className={styles.quadrant} onClick={() => setOption(1)}>
                    <Image src={props.gif1} className="image" alt="top_left" height={height} width={width}/>
                    <div>{props.text1}</div>
                </div>
                <div className={styles.quadrant} onClick={() => setOption(2)}>
                    <Image src={props.gif2} className="image" alt="top_right" height={height} width={width}/>
                    <div>{props.text2}</div>
                </div>
                <div className={styles.quadrant} onClick={() => setOption(3)}>
                    <Image src={props.gif3} className="image" alt="bottom_left" height={height} width={width}/>
                    <div>{props.text3}</div>
                </div>
                <div className={styles.quadrant} onClick={() => setOption(4)}>
                    <Image src={props.gif4} className="image" alt="bottom_right" height={height} width={width}/>
                    <div>{props.text4}</div>
                </div>
            </div>
        )
    }

    function Buttons() {
        return (
            <div className={styles.buttons}>
                    <Link className={styles.button74} href={getPrevPage()}><img src='/assets/arrow_back.svg' alt="arrow_back"/>Previous</Link>
                    <Link className={styles.button74} href={getNextPage()}>Forward<img src='/assets/arrow_next.svg' alt="arrow_next"/></Link>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <Header></Header>
                <Bars fill={props.qNo}></Bars>
            </div>
            {isNormalWidth ? Layout("DESKTOP") : Layout("MOBILE")}
        </div>
    )
}
