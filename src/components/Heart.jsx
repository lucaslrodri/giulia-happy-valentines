import styles from './Heart.module.css'

export default function Heart(props){

    return (
        <div className={styles.heartAnimation__wrapper} style={{
            width: `${360*props.size || 360}px`,
            height: `${288*props.size || 288}px`,
            }}>
            <div className={styles.heartAnimation}/>
        </div>
    )
}