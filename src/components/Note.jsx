import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from './Note.module.css'

const Note = ({ content, onclick }) => {
    return (
        <div className={styles.note}>
            <p>{content}</p>
            <button onClick={onclick}>
                <FontAwesomeIcon icon={ faTrash } />
            </button>
        </div>
    )
}

export default Note