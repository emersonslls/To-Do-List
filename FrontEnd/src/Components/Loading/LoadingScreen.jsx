import React, { useEffect } from "react";
import styles from "../../Styles/Components/Loading/LoadingScreen.module.css";

const LoadingScreen = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden"; // Bloqueia o scroll
        return () => {
            document.body.style.overflow = "auto"; // Restaura o scroll ao desmontar
        };
    }, []);
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingScreen;
