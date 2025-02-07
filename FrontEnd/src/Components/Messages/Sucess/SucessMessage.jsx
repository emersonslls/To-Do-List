import React, { useEffect } from "react";
import styles from "../../../Styles/Components/Messages/Sucess/SuccessMessage.module.css";
import { CheckCircle } from "lucide-react"; 

const SuccessMessage = () => {
    return (
        <div className={styles.successMessage}>
            <CheckCircle className={styles.icon} size={40} />
            <p>Cadastro realizado com sucesso!</p>
        </div>
    );
};

export default SuccessMessage;
