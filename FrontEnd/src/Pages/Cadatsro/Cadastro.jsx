import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../Styles/Pages/Cadastro/Cadastro.module.css';
import Footer from "../../Components/Footer/Footer";
import Background from '../../Assets/Background.png';
import Logo from '../../Assets/Logo.png';
import SuccessMessage from "../../Components/Messages/Sucess/SucessMessage";
import ErrorMessage from "../../Components/Messages/Error/Error";

function Cadastro() {   
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // Mensagem dinâmica de erro

    const handleCadastro = () => {
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage("❌ Preencha todos os campos!");
            setShowError(true);
            setShowSuccess(false);
        } else if (password !== confirmPassword) {
            setErrorMessage("❌ As senhas não coincidem!");
            setShowError(true);
            setShowSuccess(false);
        } else {
            setShowError(false);
            setShowSuccess(true);

            // Aqui você pode adicionar lógica para enviar os dados ao backend
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }

        setTimeout(() => {
            setShowError(false);
        }, 3000);
    };

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.sectionLogin}>
                <img src={Background} className={styles.Background} alt="Background" />

                <Link to='/'>
                    <img src={Logo} className={styles.Logo} alt="Logo" />
                </Link>

                <div className={styles.RegisterContainer}>
                    <h2 className={styles.Title}>
                        Faça seu <span>&nbsp;cadastro</span>
                    </h2>
                    <p className={styles.SubTitle}>Boas-vindas ao To-Do List</p>

                    <input 
                        type="text" 
                        placeholder="Seu nome" 
                        className={styles.Input} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        className={styles.Input} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite a senha"
                        className={styles.Input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirme a senha"
                        className={styles.Input}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button className={styles.button} onClick={handleCadastro}>
                        Cadastre-se
                    </button>
                </div>

                <div className={styles.ContainerNotRegister}>
                    <h2 className={styles.Titulo}>
                        Já tem <span>&nbsp;cadastro?</span>
                    </h2>
                    <p className={styles.SubTitulo}>Se já possui cadastro, então faça o login e aproveite</p>
                    <button className={styles.Btn_Register} onClick={() => navigate("/login")}>Faça login</button>
                </div>

                <Footer />

                {showSuccess && <SuccessMessage />}
                {showError && <ErrorMessage message={errorMessage} />}
            </section>
        </>
    );
}

export default Cadastro;
