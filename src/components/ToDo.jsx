import React from 'react'
import styles from './ToDo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
    return (
        <div className={styles.todo}>
            <h1 className='w-[90%] text-3xl'>
                <b>- {props.todo}</b>
            </h1>
            <button><b><FontAwesomeIcon icon={ faCheck } /></b></button>
        </div>
    )
}

export default ToDo