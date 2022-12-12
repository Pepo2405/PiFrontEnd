import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/notFound.png";
import { GoBackButton } from "../components/GoBackButton";
import { Layout } from "../components/Layout";
import styles from "../styles/notFound.module.css";
export const NotFound = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <GoBackButton />
        <h1>No encontramos la Pagina que buscas</h1>
        <h2>
          Podes Clickear{" "}
          <Link to={"/home/page/1"} className={styles.link}>
            aca{" "}
          </Link>
          para volver
        </h2>
        <img src={logo} alt={"404"} />
      </main>
    </Layout>
  );
};
