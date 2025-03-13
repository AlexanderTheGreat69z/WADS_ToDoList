import React from 'react'
import styles from './AddButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddButton = (props) => {
    return (
        <button className={styles.button} onClick={props.onclick}>
            <h1 className='text-4xl px-3 py-1 mx-auto mb-1 font-extrabold'>+</h1>
            <p className='font-extrabold'>{props.text}</p>
        </button>
    )
}

export default AddButton