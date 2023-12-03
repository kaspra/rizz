"use client"

import RScreen from "@/components/RScreen"
import * as constants from "../../modules/constants"
import { useSearchParams, usePathname } from 'next/navigation';

export default function Page({ params }) {
    let no = 0
    const type = params.type
    const searchParams = useSearchParams()
    const score = searchParams.get('score')
    if (type == constants.TYPE.ROOKIE) no = 1
    if (type == constants.TYPE.NOVICE) no = 2
    if (type == constants.TYPE.AMATUER) no = 3
    if (type == constants.TYPE.EXPERT) no = 4
    const title = constants[`title${no}`]
    const level = constants[`level${no}`]
    const text = constants[`resText${no}`]

    return (
        <RScreen
            title={title}
            level={level}
            text={text}
            score={score}
        ></RScreen>
    )
}
