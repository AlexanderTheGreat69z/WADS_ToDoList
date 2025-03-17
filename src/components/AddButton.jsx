import React from 'react'
import styles from './AddButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({text, onclick}) => {
    return (
        <button className={styles.button} onClick={onclick}>
            <h1><FontAwesomeIcon icon={faPlus} /></h1>
            <p className='font-extrabold'>{text}</p>
        </button>
    )
}

export default AddButton