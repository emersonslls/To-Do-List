/* <--- FUNCTIONS REACT ---> */
import React from "react";

/* <--- CSS ---> */
import styles from '../../Styles/Components/Footer/Footer.module.css';

/* <--- ASSETS ---> */
import SalesDev from '../../Assets/Emerson.png'

function Footer() {
    return (
        <footer>
            <div className={styles.DireitosEDev}>
                <h1 className={styles.Direitos}>
                    © Todos os direitos reservados - Emerson Sales
                </h1>
                <img src={SalesDev} className={styles.Dev}/>
            </div>
        </footer>
    );
}

export default Footer;
