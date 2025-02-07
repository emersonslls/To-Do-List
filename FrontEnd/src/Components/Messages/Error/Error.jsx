import React from "react";
import styles from "../../../Styles/Components/Messages/Error/ErrorMessage.module.css";
import { XCircle } from "lucide-react"; 

const ErrorMessage = () => {
    return (
        <div className={styles.errorMessage}>
            <XCircle className={styles.icon} size={40} />
            <p>As senhas não coincidem!</p>
        </div>
    );
};

export default ErrorMessage;
