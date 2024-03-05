"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { DM_Serif_Display } from "next/font/google";
import { IoMenu, IoClose } from "react-icons/io5";

const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400" });


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClose(){
    setIsOpen(false);
  }

  return (
    <nav className={styles.nvNav}>
      <ul>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/#games">JUEGOS</a>
        </li>
        <li>
          <a href="/tour">RECORRIDO</a>
        </li>
        <li>
          <a href="/collection">COLECCIÓN</a>
        </li>
        <li>
          <a href="/reserva">RESERVAS</a>
        </li>
        <li>
          <a href="/#footer">SOBRE NOSOTROS</a>
        </li>
      </ul>
      <p className={`${dm.className} ${styles.nvMCT}`}>MCT</p>
      <IoMenu size={48} color="#eee5ac" onClick={() => {setIsOpen(true)}} className={styles.menu}/>
      {/*Mobile*/}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <IoClose color="#eee5ac" size={48} className={styles.close} onClick={handleOnClose}/>
          <h1 className={`${dm.className} ${styles.nvMCTMob}`}>MCT</h1>
          <ul className={styles.mobileMenuOptions}>
            <li>
              <a href="/" onClick={handleOnClose}>INICIO</a>
            </li>
            <li>
              <a href="/#games" onClick={handleOnClose}>JUEGOS</a>
            </li>
            <li>
              <a href="/tour" onClick={handleOnClose}>RECORRIDO</a>
            </li>
            <li>
              <a href="/collection" onClick={handleOnClose}>COLECCIÓN</a>
            </li>
            <li>
              <a href="/reserva" onClick={handleOnClose}>RESERVAS</a>
            </li>
            <li>
              <a href="/#footer" onClick={handleOnClose}>SOBRE NOSOTROS</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
