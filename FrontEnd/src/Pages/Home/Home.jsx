/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS ---> */
import styles from '../../Styles/Pages/Home/Home.module.css';

/* <--- COMPONENTES ---> */
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ToDoList from "../../Components/ToDoList";

/* <--- ASSETS ---> */
import Background from '../../Assets/Background.png';

function Home() {
    return (
        <>
            <Header />
            <section className={styles.sectionHome}>
                TESTE TEXT TESTE TEXTTEST
                <ToDoList />
            </section>
            <Footer />
        </>
    );
}

export default Home;
