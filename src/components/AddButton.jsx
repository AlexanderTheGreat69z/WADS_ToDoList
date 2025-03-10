import React from 'react'
import styles from './AddButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddButton = (props) => {
    return (
        <button className={styles.button}>
            <h1 className='text-9xl font-extrabold'>+</h1>
            <p className='font-extrabold'>{props.text}</p>
        </button>
    )
}

export default AddButton