/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/* <--- CSS ---> */
import styles from '../../Styles/Pages/Perfil/Perfil.module.css';

import Historico from '../../Components/HIstory/History';

/* <--- ASSETS ---> */
import Background from '../../Assets/Background.png';
import Logo from '../../Assets/Logo.png';
import Back from '../../Assets/Icons/Back.svg';
import Profile from '../../Assets/Profile.png';
import Clock from '../../Assets/Icons/Clock.svg';
import Search from "../../Assets/Icons/Search.svg";

function Perfil() {
    const [searchTerm, setSearchTerm] = useState("");

    const items = ["Camiseta", "Calça", "Jaqueta", "Vestido", "Blusa", "Shorts"]; // Lista de itens

    return (
        <>
            <section className={styles.sectionProfile}>
                <img src={Background} className={styles.Background} />
                <header className={styles.Header}>
                    <Link to='/'>
                        <img src={Back} className={styles.Voltar} />
                    </Link>
                    <img src={Logo} className={styles.Logo} />
                </header>
                <section className={styles.Information}>
                    <img src={Profile} className={styles.ProfileImage} />
                    <div className={styles.Dados}>
                        <h1>
                            Seu Nome
                        </h1>
                        <p>
                            seunome@email.com
                        </p>
                    </div>
                </section>
                <div className={styles.nameHistorico}>
                    <img src={Clock} />
                    <h1>Histórico</h1>
                </div>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Pesquise"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img
                        src={Search}
                        alt="Buscar"
                        className={styles.searchIcon}
                    />
                </div>
                <Historico />
            </section>
        </>
    );
}

export default Perfil;
