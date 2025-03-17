import React from 'react'
import styles from "./Modal.module.css"

const AddNoteModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay}>
            <form onSubmit={onSubmit} className={styles.container}>
                <div className={styles.modalHeader}>
                    <h3 className={styles.title}><b>Make your Note!</b></h3>
                    <button className={styles.close} onClick={onClose}>X</button>
                </div>
                <p className={styles.desc}>What to note?</p>
                <input className={styles.modalInput} name="content" placeholder="Enter note here" type="text" />
                <input className={styles.submit} type="submit" value="Make Note!"/>
            </form>
        </div> 
    )
}

export default AddNoteModal