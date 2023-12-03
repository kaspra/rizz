import styles from "./modules/Bars.module.css"

export default function Bars(props) {
    const fill = props.fill
    const bars = []

    for (let i = 0; i < 10; i++) {
        if (i < fill) {
          bars.push(styles.blue)
        } else {
          bars.push(styles.white)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.completed}>{props.fill} / 10</div>
            <div className={styles.bars}>
                {bars.map((bars, index) => (
                    <div key={index} className={`${styles.bar} ${bars}`}></div>
                ))}
            </div>
        </div>
    )
}
