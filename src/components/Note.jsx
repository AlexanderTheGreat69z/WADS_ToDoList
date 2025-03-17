import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from './Note.module.css'

const Note = ({ content, onblur, ontrash }) => {
    const noteRef = useRef(null)

    return (
        <div className={styles.note}>
            <p ref={noteRef} onBlur={onblur} contentEditable="plaintext-only">{content}</p>
            <div className={styles.buttons}>
                <button onClick={ontrash}>
                    <FontAwesomeIcon icon={ faTrash } />
                </button>
            </div>
        </div>
    )
}

export default Note