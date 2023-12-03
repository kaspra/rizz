"use client"

import QScreen from "@/components/QScreen"
import * as constants from "../../modules/constants"

export default function Page({params}) {
    const no = params.no
    const path1 = `/assets/${no}a.gif`
    const path2 = `/assets/${no}b.gif`
    const path3 = `/assets/${no}c.gif`
    const path4 = `/assets/${no}d.gif`
    const text1 = constants[`text${no}a`]
    const text2 = constants[`text${no}b`]
    const text3 = constants[`text${no}c`]
    const text4 = constants[`text${no}d`]
    const qText = constants[`qText${no}`]

    return (
        <QScreen
            qNo={no}
            qText={qText}
            gif1={path1}
            gif2={path2}
            gif3={path3}
            gif4={path4}
            text1={text1}
            text2={text2}
            text3={text3}
            text4={text4}
        ></QScreen>
    )
}
