import React from 'react'
import styles from "./Modal.module.css"

const AddTodoModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay}>
            <form onSubmit={onSubmit} className={styles.container}>
                <div className={styles.modalHeader}>
                    <h3 className={styles.title}><b>Set new To-do!</b></h3>
                    <button className={styles.close} onClick={onClose}>X</button>
                </div>
                <p className={styles.desc}>What's next on the list?</p>
                <input className={styles.modalInput} name="task" placeholder="Enter task here" type="text" />
                <input className={styles.submit} type="submit" value="Make To-do!"/>
            </form>
        </div> 
    )
}

export default AddTodoModal