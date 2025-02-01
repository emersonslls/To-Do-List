/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* <--- CSS ---> */
import styles from '../../Styles/Pages/Login/Login.module.css';

/* <--- COMPONENTES ---> */
import Footer from "../../Components/Footer/Footer";

/* <--- ASSETS ---> */
import Background from '../../Assets/Background.png';
import Logo from '../../Assets/Logo.png';

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <section className={styles.sectionLogin}>
            <img src={Background} className={styles.Background} />
                <Link to='/'>
                    <img src={Logo} className={styles.Logo} />
                </Link>
                <div className={styles.LoginContainer}>
                    <h2 className={styles.Title}>
                        Faça seu <span>&nbsp;login</span>
                    </h2>
                    <p className={styles.SubTitle}>Boas vindas novamente!</p>
                    <input type="text" placeholder="Seu nome" className={styles.Input} />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite a senha"
                        className={styles.Input}
                    />
                    <div className={styles.Options}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <p>Mostrar Senha</p>
                        </label>
                        <a href="#" className={styles.EsqueceuSenha}>
                            Esqueceu a senha?
                        </a>
                    </div>
                    <button className={styles.button}>Faça login</button>
                </div>
                <div className={styles.ContainerNotRegister}>
                    <h2 className={styles.Titulo}>
                        Ainda não tem <span>&nbsp;cadastro?</span>
                    </h2>
                    <p className={styles.SubTitulo}>Faça seu cadastro!</p>
                    <button className={styles.Btn_Register}>Faça seu cadastro</button>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default Login;
