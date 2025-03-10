import React from 'react'
import styles from "./Logo.module.css"

const Logo = () => {
    const logo = "src/assets/logo.png"
    return (
        <div className={styles.logo}>
            <img className='h-48 w-96 object-contain' src={logo} alt="LegsList" />
            <div className={styles.text}>
                <h1 className='text-3xl pb-3 mb-2 border-b-2'><b>LegsList</b></h1>
                <p className='text-sm my-auto'>Your handy-dandy to-do list manager</p>
            </div>
        </div>
    )
}

export default Logo