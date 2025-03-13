import React from 'react'
import styles from './ToDo.module.css'

const ToDo = (props) => {
    return (
        <div className={styles.todo}>
            <h1 className='w-[90%] text-3xl'>
                <b>- {props.todo}</b>
            </h1>
            <button><b>V</b></button>
        </div>
    )
}

export default ToDo