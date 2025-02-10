/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/* <--- CSS ---> */
import styles from '../../Styles/Pages/EsqueceuSenha/EsqueceuSenha.module.css';

/* <--- COMPONENTES ---> */
import Footer from "../../Components/Footer/Footer";

/* <--- ASSETS ---> */
import Background from '../../Assets/Background.png';
import Logo from '../../Assets/Logo.png';

function EsqueceuSenha() {

    return (
        <>
            <section className={styles.sectionEsqueceuSenha}>
                <img src={Background} className={styles.Background} />
                <Link to='/'>
                    <img src={Logo} className={styles.Logo} />
                </Link>
                <div className={styles.EsqueceuSenhaContainer}>
                    <h2 className={styles.Title}>
                        Esqueceu sua <span>&nbsp;senha</span>
                    </h2>
                    <p className={styles.SubTitle}>Recupere a sua senha</p>
                    <input type="email" placeholder="Seu e-mail" className={styles.Input} />
                    <button className={styles.button}>Recuperar senha</button>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default EsqueceuSenha;
