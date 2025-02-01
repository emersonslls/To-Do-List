/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS ---> */
import styles from '../../Styles/Pages/Home/Home.module.css';

/* <--- COMPONENTES ---> */
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TodoList from "../../Components/List/ToDoList";

/* <--- ASSETS ---> */
import Background from '../../Assets/Background.png';

function Home() {
    return (
        <>
            <Header />
            <section className={styles.sectionHome}>
                <img src={Background} className={styles.Background} />
                <TodoList />
                 <Footer />
            </section>
           
        </>
    );
}

export default Home;
