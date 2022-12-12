import React from "react";
import styles from './Form.module.css'


function Message(props) {


    return (
        <>
            <p className={styles.text}>{props.text}</p>
        </>
    )

}
export { Message }