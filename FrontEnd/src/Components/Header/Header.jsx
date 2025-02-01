/* <--- FUNCTIONS REACT ---> */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* <--- CSS ---> */
import styles from "../../Styles/Components/Header/Header.module.css";

/* <--- ASSETS ---> */
import Search from "../../Assets/Icons/Search.svg";
import Logo from "../../Assets/Logo.png";
import DefaultProfilePic from "../../Assets/Profile.png";

function Header() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
    const [profilePic, setProfilePic] = useState(DefaultProfilePic); // Estado para a foto de perfil

    const items = ["Camiseta", "Calça", "Jaqueta", "Vestido", "Blusa", "Shorts"]; // Lista de itens

    // Função para lidar com o upload da nova foto
    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePic(reader.result); // Define a foto de perfil
            reader.readAsDataURL(file);
        }
    };

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <header>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logo" className={styles.logo} />
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
            <Link to='/login'> 
                <div className={styles.profileContainer}>
                    <img
                        src={profilePic}
                        alt="Foto de Perfil"
                        className={styles.profilePic}
                    />
                </div>
            </Link>

        </header>
    );
}

export default Header;
