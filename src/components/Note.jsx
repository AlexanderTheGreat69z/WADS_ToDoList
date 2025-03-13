import React from 'react'
import styles from './Note.module.css'

const Note = (props) => {

    return (
        <div className={styles.note}>
            <p contentEditable>{props.content}</p>
            <button>X</button>
        </div>
    )
}

export default Note