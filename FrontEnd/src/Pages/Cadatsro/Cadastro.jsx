import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../Styles/Pages/Cadastro/Cadastro.module.css';
import Footer from "../../Components/Footer/Footer";
import Background from '../../Assets/Background.png';
import Logo from '../../Assets/Logo.png';

function Cadastro() {   
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleCadastro = () => {
        if (password !== confirmPassword) {
            setErrorMessage("❌ As senhas não coincidem!");
            setSuccessMessage("");  // Limpa a mensagem de sucesso se houver erro
        } else {
            setErrorMessage("");
            setSuccessMessage("✅ Cadastro realizado com sucesso! 🎉");

            // Aqui você pode adicionar lógica para enviar os dados ao backend
            setTimeout(() => {
                setSuccessMessage(""); // Remove a mensagem após 3 segundos
            }, 3000);
        }
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
                    <p className={styles.SubTitle}>Boas vindas ao To-Do List</p>

                    <input type="text" placeholder="Seu nome" className={styles.Input} />
                    <input type="email" placeholder="Seu e-mail" className={styles.Input} />

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

                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

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
            </section>
        </>
    );
}

export default Cadastro;
